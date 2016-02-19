
String.prototype.repitify = function(n){
    var result = "";
    for(var i = 0; i < n; i++){
        result += this;
    }
    return result;
};

Array.prototype.getAliquot = function(n){
    var result = [];
    for(var i = 0; i < this.length; i++){
        if(!(this[i]%n)) result.push(this[i]);
    }
    return result;
};

function every(arr, prim){
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === prim) counter++;
    }
    return counter === arr.length ? true : false;
}

function some(arr, prim){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === prim) return true;
    }
    return false;
}

function everyFun(arr, fun){
    for(var i = 0; i < arr.length; i++){
        if(!fun(arr[i])) return false;
    }
    return true;
}

everyFun([1,2,3], function(arr){return arr > 2;});

function Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(obj){
    return new Vector(this.x + obj.x, this.y + obj.y);
};

Vector.prototype.minus = function(obj){
    return new Vector(this.x - obj.x, this.y - obj.y);
};

Vector.prototype.length = function(){
    return Math.sqrt(Math.pow(this.x, 2), Math.pow(this.y, 2));
};
/*look at http://laravel.io/bin/6LwQD*/
function getFunc(arr, fun, callback){
    var resultArr = [];
    for(var i = 0; i < arr.length; i++){
        resultArr.push(fun.bind(arr[i]));
    }
    callback(resultArr);
}

var objects = [{a:1, b:2}, {a:3, b:4}, {a:5, b:5}];
getFunc(objects, function(){return this.a + " " + this.b;}, function(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
});

function multi(str, arr){
    var tStart = new Date();
    if(str === "for"){
        for(var i = 0; i < 100000; i++){
            for(var j = 0; j < arr.length; j++){
                arr[i] *= 2;
            }
        }
    }
    else if(str === "foreach"){
        for(var k = 0; k < 100000; k++){
            arr.forEach(function(el, index, arr){
                el *= 2;
            });
        }
    }
    else if(str === "forin"){
        for(var n = 0; n < 100000; n++){
            for(var key in arr){
                arr[key] *= 2;
            }
        }
    }
    console.log(arr);
    console.log(new Date().getMilliseconds() - tStart.getMilliseconds());
}

var for_ = multi.bind("for");
var foreach = multi.bind("foreach");
for_([1,2,3]);
foreach([1,2,3]);
