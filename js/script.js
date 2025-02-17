function submitForm(){

    splitName();
    checkEmail();
    checkMobileno();
    checkAadhar();
    checkPan();
    checkDob();
}

function splitName(){

    let fName = document.getElementById('name').value;
    let splitName = fName.split(' ');

    document.getElementById("rname").innerHTML="First Name: " + splitName[0];
    document.getElementById("rname").innerHTML= "Last Name: " + splitName[1];
    document.getElementById("rname").innerHTML="Middle Name: " + splitName[2];
}

function checkEmail(){

    let email = document.getElementById('email').value;
    let at = email.indexOf('@');
    let dot = email.lastIndexOf('.');

    if(at < 1 || dot < at + 2 || dot + 2 >= email.length){
        console.log("Invalid Email");
    } else {
        console.log("Valid Email");
    }

}

function checkMobileno(){

    let mobile = document.getElementById('mobile').value;
    mobile = mobile.toString();
    let mobileLength = mobile.length;

    if(mobileLength != 10 || mobile[0] == 0 || mobile[0] == 1 || mobile[0] == 2 || mobile[0] == 3 || mobile[0] == 4 || mobile[0] == 5){
        console.log("Invalid Mobile Number");
    } else {    
        console.log("Valid Mobile Number");
    }

}

function checkAadhar(){

    let aadhar = document.getElementById('aadhar').value;
    aadhar = aadhar.toString();
    let aadharLength = aadhar.length;

    if(aadharLength != 12){
        console.log("Invalid Aadhar Number");
    } else {
        console.log("Valid Aadhar Number");
    }

}

function checkPan(){

    let pan = document.getElementById('pan').value;
    let panLength = pan.length;

    if(panLength != 10 || pan[0] < 'A' || pan[0] > 'Z' || pan[1] < 'A' || pan[1] > 'Z' || pan[2] < 'A' || pan[2] > 'Z' || pan[3] < 'A' || pan[3] > 'Z' || pan[4] < 'A' || pan[4] > 'Z' || pan[5] < '0' || pan[5] > '9' || pan[6] < '0' || pan[6] > '9' || pan[7] < '0' || pan[7] > '9' || pan[8] < '0' || pan[8] > '9' || pan[9] < 'A' || pan[9] > 'Z'){
        console.log("Invalid PAN Number");
    } else {
        console.log("Valid PAN Number");
    }

}

function checkDob(){

    let dob = document.getElementById('dob').value;
    let d = new Date();
    d.setHours(0,0,0,0);

    let dobDate = new Date(dob);
    dobDate.setHours(0,0,0,0);

    if(dobDate > d){
        console.log("Invalid Date of Birth");
    } else {
        console.log("Valid Date of Birth");
    }
}

function avgofMarks(){

    let sub1 = document.getElementById('marks1').value;
    let sub2 = document.getElementById('marks2').value;
    let sub3 = document.getElementById('marks3').value;
    let sub4 = document.getElementById('marks4').value;
    let sub5 = document.getElementById('marks5').value;
    let sub6 = document.getElementById('marks6').value;

    let total = 0;

    let marks = [sub1, sub2, sub3, sub4, sub5, sub6];
    marks.sort((a, b) => b - a);   
    total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    let avg=total/5;
    console.log("Average of Best 5 Marks: " + avg);

}