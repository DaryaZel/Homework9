function Person (name,age){
  this.name = name;
  this.age=age;
  }
Person.prototype.SayAboutYourself=function(){
   return "My name is " + this.name+ " and I am "+this.age}
let person1=new Person("Ivan",25)
let person2=new Person("Andrey",33)
let person3=new Person ("Darya",48)
person3.SayAboutYourself()
