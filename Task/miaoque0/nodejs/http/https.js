/**
 * Created by 26053 on 2017/5/17.
 */
var https = require('https');
var fs = require('fs');

var options = {
    key:fs.readFileSync('ssh_key.pem'),
    //֤���ļ�
    cert:fs.readFileSync('ssh_cert.pem')
};
https
    .createServer(options,function(req,res){
        //������Ŀͻ��˷�����Ӧͷ���ú�����һ�����������ֻ�ܵ���һ��
        //��������ã�����Զ�����һ����Ӧͷ
        res.writeHead(200);
        res.end('Hello Imooc')
})
  .listen(8090);