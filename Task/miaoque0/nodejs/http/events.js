/**
 * Created by 26053 on 2017/5/16.
 */
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
//addEventListener
//on���һ������Ϊ�¼������ڶ�������Ϊ�¼�������
//�Ƴ���Ҫ���������������������޷��Ƴ���
function water(who){
    console.log('��'+who+'��ˮ');
}
life.on('��ο',water);
//��emit�����¼�

life.on('��ο',function(who){
    console.log('��'+who+'����')
});
life.on('��ο',function(who){
    console.log('��'+who+'����d ')
});
life.on('��ο',function(who){
    console.log('��'+who+'����cx')
});
life.on('���簮',function(who){
    console.log('��'+who+'������')
});
var hasConfortListener = life.emit('��ο','����');
var hasLovedListener = life.emit('���簮','����');
var hasPlayedListener = life.emit('���滵','����');

life.removeEventListener('��ο',water);
console.log(life.listeners('��ο').length);
console.log(EventEmitter.listenerCount(life,'��ο'));
//��ӡ����Ϊtrue����false
console.log(hasConfortListener);
console.log(hasLovedListener );
console.log(hasPlayedListener);

life.emit('��ο','����');
