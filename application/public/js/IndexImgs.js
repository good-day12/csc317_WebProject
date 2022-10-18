//do it with DOM api
function buildCardsUsingDOMAPI(container, data){ //conatiner is product lists
    let cardDiv = document.createElement('div');
    // cardDiv.addEventListener('click', function(ev){
    //     console.log(ev.target);
    //     console.log(ev.currentTarget); //allows us to target child classes as well
    //     ev.currentTarget.style.opacity
    // })
    cardDiv.setAttribute('class', 'img-card');

    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.thumbnailUrl);
    imgElement.setAttribute('class', 'img');

    let title = document.createElement('p');
    title.setAttribute('class', 'img-title');
    title.appendChild(document.createTextNode(data.title));


    //now to link these statemnts together, do it backwards
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(title);

    container.appendChild(cardDiv);
}

function fetchProducts(){
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(data){
            let photos = data.title; //<-----------what is it called?
            let container = document.getElementById('product-list');
            let containerFragment = document.createDocumentFragment();
            photos.forEach(function(img) {
                buildCardsUsingDOMAPI(container, img);
            })
            container.appendChild(containerFragment);
        })
    //promise syntax - an object that wraps an event that promises to be resolved (run successfully)
}
fetchProducts()