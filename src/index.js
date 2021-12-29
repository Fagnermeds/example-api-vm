const express = require('express');

const app = express();

const users = [
  { id: 1, name: 'fagner' },
  { id: 2, name: 'emilly' }, 
  { id: 3, name: 'falconi' }, 
  { id: 4, name: 'fabricio' }, 
  { id: 5, name: 'socorro' }, 
  { id: 6, name: 'francinaldo' },
];

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

app.get('/users', (request, response) => {
  return response.json(users);
});

app.get('/users/:id', (request, response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === Number(id)); 

  return response.json(user);
});

app.listen(8080, () => console.log('Running in port 8080'));