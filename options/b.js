let containsB = (contentArr, optionArr) => {
  if (optionArr.includes("-b")) {
    let counter = 1;
    for (let i = 0; i < contentArr.length; i++) {
      if (contentArr[i] != "") {
        // console.log(`${counter++} ${contentArr[i]}`);
        contentArr[i] = `${counter++} ${contentArr[i]} `;
      }
    }
  }
  return contentArr;
};

module.exports = containsB;
