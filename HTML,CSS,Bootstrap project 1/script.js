
/* When submit button is clicked */

function validate() 
{
    c = document.getElementsByTagName("input");
    console.log(c.value);
    username = /^[A-Za-z]+$/ ;
    if (!username.test(c[0].value)) {
        alert("Please use only alphabets for name");
        return false;
    }
    mobno = /^([0-9]{10})+$/ ;
    if (!mobno.test(c[2].value)) {
        alert("Please enter your 10 digit mobile number");
        return false;
    }
    password = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{5,})+$/ ;
    if (!password.test(c[3].value)) {
        alert("Your password strength is not strong (Please use uppercase,lowercase,numbers(minimum 5) and special characters all in your password)");
        return false;
    } 
}