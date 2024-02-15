// import { default as books} from '.booksModule.js';

const bookCollection = {
  books: [
    { image: "image-url1.jpg", title: "The Secret of Dreams", author: "Alex Reed", price: 150 },
    { image: "image-url2.jpg", title: "Journey to the Unknown", author: "Samantha Moon", price: 200 },
    { image: "image-url3.jpg", title: "Lost in Time", author: "George Swift", price: 175 },
    { image: "image-url4.jpg", title: "Echoes of the Past", author: "Lucy Fields", price: 220 },
    { image: "image-url5.jpg", title: "Shadows and Light", author: "Ethan Knight", price: 180 },
    { image: "image-url6.jpg", title: "Beyond the Horizon", author: "Nora Blake", price: 195 },
    { image: "image-url7.jpg", title: "The Last Mage", author: "Derek Stone", price: 205 },
    { image: "image-url8.jpg", title: "Crown of Thorns", author: "Isabel Meyer", price: 210 },
    { image: "image-url9.jpg", title: "The Forgotten Kingdom", author: "Chris Ward", price: 230 },
    { image: "image-url10.jpg", title: "Whispers of the Wind", author: "Jenny Adams", price: 250 }
  ]
};

// Funktion för att skapa och visa bokkort
let displayBookCards = () => {
  let shuffledBooks = [...bookCollection.books].sort(() => 0.5 - Math.random()); // Blanda böckerna
  let selectedBooks = shuffledBooks.slice(0, 4); // Välj de första fyra böckerna efter blandningen

  selectedBooks.forEach(book => {
    let card = document.createElement("div");
    
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3><a href="${book.url}">${book.title}</a></h3>
      <p>${book.author}</p>
      <button>${book.price} kr </button>`;

      document.body.append(card);
  });
}

// Kallar på funktionen för att visa bokkorten
displayBookCards();
