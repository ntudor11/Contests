import config from './config';
import express from 'express';
import apiRouter from './api'

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'hello express and <em>EJS</em> !'
  });
  //console.log('LOG: Hit the front page');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about.html', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
//   console.log('LOG: Hit the front page');
// });

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
