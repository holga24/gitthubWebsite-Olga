(() => {
    const card = document.querySelector(".about-photo-flip");
    if (!card) return;

    const frontImage = card.querySelector(".about-photo-front img");
    const backImage = card.querySelector(".about-photo-back img");
    const photos = [
        {
            src: "Photo/Olgapink-sage.png",
            alt: "Portrait of Olga Hamilton",
            label: "portrait of Olga Hamilton"
        },
        {
            src: "Photo/Peace lily.jpg",
            alt: "White peace lily surrounded by green leaves",
            label: "peace lily photograph"
        },
        {
            src: "Photo/Lemon.jpg",
            alt: "Bright yellow lemons, including one sliced lemon",
            label: "lemon photograph"
        },
        {
            src: "Photo/Book.jpeg",
            alt: "A stack of books about design, data analysis, discovery, business, wellness, and love",
            label: "book-stack photograph"
        }
    ];
    let currentIndex = 0;
    let flipped = false;

    const showNextPhoto = () => {
        const nextIndex = (currentIndex + 1) % photos.length;
        const nextPhoto = photos[nextIndex];
        const followingPhoto = photos[(nextIndex + 1) % photos.length];
        const hiddenImage = flipped ? frontImage : backImage;

        hiddenImage.src = nextPhoto.src;
        hiddenImage.alt = nextPhoto.alt;
        flipped = !flipped;
        card.classList.toggle("is-flipped", flipped);
        card.setAttribute(
            "aria-label",
            `${nextPhoto.label}. Activate to show the ${followingPhoto.label}.`
        );
        currentIndex = nextIndex;
    };

    card.addEventListener("click", showNextPhoto);
    window.setInterval(showNextPhoto, 4000);
})();
