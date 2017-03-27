function Person(gender, age, height) {
  this.gender = gender;
  this.age = age;
  this.height = height;
};

Student.prototype = Object.create(Person.prototype)

function Student(gender, age, height) {
  Person.call (this, gender, age, height);
};


Person.prototype.displayAllInfo = function() {
  return this.gender + ":" + this.age + ":" + this.height
};

Teacher.prototype = Object.create(Person.prototype)

function Teacher(gender, age, height) {
  this.gender = gender;
  this.age = age;
  this.height = height;
};

function Class(){
  this.subject = subject;
  this.difficulty = difficulty;
};

function School(){
  this.person = [];
};

School.prototype.addPerson = function(person){
  this.person.push(person)
};

var studentMark = new Student("Male", "29", "79'");
var studentSusy = new Student("Female", "26", "85'");
var studentGina = new Student ("Female", "25", "68'" )

console.log();

var school = new School ()

school.addPerson(studentMark);
school.addPerson(studentSusy);
school.addPerson(studentGina);

console.log(studentMark.displayAllInfo());
console.log(studentMark.displayAllInfo());
