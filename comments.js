// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a comments array
const comments = [
  { username: 'Todd', comment: 'lol so funny' },
  { username: 'Skyler', comment: 'I like turtles' }
];

// Use body-parser to parse JSON
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});