const cards = document.querySelectorAll(".car-card");

cards.forEach(card => {
    card.addEventListener("click", function () {

        const target = this.getAttribute("data-page");

        this.style.transform = "scale(1.1)";
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = target;
        }, 700);
    });
});