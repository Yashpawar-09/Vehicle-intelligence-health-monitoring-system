const cards = document.querySelectorAll(".type-card");

cards.forEach(card => {
    card.addEventListener("click", function () {

        const targetPage = this.getAttribute("data-target");

        // Add card animation
        this.classList.add("clicked");

        // Fade whole page
        document.body.classList.add("fade-out");

        // Redirect after animation
        setTimeout(() => {
            window.location.href = targetPage;
        }, 800);
    });
});

