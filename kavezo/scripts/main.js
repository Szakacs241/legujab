document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.querySelector("h2");
    welcomeMessage.style.opacity = 0;

    setTimeout(() => {
        welcomeMessage.style.transition = "opacity 4s";
        welcomeMessage.style.opacity = 1;
    }, 500);
    info.addEventListener("click", () => {
        info.style.color = "#00796b";
        info.style.transition = "color 0.5s";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});
const coffees = [
    { name: "Cappuccino", price: "1000 Ft", image: "images/cappuccino.png" },
    { name: "Latte", price: "900 Ft", image: "images/latte.png" },
    { name: "Espresso", price: "800 Ft", image: "images/espresso.png" },
    { name: "Americano", price: "1000 Ft", image: "images/americano.png" },
    { name: "Mokka", price: "900 Ft", image: "images/mokka.png" },
    { name: "Macchiato", price: "800 Ft", image: "images/macchiato.png" },
    { name: "Flat White", price: "1000 Ft", image: "images/flatwhite.png" },
    { name: "Mocha", price: "900 Ft", image: "images/mocha.png" },
    { name: "Café Latte", price: "800 Ft", image: "images/cafelatte.png" },
    { name: "Ristretto", price: "1000 Ft", image: "images/riste.png" },
    { name: "Irish Coffee", price: "900 Ft", image: "images/irishcoffee.png" },
    { name: "Ízesített Cappuccino", price: "800 Ft", image: "images/cappuccinoflavored.png" }
];

const pastries = [
    { name: "Csokitorta", price: "1600 Ft ➜ 0 Ft", image: "images/csokitorta.png" },
    { name: "Sajttorta", price: "1500 Ft ➜ 0 Ft", image: "images/sajttorta.png" },
    { name: "Répatorta", price: "1400 Ft ➜ 0 Ft", image: "images/repatorta.png" },
    { name: "Puncstorta", price: "1600 Ft ➜ 0 Ft", image: "images/puncstorta.png" },
    { name: "Epres Torta", price: "1500 Ft ➜ 0 Ft", image: "images/eprestorta.png" },
    { name: "Almás Torta", price: "1400 Ft ➜ 0 Ft", image: "images/almastorta.png" },
    { name: "Karamelltorta", price: "1600 Ft ➜ 0 Ft", image: "images/karameltorta.png" },
    { name: "Citromtorta", price: "1500 Ft ➜ 0 Ft", image: "images/citromtorta.png" },
    { name: "Mogyorótorta", price: "1400 Ft ➜ 0 Ft", image: "images/mogyorotorta.png" },
    { name: "Keksz", price: "500 Ft ➜ 0 Ft", image: "images/keksz.png" },
    { name: "Kókuszgolyó", price: "600 Ft ➜ 0 Ft", image: "images/kokuszgolyo.png" },
    { name: "Vaníliás Fagyi", price: "700 Ft ➜ 0 Ft", image: "images/vaniliasfagyi.png" }
];

function getRandomOffer() {
    const randomCoffee = coffees[Math.floor(Math.random() * coffees.length)];
    const randomPastry = pastries[Math.floor(Math.random() * pastries.length)];
    
    document.getElementById('offer-text').innerText = `Ha veszel egy ${randomCoffee.name} kávét, kapsz mellé egy szelet ${randomPastry.name} süteményt ingyen!`;
    document.getElementById('offer-coffee').src = randomCoffee.image;
    document.getElementById('coffee-price').innerText = randomCoffee.price;
    document.getElementById('offer-pastry').src = randomPastry.image;
    document.getElementById('pastry-price').innerText = randomPastry.price;
}

getRandomOffer();

