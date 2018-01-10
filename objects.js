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
var joe = new Student(56789, 'Joe', 'McFlair', 9);
var lena = new Student(54321, 'Lena', 'McDuncan', 10);
var albinson = new Teacher(67890, 'Matt', 'Albinson', 'computer science');
var henri = new Teacher(09876, 'Karl', 'Henri', 'math');
var math = new Section('Math 2', 27, henri);
var compSci = new Section('Computer Science', 30, albinson);
compSci.addStudent(joe);
compSci.addStudent(luca);
compSci.addStudent(lena);
math.addStudent(joe);

//var Joe = new Student(12345, 'Luca', 'Spycher', 11);
//var  = new Teacher(67890, 'Matt', 'Albinson', 'computer science');
//var compSci = new Section('compSci', 30, albinson);

var sections = [compSci, math];
var teachers = [albinson];
var students = [joe, luca, lena];