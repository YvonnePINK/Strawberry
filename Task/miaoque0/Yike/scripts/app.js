/**
 * Created by 26053 on 2017/4/11.
 */
    //老大带部门运转
var Yike = angular.module('Yike',['ngRoute','Controllers']);

Yike.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today',{
        //这里只是字符串，不是什么src属性，所以表示成./，意思是当前的
          templateURL:'./views/today.html',
          controller:'TodayController'
    })
        .when('/older',{
            templateUrl:'./views/older.html',
            controller:'OlderController'
        })
        .otherwise({
            redirectTo:'/today'
        })
}]);
Yike.run(['$rootScope',function($rootScope){
    //设置类名初始值
    $rootScope.collapsed = false;
    //全局方法
    $rootScope.toggle = function(){
        //console.log(1);
        //改变类名初始值
        $rootScope.collapsed = !$rootScope.collapsed;
        //获取所有导航
        var navs = document.querySelectorAll('.navs dd');

        if($rootScope.collapsed){
            //console.log('打开')；
            for(var i=0;i<navs.length;i++){
                //移动为0,该属性允许我们对元素进行旋转、缩放、移动或倾斜
                navs[i].style.transform = 'translate(0)';
                //过滤延迟0.2秒,即实现某一动画效果前先等0.2秒
                navs[i].style.transitionDelay = '0.2s';
                //transition-duration 属性规定完成过渡效果需要花费的时间,即让过渡效果持续几秒
                navs[i].style.transitionDuration = (i+1)*0.15;
            }
        }else{
            console.log('关闭');
            var len = navs.length - 1;
            for(var j=len;j>0;j--){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j)*0.15;
            }
        }
    }
}]);