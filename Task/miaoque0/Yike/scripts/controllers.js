/**
 * Created by 26053 on 2017/4/11.
 */
//ʵ��һ��ģ�飬����ר�Ź������еĿ�����
//var app = angular.module('Controllers',[])

angular.module('Controllers',[])

.controller('DemoController',['$scope',function($scope){

}])
    //�����˵�
    .controller('NavController',['$scope',function($scope){
        //�������޸ĵ�ʱ����Ҫ��htmlҳ�棬���ӻ�ɾ����ʱ�������������϶Ⱦ��½���
        //�����ݽ���Ҫ�ǵôӺ�̨��ȡҲ���㣬ֱ��������http����
        //��������
           $scope.navs = [
               {link:'#/today',text:'����һ��',icon:'icon-home'},
               {link:'#/older',text:'��������',icon:'icon-file-empty'}
           ]
    }])
    //����һ��
.controller('TodayController',['$scope','http', 'filter',function ($scope,$http,$filter) {
    //��ü����ʱ��
        var today = $filter('date')(new Date,'yyyy-MM-dd');

        $http({
               url:'./api/today.php',//�����ַ�������������
               method:'get',
               params:{today:today}
           }).success(function (info) {
                //console.log(info);
            //����
               $scope.date = info.date;
            //��������
               $scope.posts = info.posts;
           })
    }])
    //��������
    .controller('OlderController',['$scope', function ($scope) {

    }]);