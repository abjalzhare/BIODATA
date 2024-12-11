// Scroll to top functionality
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.innerText = "⬆️ Top";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "20px";
    scrollToTopButton.style.right = "20px";
    scrollToTopButton.style.display = "none";

    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
