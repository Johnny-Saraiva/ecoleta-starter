const express = require('express');
const server = express();

const db = require('./database/db');
server.use(express.static('public'));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server.get('/', (request, response) => {
  return response.render('index.html');
});
server.get('/create-point', (request, response) => {
  return response.render('create-point.html');
});

server.get('/search-results', (request, response) => {
  db.all(`SELECT * FROM places`, function ListAll(error, rows) {
    if (error) {
      return console.log(error)
    }
    const totalPlaces = rows.length;
    return response.render('search-results.html', { places: rows, totalPlaces });
  });
});

server.listen(3000, () => {
  console.log('🚀 Server started on port 3000! 🚀');
});
