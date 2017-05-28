/**
 * Created by 26053 on 2017/5/15.
 */
var student = require('./student');
var teacher = require('./teacher');


function add(teacherName,students){
    teacher.add(teacherName);

    students.forEach(function(item,index){
        student.add(item)
    })
}
exports.add = add;
// module.exports = add();

