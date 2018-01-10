console.log('pasta');

function createPerson() {
    var stuTeach = document.getElementById('stuTeach').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var id = document.getElementById('ID').value;
    var a = [students, teachers];
    var b = [document.getElementById('grade').value, document.getElementById('subject').value];
    var c = [Student, Teacher];
    if (stuTeach !== "" && firstName !== "" && lastName !== "" && id !== "") {
        if(b[stuTeach] !== "") {
            a[stuTeach].push(new c[stuTeach](id, firstName, lastName, b[stuTeach]));
            document.getElementById('createPerson').style.display = 'none';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('ID').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('grade').value = '';
        }
    }
}

function displaySection(id) {
    var ids = ['createPerson', 'addStudent', 'removeStudent', 'createSection', 'searchStudent', 'sections', 'searchOutput'];
    document.getElementById(id).style.display = 'block';
    for(var i = 0; i < ids.length; i++) {
        if(ids[i] != id) {
            document.getElementById(ids[i]).style.display = 'none';
        }
    }
    document.getElementById('searchStudentInput').value = '';
}

function changeStuTeach() {
    var select = document.getElementById('stuTeach').value;
    for(var i = 0; i < 2; i++) {
        if(select == i) {
            document.getElementsByClassName('hide')[i].style.display = 'block';
        } else {
            document.getElementsByClassName('hide')[i].style.display = 'none';
        }
    }
}

function generateSelect(arr, num) {
    document.getElementsByClassName('hiddenSelect')[num].innerHTML = '';
    if(arr == sections) {
        for(var i = 0; i < arr.length; i++) {
            document.getElementsByClassName('hiddenSelect')[num].innerHTML += "<option value="+i+">"+arr[i].name+"</option>"
        }
    } else {
        for(var l = 0; l < arr.length; l++) {
            document.getElementsByClassName('hiddenSelect')[num].innerHTML += "<option value="+l+">"+arr[l].firstName+"</option>"
        }
    }
    document.getElementsByClassName('hiddenSelect')[num].style.display = 'inline';
}

function addStudent() {
    var studentIndex = document.getElementById('selectStudent').value;
    var sectionIndex = document.getElementById('selectSectionStudent').value;
    if (studentIndex !== "" && sectionIndex !== "") {
        sections[sectionIndex].addStudent(students[studentIndex]);
        document.getElementById('addStudent').style.display = 'none';
        document.getElementById('selectStudent').value = '';
        document.getElementById('selectSectionStudent').value = '';
        document.getElementById('selectStudent').style.display = 'none';
        document.getElementById('selectSectionStudent').style.display = 'none';
    }
}

function removeStudent() {
    var studentID = document.getElementById('studentRemoveID').value;
    var sectionIndex = document.getElementById('selectSectionStudentRemove').value;
    if(sectionIndex !== "") {
        for (var i = 0; i < students.length; i++) {
            sections[sectionIndex].removeStudent(studentID);
        }
        document.getElementById('removeStudent').style.display = 'none';
        document.getElementById('studentRemoveID').value = '';
        document.getElementById('selectSectionStudentRemove').style.display = 'none';
        document.getElementById('selectSectionStudentRemove').value = '';
    }
}

function createSection() {
    var sectionName = document.getElementById('sectionName').value;
    var sectionMaxSize = document.getElementById('sectionMaxSize').value;
    var teacherIndex = document.getElementById('selectTeacher').value;
    if(sectionName.length > 0 && sectionMaxSize.length > 0 && teacherIndex !== "") {
        sections.push(new Section(sectionName, sectionMaxSize, teachers[teacherIndex]));
        document.getElementById('createSection').style.display = 'none';
        document.getElementById('sectionName').value = '';
        document.getElementById('sectionMaxSize').value = '';
        document.getElementById('selectTeacher').value = '';
        document.getElementById('selectTeacher').style.display = 'none';
    }
}

function searchStudent() {
    var name = document.getElementById('searchStudentInput').value;
    document.getElementById('studentSearchOutput').innerHTML = '';
    document.getElementById('searchOutput').style.display = 'block';
    for(var l = 0; l < sections.length; l++) {
        for(var i = 0; i < sections[l].students.length; i++) {
            if(sections[l].students[i].firstName == name) {
                document.getElementById('studentSearchOutput').innerHTML += "<li>"+sections[l].name+"</li>";
            }
        }
    }
}

function showSections() {
    document.getElementById('sections').innerHTML = "";
    for(var i = 0; i < sections.length; i++) {
        var sect = sections[i];
        document.getElementById('sections').innerHTML += "<div id='"+i+"'><h3 style='text-align: center'>"+sect.name+"<br><em>"+sect.teacher.firstName+" "+sect.teacher.lastName+"</em></h3></div>";
        document.getElementById(i.toString()).innerHTML += "<ul id="+i + 'students' + " class='students'></ul>";
        for(var s = 0; s < sect.students.length; s++) {
            document.getElementById(i + 'students').innerHTML += "<li>"+sect.students[s].firstName+" "+sect.students[s].lastName+"</li>";
        }
    }
}