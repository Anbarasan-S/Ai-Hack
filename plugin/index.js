console.log(window.location.href);
const tags = ["a", "p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "b", "i", "div", "em","strong"];
let elements = [];


for (let i = 0; i < tags.length; i++) {
  elements.push(document.getElementsByTagName(tags[i]));
}

let icon = document.createElement("h1");
icon.innerHTML = "hello";
async function postData(url, data = {}) {

  const response = await fetch(url, {
    method: 'get'
  });
  return await response.json();
}
for (let i = 0; i < elements.length; i++) {
  for (let j = 0; j < elements[i].length; j++) {

    $(elements[i][j]).contents().filter(function () {
      return this.nodeType == 3
    }).each(function () {
      const words = this.textContent;
      (async () => {
        const data = await postData(`http://15.206.90.91:5000/nlp/profane?val=${words}`)
        if(data.value!=="continue")
        {
          const arr=data.value;
          for(let i of arr)
          {
            var re =  new RegExp(`\\b${data.value}\\b`,"i");
            this.textContent=await this.textContent.replace(re,"***");
          }
        }
      })();
    }
    );

  }
}

// const images=document.getElementsByTagName('img');
// for(let i=0;i<images.length;i++)
// {
//     const sendDatas=async()=>{
//         const response=await fetch(`http://localhost:5000/nude/?value=${images[i].src}`,{method:'GET'});
//         console.log(response)
//         if(response)
//         {
//             console.log("yes")
//             images[i].src="https://cdn.pixabay.com/photo/2012/04/24/12/29/no-symbol-39767_640.png"
//         }
//     }
//     sendDatas();
// }