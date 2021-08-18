console.log('testing');

/* code as per example 1 (html) 
if(document.form.username.value=='' && document.form.fname.value!='' && document.form.lname.value!='') {
    var username = document.form.fname.value.substr(0,1) + document.form.lname.value.substr(0,49);
    username = username.replace(/\s+/g, '');
    username = username.replace(/\'+/g, '');
    username = username.replace(/-+/g, '');
    username = username.toLowerCase();
    document.form.username.value = username;
}

/* example 2: accompanying js code 
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}*/

/* example 3: 

// Below Function Executes On Form Submit
function ValidationEvent() {
    // Storing Field Values In Variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (name != '' && email != '' && contact != '') {
    if (email.match(emailReg)) {
    if (document.getElementById("male").checked || document.getElementById("female").checked) {
    if (contact.length == 10) {
    alert("All type of validation has done on OnSubmit event.");
    return true;
    } else {
    alert("The Contact No. must be at least 10 digit long!");
    return false;
    }
    } else {
    alert("You must select gender.....!");
    return false;
    }
    } else {
    alert("Invalid Email Address...!!!");
    return false;
    }
    } else {
    alert("All fields are required.....!");
    return false;
    }
    }*/
    

    /* example 4 - all works but email validation*/
    function validate() {
      
        if( document.myForm.Name.value == "" ) {
           alert( "Please provide your name!" );
           document.myForm.Name.focus() ;
           return false;
        }
        if( document.myForm.EMail.value == "" ) {
           alert( "Please provide your Email!" );
           document.myForm.EMail.focus() ;
           return false;
        }
        if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
           document.myForm.Zip.value.length != 5 ) {
           
           alert( "Please provide a zip in the format #####." );
           document.myForm.Zip.focus() ;
           return false;
        }
        if( document.myForm.Country.value == "-1" ) {
           alert( "Please provide your country!" );
           return false;
        }
        return( true );
     }

    /*function validateEmail() {
        var emailID = document.myForm.EMail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Please enter correct email ID")
           document.myForm.EMail.focus() ;
           return false;
        }
        return( true );
     }*/