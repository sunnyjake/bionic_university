
function triangleInCycle(){
    var r = "";
    for(var i = 0; i < 7; i++){
        r += "#";
        console.log(r);
    }
}

function fizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i%3 === 0){/*(!(i%3))*/
            if(!(i%5)){
                console.log(i + " - FizzBuzz");
            }
            else {
                console.log(i + " - Fizz");
            }
        }
        else if(i%5 === 0){
            console.log(i + " - Buzz");
        }
        else console.log(i);
    }
}

function fizzBuzzModif(){
    for(var i = 1; i <= 100; i++){
        console.log(!(i%3) ? (!(i%5) ? (i + " - FizzBuzz") : (i + " - Fizz")) : ((i%5 === 0) ? i + " - Buzz" : i));
    }
}

function chessBoard(dim){
    if(!(dim / 2)) return "Dimention must be even number";
    var r = "";
    for(var i = 0; i < dim; i++){
        for(var j = i; j < i + dim; j++){
            if(!(j%2)){
                r += "#";
            }
            else{
                r += " ";
            }
        }
        console.log(r + "\n");
        r = "";
    }
}

function min(a, b){
    return a < b ? a : b;
}

function isEven(number){
    return !(number%2) ? true : false; 
}

function isEvenRec(number){
    if(number === 0) return true;
    if(number === 1 || number === -1) return false;
    return isEvenRec(10);
}

function countBs(str){
    var array = str.split("");
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].charCodeAt() === 66) counter++;
    }
    return counter;
}

function countChar(str, pattern){
    var array = str.split("");
    var counter = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].charCodeAt() === pattern.charCodeAt()) counter++;
    }
    return counter;
}

function range(start, finish, step){
    if(!step) step = 1;
    var array = [start];
    var i = start + step;
    if(start > finish){
       while(i >= finish){
           array.push(i);
           i += step;
       }
    }
    else{
        while(i <= finish){
            array.push(i);
            i += step;
        } 
    }
    return array;
}

function sum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var arr = range(1, 10);

console.log(sum(arr));

function reverseArray(arr){
    var array = [];
    for(var i = arr.length - 1; i >= 0; i--){
        array.push(arr[i]);
    }
    return array;
}

function reverseArrayInPlace(arr){
    var last = arr[arr.length - 1];
    var j = 0;
    for(var i = arr.length - 2; i >= 0; i--){
        arr.push(arr[i]);
    }
    while(arr[j] !== last){
        arr.shift();
    }
    return arr;
}
