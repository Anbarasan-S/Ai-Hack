const express=require('express')
var https = require("https");
var fs = require("fs");
const cors=require('cors');
const cluster = require('cluster')
const cpus = require('os').cpus()
const app=express();
app.use(cors());
app.use(express.json())
const img=require('./routes/img');
const nlp=require('./routes/nlp');
app.use('/nude',img);
app.use('/nlp',nlp);
// app.listen(5000,console.log("Listening on port 5000"));
if(cluster.isMaster)
{
  
}
  app.listen(5000, function () {
    console.log(
      "app listening on port 5000! Go to https://localhost:5000/"
    );
  });
