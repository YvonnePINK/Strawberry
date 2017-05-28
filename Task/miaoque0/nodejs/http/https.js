/**
 * Created by 26053 on 2017/5/17.
 */
var https = require('https');
var fs = require('fs');

var options = {
    key:fs.readFileSync('ssh_key.pem'),
    //证书文件
    cert:fs.readFileSync('ssh_cert.pem')
};
https
    .createServer(options,function(req,res){
        //向请求的客户端发送响应头，该函数在一个请求内最多只能调用一次
        //如果不调用，则会自动生成一个响应头
        res.writeHead(200);
        res.end('Hello Imooc')
})
  .listen(8090);