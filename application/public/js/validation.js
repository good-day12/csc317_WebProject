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

//https://dummyjson.com/products api where we can get dummy info

//convert it into html using strings
// function buildCardsUsingStrings(data){
//     return `<div class="product-card">
//                 <img class="prod-img" src=""${data.thumbnail}" />
//                 <div class="prod-info">
//                     <p class ="prod-title">${data.title}</p>
//                     <p class ="cost">${data.price}</p>
//                 </div>
//            <\div>`; //these are just strings, cant do clickable events
// }
//
// function fetchProducts(){
//     fetch("https://dummyjson.com/products")
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             let products = data.products;
//             let productsHTML = "";
//             products.forEach(function(product) {
//                 productsHTML += buildCardsUsingStrings(product);
//             })
//             document.getElementById('product-list').innerHTML = productsHTML
//         })
//     //promise syntax - an object that wraps an event that promises to be resolved (run successfully)
// }

//let t = setInterval, call a function after a delay
//setInterval(() +> {
// {, 50); 50 ms is the delay to perform
//clearInterval(t)

//do it with DOM api
function buildCardsUsingDOMAPI(container, data){ //conatiner is product lists
    let cardDiv = document.createElement('div');
    cardDiv.addEventListener('click', function(ev){
        console.log(ev.target);
        console.log(ev.currentTarget); //allows us to target child classes as well
        ev.currentTarget.style.opacity
    })
    cardDiv.setAttribute('class', 'product-card');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.thumbnail);
    imgElement.setAttribute('class', 'prod-img');
    let prodInfoDiv = document.createElement('div');
    prodInfoDiv.setAttribute('class', 'prod-info');
    let title = document.createElement('p');
    title.setAttribute('class', 'prod-title');
    title.appendChild(document.createTextNode(data.title));
    let cost = document.createElement('p');
    cost.setAttribute('class', 'prod-cost');
    cost.appendChild(document.createTextNode(data.price));

    //now to link these statemnts together
    prodInfoDiv.appendChild(title);
    prodInfoDiv.appendChild(cost);
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(prodInfoDiv);
    container.appendChild(cardDiv);

}




function fetchProducts(){
    fetch("https://dummyjson.com/products")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let products = data.products;
            let container = document.getElementById('product-list');
            let containerFragment = document.createDocumentFragment();
            products.forEach(function(product) {
                buildCardsUsingDOMAPI(container, product);
            })
            container.appendChild(containerFragment);
        })
    //promise syntax - an object that wraps an event that promises to be resolved (run successfully)
}
fetchProducts()


/*(function(a, b, c){
*  this function is just immediately called
* })(a, b, c)*/

//    axios.get() //post put wrapper for fetch
/*function fetchProducts(){
    fetch(url, {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            id: 5,
            message: "hello"
        })
    });
} */