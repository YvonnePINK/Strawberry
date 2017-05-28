/**
 * Created by 26053 on 2017/5/16.
 */
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';


http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end', function () {
        console.log(html)
    })
}).on('error',function(){
    console.log('获取课程数据出错')
});