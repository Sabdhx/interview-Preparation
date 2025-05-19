// prototype
// when we make a prototype of an object we change its value with respect to that prototype and when we have a simple object then will change like a simple object
// when we change the value of prototype then the real object value also changes
// now if we have a string and we define a variable

// const fname = new string("ali abdullah")
// fname. why with this dot so much functions are coming its because there are somethings known as wrapper classes 
// when we use these string, boolean, number they are premitive types, so js uses there wrapper classes to create an object from it, so we can say that fname is the object of string class
 
const p1 ={
  fname:"abdullah",
  lname:"ali",
  getname(){
    return `${this.fname} ${this.lname}`
  }
}

const p2 = Object.create(p1);
p2.__proto__.fname = "durraish";
console.log(p1)

console.log(p2.getname())



