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