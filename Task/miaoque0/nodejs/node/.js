/**
 * Created by 26053 on 2017/5/22.
 */
var fs = require('fs');
//�첽���ļ�
fs.readFile('./foo.js','utf8',function(err,data){
    console.log(data);k
});
//ͬ�����ļ�
var data = fs.readFileSync('./foo.js','utf8');
console.log(data);