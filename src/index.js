const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

app.get('/names', (request, response) => {
  return response.json([
    { id: 1, name: 'fagner' },
    { id: 2, name: 'emilly' }, 
    { id: 3, name: 'falconi' }, 
    { id: 4, name: 'fabricio' }, 
    { id: 5, name: 'socorro' }, 
    { id: 6, name: 'francinaldo' },
  ]);
})

app.listen(8080, () => console.log('Running in port 8080'));