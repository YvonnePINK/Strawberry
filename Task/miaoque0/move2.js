/**
 * Created by 26053 on 2017/3/20.
 */
window.onload = function(){
    var oBtn = document.getElementById('btn');
    var oDiv = document.getElementById('dov1');

    oBtn.onclick=function(){
        startMove(oDiv,{width:102,height:200,opacity:100});
    }
};
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
var timer = null;

//function startMove (obj,attr,iTarget,fn)
function startMove(obj, json, fn) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var attr in json) {
            //取当前值

            var iCur = 0;
            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                iCur = parseInt(getStyle(obj, attr));
            }
            //算速度
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            //检测停止
            if (iCur == json[attr]) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
            else {
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                    obj.style.opacity = (iCur + iSpeed) / 100;
                }
                else {
                    obj.style[attr] = iCur + iSpeed + 'px';

                }
            }
        }

    }, 30)
}