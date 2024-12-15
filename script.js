const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const visitorName = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const number = document.getElementById('number').value.trim();
const message = document.getElementById('message').value.trim();

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const menuGrid = document.querySelector(".menu-grid");
  
    const menuItems = [
      { title: "Pepperoni Pizza", price: "$10.00", imageUrl: "./images/pepperoni.jpg" },
      { title: "Pineapple Pizza", price: "$12.00", imageUrl: "./images/pineapple.jpg" },
      { title: "Mushroom Pizza", price: "$8.00", imageUrl: "./images/pizza.jpeg" },
      { title: "Benny's Special", price: "$14.00", imageUrl: "./images/expensive.jpg" },
      { title: "Vegan Pizza", price: "$9.00", imageUrl: "./images/vegan.jpg" },
      { title: "Extra Cheesey", price: "$11.00", imageUrl: "./images/margherita.jpg" }
    ];
  
    // Loop through the array to create each card
    menuItems.forEach(item => {
      const newCard = document.createElement("div");
      newCard.classList.add("menu-card");
  
      newCard.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}" class="card-image">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-price">${item.price}</p>
      `;
  
      menuGrid.appendChild(newCard);
    });
  });

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (!visitorName === '' || !email  === '' || !number === '' || !message  === '' ) {
    alert('Please fill in all fields.');
    return;
  }

  alert("Sorry, we are closed for now ￣へ￣");
});
