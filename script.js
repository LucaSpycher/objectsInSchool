console.log('pizza');

function Person(id, firstName, lastName) {
    this.ID = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(grade) {
    this.grade = grade;
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

function createPerson() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

}

function displaySection(id) {
    document.getElementById(id).style.display = 'block';
}

/////// TESTING STUFF /////////
Student.prototype = new Person;
Teacher.prototype = new Person;

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
