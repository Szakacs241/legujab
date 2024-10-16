document.addEventListener("DOMContentLoaded", function() {
    const coffeeImages = document.querySelectorAll("ul li img");

    coffeeImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
