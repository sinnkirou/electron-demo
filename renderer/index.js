//h5拖放api
const fs = require('fs');

const content = document.querySelector(".content");
content.ondragenter = content.ondragover = content.dragleave = ()=>{
    return false;//阻止默认行为
}

content.ondrop = (e)=>{
    e.preventDefault();
    const path = e.dataTransfer.files[0].path;

    fs.readFile(path, 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
            return false;
        }
        content.innerHTML = data;
    })
}