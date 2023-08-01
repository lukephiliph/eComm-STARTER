// Your React component (e.g., Test.js)

import React, { useEffect, useState } from 'react';
import { getAllData } from '../api';

function Test() {
  const [data, setData] = useState([]); // State to hold the fetched data

  // Define the fetchData function at the component level
  const fetchData = async () => {
    try {
      const fetchedData = await getAllData();
      setData(fetchedData); // Update the state with the fetched data
      console.log('All data:', fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData inside the useEffect
  }, []);

  
  return (
    <>
      <button onClick={() => fetchData()}>Fetch Data</button>
      {data.map((item) => (
        <div key={item._id}>{item.Name}</div>
      ))}
    </>
  );
}

export default Test;
