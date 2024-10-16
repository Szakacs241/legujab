document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = document.querySelectorAll("p");
    contactInfo.forEach(info => {
        info.addEventListener("click", () => {
            info.style.color = "#00796b";
            info.style.transition = "color 0.5s";
        });
    });
});
