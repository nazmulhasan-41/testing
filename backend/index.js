const express = require('express')
const app = express();
const port = 5000;
var cors = require('cors')
var bodyParser = require('body-parser')
var user='jewel4124';
var password='haYdZfAnMQLTlK7T';

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${user}:${password}@cluster0.jyuwz.mongodb.net/blogDB?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const blogCollection = client.db("blogDB").collection("blogs");
  // perform actions on the collection object
  console.log('connected db');

  app.get('/', (req, res) => {
    res.send('Hello db!')
  })
  app.post('/add',(req,res)=>{
    
    console.log('=====>>>',req.body);
    blogCollection.insertOne(food);
    res.send({x:2})
  })

  client.close();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})