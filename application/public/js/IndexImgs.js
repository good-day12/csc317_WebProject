//do it with DOM api
function buildCardsUsingDOMAPI(container, data){ //container is image lists
    let cardDiv = document.createElement('div');
    cardDiv.addEventListener('click', function(ev){
        ev.currentTarget.classList.add("removed");
    })

    //this event listener will wait for the transition in .img-card to .removed to be complete
    //then it will run
    cardDiv.addEventListener("transitionend", function(ev){
        cardDiv.remove();
    })

    cardDiv.setAttribute('class', 'img-card');

    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.url);
    imgElement.setAttribute('class', 'img');

    let title = document.createElement('p');
    title.setAttribute('class', 'img-title');
    title.appendChild(document.createTextNode(data.title));

    //now to link these statements together, do it backwards

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
            let photos = data; //<-----------what is it called?
            let container = document.getElementById('img-list');
            let containerFragment = document.createDocumentFragment();
            photos.forEach(function(img) {
                buildCardsUsingDOMAPI(container, img);
            })
            container.appendChild(containerFragment);
        })
    //promise syntax - an object that wraps an event that promises to be resolved (run successfully)
}
fetchProducts()