const { MongoClient } = require('mongodb');

// Replace 'your_database_url' with the actual MongoDB connection string
const url = 'mongodb+srv://Amal:amal1234@cluster0.xibharg.mongodb.net/';
const dbName = 'shopping'; // Replace with your database name

let dbInstance = null;

async function connectToDB() {
  if (dbInstance) return dbInstance;

  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    dbInstance = db;
    console.log('Connected to MongoDB successfully');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
// 
module.exports = connectToDB;