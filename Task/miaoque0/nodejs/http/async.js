/**
 * Created by 26053 on 2017/5/15.
 */
//�ص�����
var c=0;
function printIt(){
    console.log(c);
}
function plus(callback){
    //�Ӹ���ʱ
    setTimeout(function(){
        c +=1;
        callback();
    },3000);
}
plus(printIt);
