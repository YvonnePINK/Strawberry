/**
 * Created by 26053 on 2017/5/15.
 */
//иообнд
//var pet = {
//    words:'...',
//    speak:function(){
//        console.log(this.words);
//        console.log(this == pet)
//    }
//};
//pet.speak();

function Pet(words){
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this)
    }
}
var cat = new Pet('Miao');
cat.speak();