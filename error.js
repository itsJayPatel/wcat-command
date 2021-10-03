let chalk=require('chalk');
let fs=require('fs');


const error=(fileArr,optionArr)=>{
    for(let i=0;i<fileArr.length;i++){
        let filePath=fs.existsSync(fileArr[i]);
        if(!filePath){
            console.log(chalk.redBright(`FILE NOT FOUND ERR!! ${fileArr[i]}`));
            return true;
        }
    }
    
    if(optionArr.includes("-n") && optionArr.includes("-b")){
        console.log("SELECT EITHER -n OR -b OPTION!!")
        return true;
    }

    return false;
}

module.exports=error;