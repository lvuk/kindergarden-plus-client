import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// axios.interceptors.response.use(
//   (response) => response, // Pass through successful responses
//   (error) => {
//     // Check if the error has a response (i.e., server responded with an error status)
//     if (error.response) {
//       const { status, data } = error.response;

//       // Handle specific status codes
//       switch (status) {
//         case 400:
//           // Handle bad request (e.g., validation errors)
//           console.log(data.errors[0].message || 'Validation failed');
//           break;
//         case 401:
//           // Handle unauthorized (e.g., token invalid or expired)
//           console.error('Unauthorized:', data.message || 'Please log in again');
//           // Optionally: Trigger a logout, redirect to login, or refresh token
//           // logoutUser();
//           break;
//         case 403:
//           // Handle forbidden (e.g., insufficient permissions)
//           console.error(
//             'Forbidden:',
//             data.message || 'You do not have access to this resource'
//           );
//           break;
//         case 404:
//           // Handle not found
//           console.error(
//             'Not Found:',
//             data.message || 'The requested resource was not found'
//           );
//           break;
//         case 500:
//           // Handle internal server error
//           console.error(
//             'Server Error:',
//             data.message || 'An error occurred on the server'
//           );
//           break;
//         default:
//           // Handle other unexpected status codes
//           console.error(
//             `Error: ${status}`,
//             data.message || 'An unexpected error occurred'
//           );
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Network Error: No response received from the server');
//     } else {
//       // Something happened in setting up the request
//       console.error('Error:', error.message);
//     }

//     // Optionally, you can throw or return custom error messages for the calling function
//     return Promise.reject(error); // Forward the error to the caller
//   }
// );

export default axios;
