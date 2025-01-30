document.addEventListener("DOMContentLoaded", () => {
    // Ensure all links open in a new tab
    document.querySelectorAll("a").forEach(link => {
        link.setAttribute("target", "_blank");
    });

    // Smooth scrolling effect for better user experience
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
