const express=require('express')
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true}))
const img=require('./routes/img');
const nlp=require('./routes/nlp');
app.use('/nude',img);
app.use('/',nlp);
app.listen(5000,console.log("Listening on port 5000"));