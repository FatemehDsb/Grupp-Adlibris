let searchResultBox = document.querySelector(".search-results") ;
const bookCollection = {
  books: [
    { image: "/image/dreams.webp", title: "The Secret of Dreams", author: "Alex Reed", price: 150 },
    { image: "/image/journey.webp", title: "Journey to the Unknown", author: "Samantha Moon", price: 200 },
    { image: "/image/time.webp", title: "Lost in Time", author: "George Swift", price: 175 },
    { image: "/image/past.webp", title: "Echoes of the Past", author: "Lucy Fields", price: 220 },
    { image: "/image/shadow.webp", title: "Shadows and Light", author: "Ethan Knight", price: 180 },
    { image: "/image/space.webp", title: "Beyond the Horizon", author: "Nora Blake", price: 195 },
    { image: "/image/mage.webp", title: "The Last Mage", author: "Derek Stone", price: 205 },
    { image: "/image/crown.webp", title: "Crown of Thorns", author: "Isabel Meyer", price: 210 },
    { image: "/image/kingdome.webp", title: "The Forgotten Kingdom", author: "Chris Ward", price: 230 },
    { image: "/image/wisper.webp", title: "Whispers of the Wind", author: "Jenny Adams", price: 250 }
  ]
};

const showBooks = document.querySelector(".search-result-box");

// Funktion för att skapa och visa bokkort
let displayBookCards = () => {
  let shuffledBooks = [...bookCollection.books].sort(() => 0.5 - Math.random()); // Blanda böckerna
  let selectedBooks = shuffledBooks.slice(0, 4); // Välj de första fyra böckerna efter blandningen

  selectedBooks.forEach(book => {
    let card = document.createElement("div");
    card.style.fontSize="11px";
    
    card.innerHTML = `
      <img class="book-cover" src="${book.image}" alt="${book.title}">
      <h3 class="book-title" ><a href="${book.url}">${book.title}</a></h3>
      <p class="book-author" >${book.author}</p>
      <span class="buy-link-button">${book.price} kr <i class="fas fa-shopping-bag"></span>`
      ;

      showBooks.append(card);
  });
}

// Kallar på funktionen för att visa bokkorten
displayBookCards();
