/**
 * Created by 26053 on 2017/5/16.
 */
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
//addEventListener
//on后第一个参数为事件名，第二个参数为事件的内容
//移除需要具名函数，匿名函数是无法移除的
function water(who){
    console.log('给'+who+'倒水');
}
life.on('求安慰',water);
//用emit触发事件

life.on('求安慰',function(who){
    console.log('给'+who+'干嘛')
});
life.on('求安慰',function(who){
    console.log('给'+who+'干嘛d ')
});
life.on('求安慰',function(who){
    console.log('给'+who+'干嘛cx')
});
life.on('求溺爱',function(who){
    console.log('给'+who+'交工资')
});
var hasConfortListener = life.emit('求安慰','汉子');
var hasLovedListener = life.emit('求溺爱','汉子');
var hasPlayedListener = life.emit('求玩坏','汉子');

life.removeEventListener('求安慰',water);
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'));
//打印出来为true或者false
console.log(hasConfortListener);
console.log(hasLovedListener );
console.log(hasPlayedListener);

life.emit('求安慰','汉子');
