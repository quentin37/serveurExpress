const express = require('express');
const dataSource = require('./utils').dataSource;
const wilderController = require('./controller/wilder');
const skillController = require('./controller/skill');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/wilder',wilderController.create) //create 
app.put('/api/wilder',wilderController.update) //update
app.delete('/api/wilder',wilderController.delete) // delete
app.get('/api/wilder',wilderController.findAll) // select * from 

app.post('/api/skill',skillController.create) //create 
app.put('/api/skill',skillController.update) //update
app.delete('/api/skill',skillController.delete) // delete
app.get('/api/skill',skillController.findAll) // select * from 



const start = async () => {
  await dataSource.initialize();
  app.listen(port, () => console.log(`Example app listening on port ${port}`));
}

start();
