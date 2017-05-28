/**
 * Created by 26053 on 2017/5/15.
 */
//回调函数
var c=0;
function printIt(){
    console.log(c);
}
function plus(callback){
    //加个延时
    setTimeout(function(){
        c +=1;
        callback();
    },3000);
}
plus(printIt);
