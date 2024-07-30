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
const imageUrls = [
    "Carousel\img\cat-1.jpeg",
    "Carousel\img\cat-2.jpeg",
    "Carousel\img\cat-3.png",
    "Carousel\img\cat-4.png",
    "Carousel\img\cat-5.jpg",
    "Carousel\img\cat-6.jpg",
    // Add more image paths as needed
];

const updateImagePosition = () => {
    imageBox.style.transform = `translateX(-${currentIndex * 100}%)`;
    // Update the src attribute of each image based on the currentIndex
    images.forEach((img, index) => {
        const imgIndex = (currentIndex + index) % imageUrls.length;
        img.src = imageUrls[imgIndex];
    });
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImagePosition();
};

const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImagePosition();
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
