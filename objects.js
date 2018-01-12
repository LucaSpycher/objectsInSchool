currentID = 0;

function Person(firstName, lastName) {
    this.id = currentID++;
    this.firstName = firstName;
    this.lastName = lastName;
}

function Student(firstName, lastName, grade) {
    Person.call(this, firstName, lastName);
    this.grade = grade;
}

function Teacher(firstName, lastName, subject) {
    Person.call(this, firstName, lastName);
    this.subject = subject;
}

function Section(name, maxSize, teacher) {
    this.name = name;
    this.maxSize = maxSize;
    this.teacher = teacher;
    this.id = currentID++;
    this.students = [];
    this.currentSize = this.students.length;
    this.seatsRemaining = this.maxSize - this.currentSize;
    this.addStudent = function (student) {
        if(this.seatsRemaining > 0) {
            var studentInSection = false;
            for(var i = 0; i < this.students.length; i++) {
                if(this.students[i] === student) {
                    studentInSection = true;
                }
            }
            if(!studentInSection) {
                this.students.push(student);
                this.currentSize++;
                this.seatsRemaining--;
            }
        }
    };
    this.removeStudent = function (id) {
        for(var i = 0; i < this.students.length; i++) {
            if(this.students[i].id == id) {
                this.students.splice(i, 1);
                this.currentSize--;
                this.seatsRemaining++;
            }
        }
    };
}

Student.prototype = new Person;
Teacher.prototype = new Person;

////////// DUMMY DATA //////////////
var luca = new Student('Luca', 'Spycher', 11);
var joe = new Student('Joe', 'McFlair', 9);
var lena = new Student('Lena', 'McDuncan', 10);
var albinson = new Teacher('Matt', 'Albinson', 'computer science');
var henri = new Teacher('Karl', 'Henri', 'math');
var math = new Section('Math 2', 27, henri);
var compSci = new Section('Computer Science', 30, albinson);
compSci.addStudent(joe);
compSci.addStudent(luca);
compSci.addStudent(lena);
math.addStudent(joe);

var sections = [compSci, math];
var teachers = [albinson, henri];
var students = [joe, luca, lena];