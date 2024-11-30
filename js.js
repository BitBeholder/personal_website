document.getElementById("toggle-images").addEventListener("click", function () {
    const gallery = document.getElementById("image-gallery");
    if (gallery.classList.contains("hidden")) {
        gallery.classList.remove("hidden");
        this.textContent = "Hide Pictures";
    } else {
        gallery.classList.add("hidden");
        this.textContent = "Show Pictures";
    }
});