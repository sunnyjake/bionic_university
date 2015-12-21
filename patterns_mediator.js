/*Mediator*/
function Ear(){}
Ear.prototype.hearSmth = function (sounds){
    console.log(sounds);
    brain.hear(sounds);
};

function Legs(){}
Legs.prototype.move = function (){
    if(brain.tryToMove()){
        console.log("Me: Let's go!");
        return true;
    }
    return false;
};
Legs.prototype.kick = function (){
    console.log("Me: Kick this guy");
};

function Hand(){}
Hand.prototype.hit = function (){
    console.log("Me: Let's teach him good manners");
};

function Mouse(){}
Mouse.prototype.eatSmth = function (number){
    brain.eat(number);
};
Mouse.prototype.say = function (smth){
    console.log(smth);
};
Mouse.prototype.smile = function (){
    console.log("Me: Smiling");
};

var brain = {
    ear: new Ear(),
    hand: new Hand(),
    leg: new Legs(),
    mouse: new Mouse(),
    strength: 5,
    tryToMove: function (){
        if(this.strength){ 
            this.strength -= 1;
            return true;
        }
        this.mouse.say("I have to eat something");
        return false;
    },
    hear: function (arg){
        if(arg === "hello"){
            this.mouse.say("Hello");
        }
        else if(arg === "nice"){
            this.mouse.smile();
        }
        else if(arg === "bad"){
            this.leg.move();
            this.hand.hit();
            this.leg.kick();
        }
    },
    eat: function (number){
        if(this.strength < 5){
            brain.strength += number;
            this.mouse.say("Yeah, I am now ready to go!");
        }
        else{
            this.mouse.say("I'm not hungry");
        }
    }
};

brain.mouse.eatSmth(10);
brain.leg.move();
brain.leg.move();
brain.mouse.eatSmth(10);
brain.ear.hearSmth("hello");
brain.ear.hearSmth("bad");
brain.ear.hearSmth("nice");
