const express = require('express');
const dataSource = require('./utils').dataSource; 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => console.log(`Example app listening on port ${port}`));
}

start();
