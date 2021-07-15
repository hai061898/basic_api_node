// function Greenting(){
//     this.wordHello = 'Hello';
// }

// Greenting.prototype.hello = function (name){ 
//     return this.wordHello + ''+ name;
// }

// var greet = new Greenting()
// console.log(greet.hello('hai'))

class Hello{ 
    constructor(){
        this.wordHello = 'hello';
    }
    hello(name){
        return this.wordHello+ ''+name;
    }

}
var greet = new Greeting();
console.log(greet.hello('Petes'));