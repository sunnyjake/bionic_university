/*Abstract Factory*/
function ShapeFactoy(color, kind){/*Interface to get/creatre different objects of Toys factory*/
    this._color = color;
    this._kind = kind;
}

ShapeFactoy.prototype.getCat = function (){
    return new Toys.Cat(this._color, this._kind);
};
ShapeFactoy.prototype.getPoni = function (){
    return new Toys.Poni(this._color, this._kind);
};
ShapeFactoy.prototype.getDog = function (){
    return new Toys.Dog(this._color, this._kind);
};

/*Toys factory*/
var Toys = {
    Cat:function (color, kind){
        console.log("Hello, I am " + color + " " + kind + " cat");
    },
    Poni: function (color, kind){
        console.log("Hello, I am " + color + " " + kind + " poni");
    },
    Dog: function (color, kind){
        console.log("I am a dog. I am " + color + " and " + kind);
    }
};

var factory = new ShapeFactoy("white", "soft");

factory.getCat();
factory.getPoni();
factory.getDog();
