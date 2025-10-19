document.addEventListener("DOMContentLoaded", function () {
    function bindToggle(btnId, galleryId) {
      const btn = document.getElementById(btnId);
      const gallery = document.getElementById(galleryId);
      if (!btn || !gallery) return;
  
      const originalText = btn.textContent;
  
      btn.addEventListener("click", function () {
        gallery.classList.toggle("hidden");
        this.textContent = gallery.classList.contains("hidden")
          ? originalText
          : "Hide Pictures";
      });
    }
  
    bindToggle("toggle-images-1", "image-gallery-1");
    bindToggle("toggle-images-2", "image-gallery-2");
    bindToggle("toggle-images-3", "image-gallery-3");
    bindToggle("toggle-images-4", "image-gallery-4");
    bindToggle("toggle-images-5", "image-gallery-5");
  });
  