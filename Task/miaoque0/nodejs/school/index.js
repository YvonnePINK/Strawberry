/**
 * Created by 26053 on 2017/5/15.
 */
var klass = require('./class');
//klass.add('Tiny',['LJJ','PSQ']);

exports.add = function(klasses){
    klasses.forEach(function(item,index){
        var _klass = item;
        var teacherName = item.teacherName;
        var students = item.students;
        klass.add(teacherName,students)
    })
};

