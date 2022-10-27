

//my notes from class

//form validation, only for form page
console.log('printing from external file') //great way for stepway refinement, don't use for actual website info
//can also do alert('help') will show alert, user can silence it eventually

//window registration
//document registration.html just for document can grab elements, manipulate elements,
// document.getElementById(); //always returns first element with ID value, only returns ONE element
// document.getElementsByTagName('body'); //returns array like structure with all elements w/ name
// document.getElementsByClassName() //
//
// document.querySelector();
// document.addEventListener('DOMContentLoaded', function(e){
//     console.log(e);
//     console.log(document.getElementsByTagName('body'));
// }) use defer in script tag to avoid using this

document.getElementById('Username').addEventListener('input', function(ev){
    let usernameElement = ev.target;
    let username = usernameElement.value; //can use var, var is global scope, let is block scope
    const validChars = /^[0-9a-zA-z]/;
    if(username.length > 3 && validChars.test(username.at(0))){
        usernameElement.classList.add('valid-text');
        usernameElement.classList.remove('invalid-text');
    }else {
        usernameElement.classList.add('invalid-text');
        usernameElement.classList.remove('valid-text');
    };
//    console.log(ev.currentTarget); //will get everything in div
})

let pw; //create password in global scope to compare to confirmPassword

document.getElementById('password').addEventListener('input', function(ev){
    let passwordElement = ev.target;
    let password = passwordElement.value; //can use var, var is global scope, let is block scope
    const validChars = /^(?=.*\d)(?=.*[!@#$%^&*\[\]])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //these are regex or regular expressions ^
    // (?=.*  ) this makes the quantifier non-greedy, so it only has to match at least once
    //\d is digit, the .{8,}$ is to ensure we have at least 8, it's .{min, max}
    if(validChars.test(password)){
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');
        pw = password;
    }else {
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
    };
    console.log(pw); //will get everything in div
})

document.getElementById('confirmPassword').addEventListener('input', function(ev){
    let passwordElement = ev.target;
    let confirmPassword = passwordElement.value; //can use var, var is global scope, let is block scope
    const validChars = /^(?=.*\d)(?=.*[!@#$%^&*\[\]])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(validChars.test(confirmPassword) && confirmPassword === pw){
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');
    }else {
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
    };
//    console.log(ev.currentTarget); //will get everything in div
})