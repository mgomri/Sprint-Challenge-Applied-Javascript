// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardMaker(headline, imgUrl, authorName){

    const cardDiv = document.createElement("div");
    const headLineDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const  name = document.createElement("span");

    headLineDiv.textContent = headline;
    image.src = imgUrl;
    name.textContent = authorName;
    


    cardDiv.classList.add('card');
    headLineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    cardDiv.appendChild(headLineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(image);
    authorDiv.appendChild(name);




  return cardDiv;  
}


cardsContainer = document.querySelector('.cards-container');


axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {
        //  console.log(response.data);


         
         response.data.articles.javascript.forEach(ele => {
             cardsContainer.appendChild(cardMaker(ele.headline, ele.authorPhoto, ele.authorName));
         });
         response.data.articles.bootstrap.forEach(ele => {
            cardsContainer.appendChild(cardMaker(ele.headline, ele.authorPhoto, ele.authorName));
        });
        response.data.articles.technology.forEach(ele => {
            cardsContainer.appendChild(cardMaker(ele.headline, ele.authorPhoto, ele.authorName));
        });
        response.data.articles.jquery.forEach(ele => {
            cardsContainer.appendChild(cardMaker(ele.headline, ele.authorPhoto, ele.authorName));
        });
        response.data.articles.node.forEach(ele => {
            cardsContainer.appendChild(cardMaker(ele.headline, ele.authorPhoto, ele.authorName));
        });




     }).catch(error => {
         console.log("Something is wrong!", error)
     });