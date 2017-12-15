function createPerson() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
}

function displaySection(id) {
    document.getElementById(id).style.display = 'block';
}

function changeStuTeach() {
    var select = document.getElementById('stuTeach').value;
    for(var i = 0; i < 2; i++) {
        if(select == i) {
            document.getElementsByClassName('display')[i].style.display = 'block';
        } else {
            document.getElementsByClassName('display')[i].style.display = 'none';
        }
    }
}