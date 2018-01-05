function Person(id, firstName, lastName) {
    this.ID = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(id, firstName, lastName, grade) {
    Person.call(this, id, firstName, lastName);
    this.grade = grade;
}

function Teacher(id, firstName, lastName, subject) {
    Person.call(this, id, firstName, lastName);
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

////////// DUMMY DATA //////////////
var luca = new Student(12345, 'Luca', 'Spycher', 11);
var albinson = new Teacher(67890, 'Matt', 'Albinson', 'computer science');
var compSci = new Section('compSci', 30, albinson);
compSci.addStudent(luca);

var sections = [compSci];
var teachers = [albinson];
var students = [luca];