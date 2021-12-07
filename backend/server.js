const express=require('express')
var https = require("https");
var fs = require("fs");
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true}))
const img=require('./routes/img');
const nlp=require('./routes/nlp');
app.use('/nude',img);
app.use('/nlp',nlp);
// app.listen(5000,console.log("Listening on port 5000"));
https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(5000, function () {
    console.log(
      "app listening on port 5000! Go to https://localhost:5000/"
    );
  });