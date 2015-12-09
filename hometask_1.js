var stringArray = [
    {
        name: "indexOf",/*name of the method*/
        args: [1],/*number of method's arguments*/
        type: "str"/*type of the arguments*/
    },
    {
        name: "lastIndexOf",
        args: [1],
        type: "str"
    },
    {
        name: "search",
        args: [1],
        type: "str"
    },
    {
        name: "slice",
        args: [1, 1],
        type: 0
    },
    {
        name: "substring",
        args: [1, 1],
        type: 0
    },
    {
        name: "substring",
        args: [1],
        type: 0
    },
    {
        name: "substr",
        args: [1, 1],
        type: 0
    },
    {
        name: "replace",
        args: [1, 1],
        type: "str"
    },
    {
        name: "toUpperCase",
        args: 0
    },
    {
        name: "toLowerCase",
        args: 0
    },
    {
        name: "concat",
        args: [1, 1],
        type: "str"
    },
    {
        name: "charAt",
        args: [1],
        type: 0
    },
    {
        name: "charCodeAt",
        args: [1],
        type: 0
    },
    {
        name: "split",
        args: [1],
        type: "str"
    }
];
var numberArray = [
    {
        name: "toString",
        args: 0
    },
    {
        name: "toPrecision",
        args: [1]
    },
    {
        name: "toFixed",
        args: [1]
    },
    {
        name: "toExponential",
        args: [1]
    },
    {
        name: "valueOf",
        args: 0
    }
];
var arrayArray = [
    {
       name: "toString",
       args: 0/*can be used without argument*//*will be undefined ant will not be added as a parameter*/
    },
    {
       name: "join",
       args: [1],
       type: "str"
    },
    {
       name: "push",/*random number of parameters*/
       args: "random"
    },
    {
       name: "pop",
       args: 0
    },
    {
       name: "shift",
       args: 0
    },
    {
       name: "unshift",/*random number of parameters*/
       args: "random"
    },
    {
       name: "splice",/*random number of parameters*/
       args: "random" 
    },
    {
       name: "splice",
       args: [1, 1]
    },
    {
       name: "sort",
       args: 0
    },
    {
       name: "slice",
       args: [1]
    }
];

function methods(arg){
    var numberOfParameters;
    var parameters = [];
    if(typeof arg === "string"){
        var typeofParameters;
        var min = 0;
        var array = [];
        for(var i = 0; i < stringArray.length; i++){
            typeofParameters = typeof stringArray[i].type;
            if(typeofParameters === "string"){
                array = arg.split("");
                numberOfParameters = Math.floor(Math.random() * (array.length - 1) + 1);/*length of searching pattern*/
                
                if(stringArray[i].args.length > 1) parameters = ["",""];/*if parameters more than 1*/
                else parameters = [];                
                for(var k = 0; k < stringArray[i].args.length; k++){/**/
                    var counter = Math.floor(Math.random() * ((array.length - numberOfParameters) - 0) + 0);/*choose the position where to insert of smth else*/
                    for(var j = counter; j < (counter + numberOfParameters); j++){/*choose the part of the arg-string as a parameter of the method*/
                        parameters[k] = array[j];/*its length will be as length of searching pattern*/
                    }
                }
                logOut(arg, stringArray[i].name, parameters);
            }
            else if(typeofParameters === "number"){
                parameters = [];
                numberOfParameters = stringArray[i].args.length;
                min = 0;
                for(var j = 0; j < numberOfParameters; j++){
                    parameters[j] = (Math.floor(Math.random() * (arg.length - min) + min));
                    min = parameters[j];
                }
                logOut(arg, stringArray[i].name, parameters);
            }
            else{
                parameters = [];
                logOut(arg, stringArray[i].name, parameters); 
            }
        }
    }
    else if(typeof arg === "number"){
        for(var j = 0; j < numberArray.length; j++){/*always 1 or 2 arguments but not more than 2*/
            numberOfParameters = numberArray[j].args.length;
            parameters = [];
            for(var k = 0; k < numberOfParameters; k++){
                parameters[k] = Math.floor(Math.random() * (arg.toString().length - 1) + 1);
            }
            logOut(arg, numberArray[j].name, parameters);
        }
    }
    else if(Object.prototype.toString.call(arg) === "[object Array]"){
        var newArray = [];
        for(var k = 0; k < arrayArray.length; k++){
            newArray.length = 0;
            for(var l = 0; l < arg.length; l++){
                newArray[l] = arg[l];
            }
            parameters = [];
            if(arrayArray[k].args.length > 2){
                var counter = Math.floor(Math.random() * (10 - 1) + 1);/*number of elements to insert*/
                for(var m = 0; m < counter; m++){
                    parameters[m] = Math.floor(Math.random() * (arg.length - 0) + 0);/*elements to insert*/
                }
            }
            else{
                if(typeof arrayArray[k].args[0] === "function"){
                    parameters.push(arrayArray[k].args);
                }
                else if(arrayArray[k].type === "string"){
                    parameters.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
                }
                else{
                    for(var n = 0; n < arrayArray[k].args.length; n++){
                        parameters[n] = Math.floor(Math.random() * (arg.length - 0) + 0);
                    }
                }
            }
            logOut(newArray, arrayArray[k].name, parameters);
        }
    }
    else{
        console.log("Function does not work with such kind of parameter");
    }    
}
function logOut(arg, method, parameters){
    var result = "";
    for(var j = 0; j < parameters.length; j++){
        result += parameters[j];
        if(j !== parameters.length - 1){
            result += ", ";
        }
    }
    var argumentType = ["",""];
    if(typeof arg === "string"){
        argumentType[0] = "\"";
        argumentType[1] = "\"";
    }
    else if(typeof arg === "object"){
        argumentType[0] = "[";
        argumentType[1] = "]";
    }
    console.log("LOG: Argument is " + argumentType[0] + arg + argumentType[1] + ", type: " + typeof arg);
    console.log(typeof arg + " method: " + method + "()");
    console.log("Input: " + argumentType[0] + arg + argumentType[1]);
    console.log("Using: " + argumentType[0] + arg + argumentType[1] + "." + method + "(" + result + ")");
    var res = "";
    switch(parameters.length){
        case 0:
            res = arg[method]();
            console.log("Result: " + res);
            break;
        case 1:
            res = arg[method](parameters[0]);
            console.log("Result: " + (arg.length === res.length)? res : arg);
            break;
        case 2:
            res = arg[method](parameters[0], parameters[1]);
            if(typeof arg === "string"){
                console.log("Result: " + res);
            }
            else{
                console.log("Result: " + arg);
            }
            break;
        case 3:
            res = arg[method](parameters[0], parameters[1], parameters[2]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 4:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 5:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 6:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 7:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 8:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6], parameters[7]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 9:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6], parameters[7], parameters[8]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
        case 10:
            res = arg[method](parameters[0], parameters[1], parameters[2], parameters[3], parameters[4], parameters[5], parameters[6], parameters[7], parameters[8], parameters[9]);
            console.log("Result: " + (arg.length === res.length)? arg : res);
            break;
    }
    result.length = 0;   
}
console.log('some changes');
methods("Hello, my dear friend");
methods(1331412.1312);
methods([2, 5, 1, 5, 7, 3, 1]);
