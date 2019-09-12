class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    //getter
    get area(){
        return this.calcArea();
    }
    //Method
    calcArea(){
        return this.height*this.width;
    }
}

const winstonTeen={
    "nickname":"Winst-a-lot",
    "age":15,
    "x":229,
    "y":50
};
const winstonAdult={
    "nickname":"Mr. Winst-a-lot",
    "age":30,
    "x":229,
    "y":50
};
const drawWinston=function(winston){
    fill(255,0,0);
    let img=getImage("creatures/Winston");
    

}
//object
var car ={
    "wheels":4,"engines":1,"seats":5
};
//constructor call
var Car=function(){
    this.wheels=4;
    this.engines=1;
    this.seats=5;
};
//constructor definition
var Car=function(wheels,seats,engines){
    this.wheels=wheels;
    this.seats=seats;
    this.engines=engines;
};
var myCar=new Car(8,16,1);

var myCar=new Car();
myCar.nickname="Meep Meep";
console.log(myCar);

