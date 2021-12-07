const natural=require('natural')
const express=require('express')
const router=express.Router();
router.get('/profane',async(req,res)=>{
    let str=req.query.val;
    str=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    const words=str.split(' ');
    console.log(str)
    let badwords=[];
    for(let i=0;i<words.length;i++){
    const func = async () => {
    return myPromise = new Promise((resolve, reject) => {
        natural.BayesClassifier.load('/home/anbu/parentalsecure/backend/routes/classifier.json', null, async (err, classifier) => {
            console.log(classifier.classify(words[i]),words[i]);
            resolve(classifier.classify(words[i]))
        })
    });
}
await func().then((data, err) => {
   if(data==="bad")
   {
       badwords.push(words[i]);
   }
});
}  
    const jsondata={value:badwords}
    if(badwords.length!=0)
    {

        return res.status(200).json(jsondata);
    }    
    else
    {
        return res.status(200).json({value:"continue"});
    }
    }
);
module.exports=router;