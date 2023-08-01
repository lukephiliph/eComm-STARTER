const express = require('express');
const app = express();
const connectToDB = require('./connection');

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB and get the database instance
connectToDB()
  .then((db) => {
    // Here, you have access to the MongoDB database instance (db)
    // Now you can define routes and perform database operations

    // Example route: Fetch data from MongoDB
    app.get('/', async (req, res) => {
      try {
        const collection = db.collection('product'); // Replace with your collection name
        const data = await collection.find().toArray();
        res.json(data);
      } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).send('Internal Server Error');
      }
    });

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application on MongoDB connection failure
  });
