let firstName = document.querySelector(".firstname")
let lastName = document.querySelector(".lastname")
let email = document.querySelector(".email")
let phonenumber = document.querySelector(".phonenumber")
let password = document.querySelector(".password")
let cnfpassword = document.querySelector(".cnfpassword")
let accountcreated = document.querySelector(".accountcreated")

const errfirstname = document.querySelector(".errfirstname");
const errlastname = document.querySelector(".errlastname");
const erremail = document.querySelector(".erremail");
const errphonenumber = document.querySelector(".errphonenumber");
const errpassword = document.querySelector(".errpassword");


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkPasswords() {
    let succes = true;

    if (firstName.value == "") {
        errfirstname.textContent="First name is empty!";
        firstName.style.outline="none";
        firstName.style.border="1px solid red";
        succes = false;

    } else {
        errfirstname.textContent="";
        firstName.style.outline="";
        firstName.style.border="";
    }

    if (lastName.value == "") {
        errlastname.textContent="Last name is empty!";
        lastName.style.outline="none";
        lastName.style.border="1px solid red";
        succes = false;

    } else {
        errlastname.textContent="";
        lastName.style.outline="";
        lastName.style.border="";
    }

    if (email.value == "") {
        erremail.textContent="E-Mail is empty!";
        email.style.outline="none";
        email.style.border="1px solid red";
        succes = false;

    } else {
        erremail.textContent="";
        email.style.outline="";
        email.style.border="";
    }

    if (phonenumber.value == "") {
        errphonenumber.textContent="Phone number is empty!";
        phonenumber.style.outline="none";
        phonenumber.style.border="1px solid red";
        succes = false;

    } else {
        errphonenumber.textContent="";
        phonenumber.style.outline="";
        phonenumber.style.border="";
    }

    if (password.value !== cnfpassword.value) {
        errpassword.textContent="Passwords do not match!";
        password.style.outline="none";
        password.style.border="1px solid red";
        cnfpassword.style.outline="none";
        cnfpassword.style.border="1px solid red";
        succes = false;

    } else {
        errpassword.textContent="";
        password.style.outline="";
        password.style.border="";
        cnfpassword.style.outline="";
        cnfpassword.style.border="";

    }


    if (password.value == "") {
        console.log(" pass  ");

        errpassword.textContent="Password is empty!";
        password.style.outline="none";
        password.style.border="1px solid red";
        succes = false;

    } else {
        errpassword.textContent="";
        password.style.outline="";
        password.style.border="";
    }

    if ( !validateEmail(email.value)) {
        erremail.textContent="E-Mail is invalid!";
        email.style.outline="none";
        email.style.border="1px solid red";
        succes = false;

    } else {
        erremail.textContent="";
        email.style.outline="";
        email.style.border="";
    }

    if (succes) {
        accountcreated.style.display="inline";

    }



    
}

