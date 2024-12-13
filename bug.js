const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a successful response
      res.send('Hello from Express!');
    } else {
      // Simulate an error - this is the bug! The error is not handled properly and will crash the server
      throw new Error('Something went wrong!');
    } 
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});