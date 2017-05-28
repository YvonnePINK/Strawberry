/**
 * Created by 26053 on 2017/4/11.
 */
    //�ϴ��������ת
var Yike = angular.module('Yike',['ngRoute','Controllers']);

Yike.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today',{
        //����ֻ���ַ���������ʲôsrc���ԣ����Ա�ʾ��./����˼�ǵ�ǰ��
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
    //����������ʼֵ
    $rootScope.collapsed = false;
    //ȫ�ַ���
    $rootScope.toggle = function(){
        //console.log(1);
        //�ı�������ʼֵ
        $rootScope.collapsed = !$rootScope.collapsed;
        //��ȡ���е���
        var navs = document.querySelectorAll('.navs dd');

        if($rootScope.collapsed){
            //console.log('��')��
            for(var i=0;i<navs.length;i++){
                //�ƶ�Ϊ0,�������������Ƕ�Ԫ�ؽ�����ת�����š��ƶ�����б
                navs[i].style.transform = 'translate(0)';
                //�����ӳ�0.2��,��ʵ��ĳһ����Ч��ǰ�ȵ�0.2��
                navs[i].style.transitionDelay = '0.2s';
                //transition-duration ���Թ涨��ɹ���Ч����Ҫ���ѵ�ʱ��,���ù���Ч����������
                navs[i].style.transitionDuration = (i+1)*0.15;
            }
        }else{
            console.log('�ر�');
            var len = navs.length - 1;
            for(var j=len;j>0;j--){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j)*0.15;
            }
        }
    }
}]);