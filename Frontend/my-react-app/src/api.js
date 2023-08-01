// api.js
const API_BASE_URL = 'http://localhost:3001'; // Replace with your Node.js server URL

// export const adminSignup = async (adminData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/adminSignup`, {
//       method: 'POST', // Corrected to 'POST'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(adminData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error signing up admin:', error);
//     throw error;
//   }
// };
export const getAllData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getAllData`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };