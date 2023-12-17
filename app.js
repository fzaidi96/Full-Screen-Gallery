const thumbnails = document.querySelectorAll(".thumbnails img");
const displayImage = document.getElementById("displayImage");
const carousel = document.querySelector(".thumbnails");
const hideCarousel = document.getElementById("hideCarousel");
const modeButton = document.getElementById("modeButton");
let dayMode = true;


const dayModeImages = [
    { src: "./daymodeimages/berlin_day.jpg", alt: "photo of a semi-busy U-bahn metro station in Berlin, Germany in the afternoon light "},
    { src: "./daymodeimages/LA_day.jpg", alt: "A pink wall decorated with several music posters and advertisments on Mateo Street in LA, California."},
    { src: "./daymodeimages/LDN_day.jpg", alt: "A skyline view of the City of London, St Paul's Cathedral and Milenium Bridge taken from across the river Thames."},
    { src: "./daymodeimages/NYC_day.jpg", alt: "A photo of a busy sreet in Manhattan, where several pedestrians are seen crossing the road as well as on cyclist. New York yellow taxis wait behind them."},
    { src: "./daymodeimages/paris_day.jpg", alt: "The rooftops of Paris photographed from a viewing platform with a view of the Eiffel Tower in the distance."},
    { src: "./daymodeimages/seoul_day.jpg", alt: "A street packed with street signs, advertisments (in Korean) and crossing wires in downtown Seoul with a few pedestrians"},
];

const nightModeImages = [
    { src: "./nightmodeimages/berlin_night.jpg", alt: "Silhoette of the Berlin TV tower in a red sky at dusk."},
    { src: "./nightmodeimages/LA_night.jpg", alt: "View of Los Angeles at dusk taken from just behind the Hollywood sign, with the letters in view."},
    { src: "./nightmodeimages/LDN_night.jpg", alt: "Bars and clubs lit up and emitting red light in London's Soho district at night."},
    { src: "./nightmodeimages/NYC_night.jpg", alt: "A New York City no.7 metro train at a station as the sun sets in Manhattan."},
    { src: "./nightmodeimages/paris_night.jpg", alt: "Storefront of a pizza restaurant in Paris at night in the rain with one al-fresco diner."},
    { src: "./nightmodeimages/seoul_night.jpg", alt: "Colourful street sign and adverts in Korean on a narrow street in Seoul."},
];

function updateThumbnails() {
    const imageArray = dayMode ? dayModeImages : nightModeImages;
    thumbnails.forEach((photo, index) => {
        photo.src = imageArray[index].src;
        photo.alt = imageArray[index].alt;
    });
}

function updateModeButton() {
    modeButton.innerHTML = dayMode ? "🌜" : "☀️";}

modeButton.addEventListener("click", function () {
    dayMode = !dayMode;
    updateModeButton(); 
    updateThumbnails(); 
});

thumbnails.forEach(function (photo) {
    photo.addEventListener("click", function () {
        displayImage.style.backgroundImage = `url(${photo.src})`;
    });
});

hideCarousel.addEventListener("click", function () {
    carousel.classList.toggle("hidden");
});


updateThumbnails();



