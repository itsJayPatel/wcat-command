let preprocess=(inputArr)=>{
  let optionArr = [];
  let fileArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);

    if (firstChar == "-") {
      optionArr.push(inputArr[i]);
    } else {
      fileArr.push(inputArr[i]);
    }
  }

  return {
      files : fileArr,
      options : optionArr
  }
};

module.exports=preprocess;