var currentIndex = 1;
var totalImages = 3;

function nextSlide() {
    currentIndex++;
    if (currentIndex > totalImages) {
        currentIndex = 1;
    }
    document.getElementById('sliderImage').src = 'image' + currentIndex + '.jpg';
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = totalImages;
    }
    document.getElementById('sliderImage').src = 'image' + currentIndex + '.jpg';