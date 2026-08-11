document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main.case-detail img:not(.no-lightbox)");

    if (!images.length) return;

    const lightbox = document.createElement("dialog");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("aria-label", "Expanded image view");
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" type="button" aria-label="Close image view">×</button>
            <img class="lightbox-image" alt="">
            <p class="lightbox-caption"></p>
        </div>
    `;
    document.body.appendChild(lightbox);

    const expandedImage = lightbox.querySelector(".lightbox-image");
    const caption = lightbox.querySelector(".lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");

    const closeLightbox = () => lightbox.close();

    images.forEach((image) => {
        image.classList.add("lightbox-trigger");
        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", `Open large view: ${image.alt || "project image"}`);

        const openLightbox = () => {
            expandedImage.src = image.currentSrc || image.src;
            expandedImage.alt = image.alt;
            caption.textContent = image.alt || "Project image";
            lightbox.showModal();
            closeButton.focus();
        };

        image.addEventListener("click", openLightbox);
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox();
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
});
