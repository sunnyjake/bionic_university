function Class1(name){
    this.name = name;
}

var arr = ['one', 'two', 'three'];
var arr2 = [];
for(var i = 0; i < arr.length; i++){
    arr2.push(new Class1(arr[i]));
}

var e = new Class1("John");
Class1.prototype.method1 = function(){};

/*function Person*/

function create(arr){
    var result = [];
    for(var i = 0; i < arr.length;i++){
        result.push(Get(arr[i]));
    }
    return result;
}

function Get(name){
    this.name = name;
}

/*!!!!!!!!!!*/
var arr;
function isPolindrom(str){
    arr = str.split('');
    if(arr[0] === arr[arr.length-1]){
        arr.pop();
        arr.shift();
        arr = arr.join('');
        return isPolindrom(arr);
    }
    else{
        return false;
    }
}

function Mas(){
    this.created = new Date();
}
Mas.prototype = Object.create(Array.prototype);
Mas.prototype.constructor = Mas;

var a = new Mas();


/*!!!!!!!!!!!!*/
function Animal(name, legs, voice){
    this.name = name;
    this.legs = legs;
    this.voice = voice;
    //this.flying = flying;
}
Animal.prototype.sayHi = function(){
    console.log("Hello, my name is " + this.name + ". I have " + this.legs + " legs.  " + this.voice); 
};

function Bugs(name, legs, voice, eyes){
    Animal.call(this, name, legs, voice);
    this.eyes = eyes;
}

Bugs.prototype = Object.create(Animal.prototype);
Bugs.prototype.constructor = Bugs;

Bugs.prototype.stink = function(){
    console.log("These bugs are with " + this.eyes + "eyes - stink");
};

function Birds(){
    Animal.apply(this, arguments);
    this.fly = arguments[3];
}

Birds.prototype = Object.create(Animal.prototype);
Birds.prototype.constructor = Birds;

Birds.prototype.sing = function(){
    if(this.fly){
        console.log("fly");
    }
    else{
        console.log("just move");
    }
};
Birds.prototype.sayHi = function(){
    Animal.prototype.sayHi.call(this);
    console.log("Added and invoked from bird");
};
var animal = new Animal("animal", 4, "kra");
var bug = new Bugs("bug", 6, "vggg", 2);
var bird = new Birds("bird", 2, "vvvv", true);
