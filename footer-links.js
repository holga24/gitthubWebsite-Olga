(() => {
    const footers = document.querySelectorAll("footer");
    if (!footers.length) return;

    footers.forEach((footer) => {
        footer.className = "global-site-footer";
        footer.innerHTML = `
            <div class="global-footer-container">
                <div class="global-footer-brand">
                    <a class="global-footer-mark" href="index.html" aria-label="Olga Hamilton home">OH</a>
                    <h3>Olga Hamilton</h3>
                    <p>Ann Arbor, Michigan</p>
                    <a class="global-footer-contact" href="contactus.html">Contact</a>
                </div>
                <nav class="global-footer-links" aria-label="Footer navigation">
                    <h4>Navigation</h4>
                    <a href="index.html">Home</a>
                    <a href="aboutus.html">About</a>
                    <a href="project.html">Projects</a>
                    <a href="resume.html">Resume</a>
                </nav>
                <nav class="global-footer-links" aria-label="Social and contact links">
                    <h4>Connect</h4>
                    <div class="global-footer-social">
                        <a href="https://www.linkedin.com/in/olga-hamilton-oh" target="_blank" rel="noopener" aria-label="LinkedIn profile"><img src="Photo/Inblack.png" alt=""></a>
                        <a href="https://github.com/holga24" target="_blank" rel="noopener" aria-label="GitHub profile"><img src="github.svg" alt=""></a>
                        <a class="global-footer-email" href="mailto:olgakhamilton@gmail.com" aria-label="Email Olga Hamilton"><i aria-hidden="true">✉️</i></a>
                    </div>
                </nav>
            </div>
            <div class="global-footer-bottom"><p>&copy; 2026 Olga Hamilton. All rights reserved.</p><p>Thank you for visiting.</p></div>`;

        const emailLink = footer.querySelector(".global-footer-email");
        emailLink.addEventListener("click", (event) => {
            event.preventDefault();
            if (emailLink.dataset.opened === "true") return;

            emailLink.dataset.opened = "true";
            emailLink.setAttribute("aria-disabled", "true");
            emailLink.style.pointerEvents = "none";
            window.location.assign(emailLink.href);
        });
    });
})();
