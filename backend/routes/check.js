let natural=require('natural');
let word=[];
let callback=(w)=>{
     word.push(w);
     console.log(word)
}
// callback("wksja")
// console.log(word)
const wait=async()=>{natural.BayesClassifier.load('classifier.json', null, async function(err, classifier) {
     let word=await classifier.classify("stirng");
     callback(word);
});
}
wait();
console.log(word,"sfda") 