/**
 * Created by 26053 on 2017/5/15.
 */
function learn(something) {
    console.log(something)
}
function we(callback,something){
    something += 'is cool';
    callback(something);
}

we(learn,'Nodejs');

we(function(something){
    console.log(something)
},'Jade');