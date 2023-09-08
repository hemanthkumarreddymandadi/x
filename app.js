// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can choose any port you prefer

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define your POST endpoint
app.post('/api/endpoint', (req, res) => {
  // Get data from the request body
  const { userId, collegeEmailId, collegeRollNumber, numbers, alphabets } = req.body;

  // Calculate the highest alphabet
  const highestAlphabet = alphabets.reduce((highest, current) => {
    return current > highest ? current : highest;
  }, 'A');

  // Create the response JSON
  const response = {
    status: 'Success',
    userId,
    collegeEmailId,
    collegeRollNumber,
    numbers,
    alphabets,
    highestAlphabet,
  };

  res.json(response);
});

// Define your GET endpoint
app.get('/api/operation_code', (req, res) => {
  // Define your operation code here
  const operationCode = 'XYZ123';

  res.json({ operation_code: operationCode });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
