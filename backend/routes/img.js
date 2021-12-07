const express = require('express');
const fs = require('fs');
const router = express.Router();
const download=require('image-downloader');
const path=require('path');
var nude = require('nude');
const request=require('request');
const axios = require('axios');
const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3whkDtaUFevNMzJ-w2JtnhrIEl0DA1MdOg&usqp=CAU"


router.get('/', async (req, res) => {
    try 
    {
        const url=req.query.value;
        const user=process.env.api_user,secret=process.env.api_secret;
        const val=await axios.get('https://api.sightengine.com/1.0/check.json', {
          params: {
            'url':url,
            'models': 'nudity,wad',
            'api_user':'714778144',
            'api_secret':'GLqDXeium4eabmFkadKK'
          }
        })
        const value=val.data;
        if(value.nudity.safe<0.98||value.weapon>0.01||value.alcohol>0.01||value.drugs>0.01)
        {
          console.log(value)
          return true;
        }
        return false;
        }
        catch(err)
        {
          console.log(err);
          return false;
        }
        });

/*const fs = require('fs');
const path = require('path');

const directory ="/home/anbu/parentalsecure/backend/routes/";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});*/
module.exports = router;
