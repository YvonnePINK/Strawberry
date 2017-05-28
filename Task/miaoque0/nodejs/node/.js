/**
 * Created by 26053 on 2017/5/22.
 */
var fs = require('fs');
//异步读文件
fs.readFile('./foo.js','utf8',function(err,data){
    console.log(data);k
});
//同步读文件
var data = fs.readFileSync('./foo.js','utf8');
console.log(data);