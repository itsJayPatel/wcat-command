const fs=require('fs');
const path=require('path');

let scanner = (fileArr) => {
  let content = "";
  for (let i = 0; i < fileArr.length; i++) {
    let buffer = fs.readFileSync(fileArr[i]);
    content += buffer + "\r\n";
  }

  return contentArr = content.split("\r\n");
};

module.exports=scanner;