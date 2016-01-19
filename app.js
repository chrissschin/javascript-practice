//creation phase stores function and variables in memory
//execution phase goes line by line


//closure example
  //stores function in memory
function person(name) {
  return function(age, height) {
    console.log("hello my name is " + name + " im " + age + " and " + height + " tall");
  }
}
  //first stores var in memory in creation phase
  //in execution phase it sees person is invoked.
  //so it runs and return a function
var ageHeight = person('bill');
  //invoke ageHeight to pass in these parameters to the returned function
ageHeight(5,6);


console.log("--------------")









//using constructor functions

function Person(firstName, lastName, age) {
  console.log(this);
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  console.log("this function is invoked");
}
  //by doing this we have access to this method without having to create
  //it with every new constructor. This saves memory.
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
}

var person1 = new Person('chris','solis', 23);
console.log(person1);

var person2 = new Person('jon','doe', 50);
console.log(person2);
