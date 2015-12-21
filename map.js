function map(arr, callback){
    var result = [];
    for(var i = 0; i < arr.length; i++){
       result.push(callback(arr[i])); 
    }
    return result;
}

console.log(map([1, 4, 9], function(a){ return Math.sqrt(a);}));
console.log(map([1, 2, 3], function(a){ return a * 2; }));
console.log(map([1, 4, 9], Math.sqrt));
