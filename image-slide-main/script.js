
const slides = document.querySelectorAll('.slider');
let counter = 0;

slides.forEach((names, index) => {
    names.style.left = `${index * 100}%`
})

const myInterval = setInterval(() => {
    counter++
    if (counter === slides.length) {
        counter = 0;
    }
    sliderImage();
}, 2000);



const sliderImage = () => {
    slides.forEach((names) => {
        names.style.transform = `translateX(-${counter * 100}%)`
    })
}

const goNext = () => {
    counter++
    if (counter == slides.length) {
        counter = 0;
    }
    sliderImage();
}


const goPrev = () => {
    counter--
    if (counter < 0) {
        counter = slides.length - 1;
    }
    sliderImage()
}





