/**
 * Created by 26053 on 2017/5/17.
 */
var querystring = require('querystring');
var postData = querystring.stringify({
    'content':'һ���ڴ���һ�ڵĿγ�',
    'cid':348
});

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/document',
    method:'POST',
    headers:{

    }
};

var req = http.request(option,function(res){
    console.log('Status:' + res.statusCode);
    console.log('headers:'+JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk)
    });
    res.on('end',function(){
        console.log('�������')
    });
    res.on('error',function(e){
        console.log('Error:'+ e.message)
    });

});
req.write(postData);
req.end();