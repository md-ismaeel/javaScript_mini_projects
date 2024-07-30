const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const imageBox = document.querySelector(".image-box");
const images = document.querySelectorAll(".carousel-image");
const autoplayCheckbox = document.querySelector(".autoplayInput");
const autoplayIntervalInput = document.querySelector(".autoplayIntervalInput");

let currentIndex = 0;
let autoplayInterval = Number(autoplayIntervalInput.value);
let autoplayId;

// Array of image URLs
const imageUrls = Array.from(images).map(img => img.src);

const updateImagePosition = () => {
    imageBox.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateNavigationButtons();
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImagePosition();
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImagePosition();
};

const updateNavigationButtons = () => {
    // The buttons should always be enabled because of the infinite loop
    prevButton.disabled = false;
    nextButton.disabled = false;
};

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

autoplayCheckbox.addEventListener("change", () => {
    if (autoplayCheckbox.checked) {
        autoplayId = setInterval(showNextImage, autoplayInterval);
    } else {
        clearInterval(autoplayId);
    }
});

autoplayIntervalInput.addEventListener("input", () => {
    autoplayInterval = Number(autoplayIntervalInput.value);
    if (autoplayCheckbox.checked) {
        clearInterval(autoplayId);
        autoplayId = setInterval(showNextImage, autoplayInterval);
    }
});

// Initial load
updateImagePosition();

// Start autoplay if checkbox is checked on load
if (autoplayCheckbox.checked) {
    autoplayId = setInterval(showNextImage, autoplayInterval);
}

// Clear interval on unload
window.addEventListener("beforeunload", () => {
    clearInterval(autoplayId);
});
