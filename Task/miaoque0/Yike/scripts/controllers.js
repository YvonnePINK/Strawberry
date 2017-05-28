/**
 * Created by 26053 on 2017/4/11.
 */
//实例一个模块，用来专门管理所有的控制器
//var app = angular.module('Controllers',[])

angular.module('Controllers',[])

.controller('DemoController',['$scope',function($scope){

}])
    //导航菜单
    .controller('NavController',['$scope',function($scope){
        //将来在修改的时候不需要改html页面，增加或删除的时候，这样代码的耦合度就下降了
        //此数据将来要是得从后台获取也方便，直接在这里http请求
        //导航数据
           $scope.navs = [
               {link:'#/today',text:'今日一刻',icon:'icon-home'},
               {link:'#/older',text:'往期内容',icon:'icon-file-empty'}
           ]
    }])
    //今日一刻
.controller('TodayController',['$scope','http', 'filter',function ($scope,$http,$filter) {
    //获得计算机时间
        var today = $filter('date')(new Date,'yyyy-MM-dd');

        $http({
               url:'./api/today.php',//请求地址，解决跨域问题
               method:'get',
               params:{today:today}
           }).success(function (info) {
                //console.log(info);
            //日期
               $scope.date = info.date;
            //文章数据
               $scope.posts = info.posts;
           })
    }])
    //往期内容
    .controller('OlderController',['$scope', function ($scope) {

    }]);