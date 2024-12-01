document.getElementById("toggle-images-1").addEventListener("click", function () {
    const gallery1 = document.getElementById("image-gallery-1");
    if (gallery1.classList.contains("hidden")) {
        gallery1.classList.remove("hidden");
        this.textContent = "Hide Pictures";
    } else {
        gallery1.classList.add("hidden");
        this.textContent = "Show Pictures";
    }
});

document.getElementById("toggle-images-2").addEventListener("click", function () {
    const gallery2 = document.getElementById("image-gallery-2");
    if (gallery2.classList.contains("hidden")) {
        gallery2.classList.remove("hidden");
        this.textContent = "Hide Pictures";
    } else {
        gallery2.classList.add("hidden");
        this.textContent = "Show Pictures";
    }
});

document.getElementById("toggle-images-3").addEventListener("click", function () {
    const gallery2 = document.getElementById("image-gallery-3");
    if (gallery2.classList.contains("hidden")) {
        gallery2.classList.remove("hidden");
        this.textContent = "Hide Pictures";
    } else {
        gallery2.classList.add("hidden");
        this.textContent = "Show Pictures";
    }
});

