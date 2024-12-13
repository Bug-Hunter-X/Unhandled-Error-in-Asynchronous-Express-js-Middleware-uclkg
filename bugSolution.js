const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a successful response
        res.send('Hello from Express!');
      } else {
        // Simulate an error - now handled gracefully
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error.message); // Log the error for debugging
      res.status(500).send('Internal Server Error'); // Send a proper error response to the client
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});