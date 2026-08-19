(() => {
    const cards = [...document.querySelectorAll(".case-card[data-tags]")];
    const tagButtons = [...document.querySelectorAll(".case-tags button[data-tag]")];
    const status = document.querySelector("#project-filter-status");
    const clearButton = document.querySelector("#clear-project-filter");

    if (!cards.length || !status || !clearButton) return;

    const normalize = (value) => value.trim().toLocaleLowerCase();

    function filterProjects(tag, updateUrl = true) {
        const selectedTag = tag ? tag.trim() : "";
        const normalizedTag = normalize(selectedTag);
        let visibleCount = 0;

        cards.forEach((card) => {
            const cardTags = (card.dataset.tags || "")
                .split("|")
                .map(normalize);
            const matches = !normalizedTag || cardTags.includes(normalizedTag);
            card.hidden = !matches;
            if (matches) visibleCount += 1;
        });

        tagButtons.forEach((button) => {
            button.setAttribute("aria-pressed", String(normalize(button.dataset.tag) === normalizedTag));
        });

        status.textContent = selectedTag
            ? `Showing ${visibleCount} ${selectedTag} ${visibleCount === 1 ? "project" : "projects"}`
            : `Showing all ${cards.length} projects`;
        clearButton.hidden = !selectedTag;

        if (updateUrl) {
            const url = new URL(window.location.href);
            selectedTag ? url.searchParams.set("tag", selectedTag) : url.searchParams.delete("tag");
            window.history.replaceState({}, "", url);
        }
    }

    tagButtons.forEach((button) => {
        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => filterProjects(button.dataset.tag));
    });

    clearButton.addEventListener("click", () => filterProjects(""));
    filterProjects(new URLSearchParams(window.location.search).get("tag") || "", false);
})();
