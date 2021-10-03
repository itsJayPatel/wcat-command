const chalk = require('chalk');
function output(contentArr){
    let op=contentArr.join("\r\n");
    console.log(chalk.bold.cyan(op));
}
module.exports=output;