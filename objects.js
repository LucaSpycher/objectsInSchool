var sections = [];
var teachers = [];
var students = [];

function Person(id, firstName, lastName) {
    this.ID = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(fistName, lastName, grade) { //incorporate lastname and firstname
    this.grade = grade;
    this.call = firstName; // ?? look this up
}

function Teacher(subject) {
    this.subject = subject;
}

function Section(name, maxSize, teacher) {
    this.name = name;
    this.maxSize = maxSize;
    this.teacher = teacher;
    this.students = [];
    this.currentSize = this.students.length;
    this.seatsRemaining = this.maxSize - this.currentSize;
    this.addStudent = function (student) {
        this.students.push(student);
        this.currentSize++;
        this.seatsRemaining--;
    };
    this.removeStudent = function (id) {
        for(var i = 0; i < this.students.length; i++) {
            if(this.students[i].ID == id) {
                this.students.splice(i, 1);
                this.currentSize--;
                this.seatsRemaining++;
            }
        }
    }
}

Student.prototype = new Person;
Teacher.prototype = new Person;

/////// TESTING STUFF /////////
var luca = new Student(90);
luca.firstName = 'Luca';
luca.lastName = 'Spycher';
luca.ID = '1234567';
var albinson = new Teacher('computer science');
albinson.firstName = 'Matt';
albinson.lastName = 'Albinson';

var compSci = new Section('Computer Science', 30, albinson);
compSci.addStudent(luca);
console.log(compSci);
compSci.removeStudent('1234567');
console.log(compSci);
compSci.addStudent(luca);
console.log(compSci);
