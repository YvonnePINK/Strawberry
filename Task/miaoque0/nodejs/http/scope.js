/**
 * Created by 26053 on 2017/5/15.
 */
    //×÷ÓÃÓò
var globalVarible = "this is a dog";
function localFunction(){
    var localVarible = 'this is a pig';
    console.log(localVarible);
    globalVarible = 'this is a man';
    console.log(globalVarible);
    function innerLocalFunction(){
        var innerLocalVarible = 'this is a cat';
        console.log(innerLocalVarible);
        console.log(localVarible);
        console.log(globalVarible);
    }
    innerLocalFunction();
}
localFunction();