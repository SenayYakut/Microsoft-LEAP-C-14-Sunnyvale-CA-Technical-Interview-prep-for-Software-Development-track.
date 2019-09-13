function Person(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
}

var myPerson=new Person("Senay", "Yakut");
console.log(myPerson.fullName());

var myPerson = {
    firstName : "John",
    lastName : "Smith",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myPerson.fullName);
