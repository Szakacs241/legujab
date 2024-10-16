document.addEventListener("DOMContentLoaded", function() {
    const cakeItems = document.querySelectorAll("ul li");

    cakeItems.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
