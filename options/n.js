let containsN=(contentArr,optionArr)=>{
    if (optionArr.includes("-n")) {
        for (let i = 0; i < contentArr.length; i++) {
          // console.log(`${i + 1} ${contentArr[i]}`);
          contentArr[i] = `${i + 1} ${contentArr[i]} `;
        }
    }

    return contentArr;
}

module.exports=containsN;