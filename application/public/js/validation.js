

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
    if(username.length > 3){
        usernameElement.classList.add('valid-text');
        usernameElement.classList.remove('invalid-text');
    }else {
        usernameElement.classList.add('invalid-text');
        usernameElement.classList.remove('valid-text');
    };
//    console.log(ev.currentTarget); //will get everything in div
})


