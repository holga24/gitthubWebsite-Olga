(() => {
    const footer = document.querySelector("footer");
    if (!footer || footer.querySelector(".footer-social-links")) return;

    const links = document.createElement("nav");
    links.className = "footer-social-links";
    links.setAttribute("aria-label", "Social and contact links");
    links.innerHTML = `
        <a href="https://www.linkedin.com/in/olga-hamilton-oh" target="_blank" rel="noopener" aria-label="LinkedIn profile">
            <img src="Photo/Inblack.png" alt="">
        </a>
        <a href="https://github.com/holga24" target="_blank" rel="noopener" aria-label="GitHub profile">
            <img src="github.svg" alt="">
        </a>
        <a class="footer-email-link" href="mailto:olgakhamilton@gmail.com" aria-label="Email Olga Hamilton">
            <i aria-hidden="true">✉️</i>
        </a>`;
    footer.append(links);

    const emailLink = links.querySelector(".footer-email-link");
    emailLink.addEventListener("click", (event) => {
        event.preventDefault();

        if (emailLink.dataset.opened === "true") return;

        emailLink.dataset.opened = "true";
        emailLink.setAttribute("aria-disabled", "true");
        emailLink.style.pointerEvents = "none";
        window.location.href = emailLink.href;
    });
})();
