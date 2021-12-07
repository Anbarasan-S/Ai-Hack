const axios = require('axios');
const url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3whkDtaUFevNMzJ-w2JtnhrIEl0DA1MdOg&usqp=CAU"
const base64=require('node-base64-image');
require('dotenv').config()
const options = {
  string: true,
  headers: {
    "User-Agent": "my-app"
  }
};
const checkData=async()=>{
  try{
  const user=process.env.api_user,secret=process.env.api_secret;
  console.log(`'${user}'`)
const val=await axios.get('https://api.sightengine.com/1.0/check.json', {
  params: {
    'url':url,
    'models': 'nudity,wad',
    'api_user':'714778144',
    'api_secret':'GLqDXeium4eabmFkadKK'
  }
})
console.log(val.data);
}
catch(err)
{
  console.log(err);
}
}
checkData();