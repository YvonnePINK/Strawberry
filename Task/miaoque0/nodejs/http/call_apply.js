/**
 * Created by 26053 on 2017/5/15.
 */
var pet = {
    words:'...',
    speak:function(say){
        console.log(say + '' +this.words)
    }
};
//pet.speak('Speak');
var dog = {
    words:'wang'
};
//call使this.words的this变成了dog
pet.speak.call(dog,'speak');
