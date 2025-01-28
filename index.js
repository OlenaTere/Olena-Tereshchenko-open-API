// //Creating a fetch



fetch('https://api.thecatapi.com/v1/images/search?api_key=live_U1JAdpTMmfDCJTXwUNxRGv4yZ0VWgSAbZMBqy4QDtG6VVrQd8RnLDH5gkvh9Tx2C')
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Do something with the data
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });