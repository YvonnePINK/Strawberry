/**
 * Created by 26053 on 2017/5/15.
 */
function Pet(world){
    this.words = words;
    this.speak = function(){
        console.log(this.words)
    }
}
function Dog(words){
    Pet.call(this,words);
    //Pet.apply(this,argument)
}
var dog = new Dog('wang');