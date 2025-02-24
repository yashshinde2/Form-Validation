function submitForm(event){
    event.preventDefault();  
    splitName();
    checkEmail();
    checkMobileno();
    checkAadhar();
    checkPan();
    checkDob();
    avgofMarks();
}

function splitName() {
    let fName = document.getElementById('name').value;
    let splitName = fName.split(' ');
    document.getElementById("rname").innerHTML = "First Name : " + splitName[0] + " Middle Name : " + splitName[1] + "Last Name : " + splitName[2]|| " ";
}


function checkEmail(){

    let email = document.getElementById('email').value;
    let at = email.indexOf('@');
    let dot = email.lastIndexOf('.');

    if(at < 1 || dot < at + 2 || dot + 2 >= email.length){
        document.getElementById("em").innerHTML = "Invalid Email";
    } else {
        document.getElementById("em").innerHTML = "Valid Email";
    }

}

function checkMobileno(){

    let mobile = document.getElementById('mobile').value;
    mobile = mobile.toString();
    let mobileLength = mobile.length;

    if(mobileLength != 10 || mobile[0] == 0 || mobile[0] == 1 || mobile[0] == 2 || mobile[0] == 3 || mobile[0] == 4 || mobile[0] == 5){
        document.getElementById("mb").innerHTML = "Invalid Mobile Number";
    } else {    
        document.getElementById("mb").innerHTML = "Valid Mobile Number";
    }

}

function checkAadhar(){
    let aadhar = document.getElementById('aadhar').value;
    aadhar = aadhar.toString();
    let aadharLength = aadhar.length;

    if(aadharLength != 12){
        document.getElementById("ad").innerHTML = "Invalid Aadhar Number";
    } else {
        document.getElementById("ad").innerHTML = "Valid Aadhar Number";
    }
}


function checkPan(){

    let pan = document.getElementById('pan').value;
    let panLength = pan.length;

    if(panLength != 10 || pan[0] < 'A' || pan[0] > 'Z' || pan[1] < 'A' || pan[1] > 'Z' || pan[2] < 'A' || pan[2] > 'Z' || pan[3] < 'A' || pan[3] > 'Z' || pan[4] < 'A' || pan[4] > 'Z' || pan[5] < '0' || pan[5] > '9' || pan[6] < '0' || pan[6] > '9' || pan[7] < '0' || pan[7] > '9' || pan[8] < '0' || pan[8] > '9' || pan[9] < 'A' || pan[9] > 'Z'){
         document.getElementById("pn").innerHTML = "Invalid PAN Number";
    } else {
         document.getElementById("pn").innerHTML = "Valid PAN Number";
    }

}

function checkDob(){
    let dob = document.getElementById('dob').value;
    let d = new Date();
    d.setHours(0, 0, 0, 0);

    let dobDate = new Date(dob);
    dobDate.setHours(0, 0, 0, 0);

    if(dobDate > d){
        document.getElementById("db").innerHTML = "Invalid Date of Birth";
    } else {
        document.getElementById("db").innerHTML = "Valid Date of Birth";
    }
}


function avgofMarks(){
    let sub1 = parseInt(document.getElementById('marks1').value) || 0;
    let sub2 = parseInt(document.getElementById('marks2').value) || 0;
    let sub3 = parseInt(document.getElementById('marks3').value) || 0;
    let sub4 = parseInt(document.getElementById('marks4').value) || 0;
    let sub5 = parseInt(document.getElementById('marks5').value) || 0;
    let sub6 = parseInt(document.getElementById('marks6').value) || 0;

    let marks = [sub1, sub2, sub3, sub4, sub5, sub6];
    marks.sort((a, b) => b - a);  

    let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];  
    let avg = total / 5;

    document.getElementById("mrks").innerHTML = "Average of Best 5 Marks: " + avg;
}
