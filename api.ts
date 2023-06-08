// Create a basic api with get and post request. On sending get request it should give following meaasge - Hello how are you, use appropriate status codes. On making post request collect name an sage of the person and store the same in a json file

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const jsonFilename = 'person_data.json';

// Middleware to parse request body
app.use(bodyParser.json());

// GET request handler
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello, how are you?');
});

// POST request handler
app.post('/', (req: Request, res: Response) => {
  const { name, age } = req.body;
  if (!name || !age) {
    res.status(400).send('Name and age are required');
    return;
  }

  const person = { name, age };
  const jsonData = JSON.stringify(person, null, 2);

  fs.writeFile(jsonFilename, jsonData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Server error');
    } else {
      console.log('Person data written to', jsonFilename);
      res.status(201).send('Data saved successfully');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
