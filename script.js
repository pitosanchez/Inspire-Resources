document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll("a");
    anchors.forEach(anchor => {
        const href = anchor.getAttribute("href");
        // Open external links in a new tab
        if (href && !href.startsWith("#")) {
            anchor.setAttribute("target", "_blank");
        }
        // Smooth scrolling for internal links
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
