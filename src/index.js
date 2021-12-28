const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

app.listen(8080, () => console.log('Running in port 8080'));