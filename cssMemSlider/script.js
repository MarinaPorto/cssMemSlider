let mems = [
  {
    "id": 0,
    "img": "./img/01.JPG",
    "text": "Error",
  },
  {
    "id": 1,
    "img": "./img/02.JPG",
    "text": "Выбор очевиден",
  },
  {
    "id": 2,
    "img": "./img/03.jpg",
    "text": "Хм, код не работает...",
  },
  {
    "id": 3,
    "img": "./img/04.jpg",
    "text": "You're the best",
  }
]

const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderElementWrapper = document.querySelector('.slider-element-wrapper');
const sliderTextWrapperAnimation = document.querySelector('.slider-text-wrapper-animation');
const sliderTextWrapper = document.querySelector('.slider-text-wrapper');
const controllerWrapper = document.querySelector('.controller-wrapper');

let slide = "";
let controll = "";
let sliderElement = "";
let indexOfSlide = 0;
let indexOfPreviewSlide = 0;


createCards()
createControllers()


function createCards() {
  sliderElementWrapper.innerHTML = "";

  mems.forEach((el, index) => {
    console.log(el.id)
    sliderElement =
      `
      <img class="slider-img" src="${el.img}" alt=${el.id} />              
      `

    if (index == 0) {
      sliderElementText =
        `      
      <div class="slider-text" style="visibility:visible">
        <span class="slider-text-t">${el.text}</span>
      </div>               
   `
    } else {
      sliderElementText =
    `
      <div class="slider-text">
        <span class="slider-text-t">${el.text}</span>
      </div>               
    `
    }
    sliderElementWrapper.innerHTML += sliderElement
    sliderTextWrapper.innerHTML += sliderElementText
  })
}

const sliderText = document.querySelectorAll('.slider-text ');
sliderText[0].style.display = "block"

function createControllers() {
  mems.forEach((el) => {
    controll += `
    <div class="controller" id='contr${el.id}'>
    <div class="controller-inner"></div>
    </div>
    `
    controllerWrapper.innerHTML = controll
  })
}

let controllersBtns = document.querySelectorAll(".controller")
let controllersBtnsInner = document.querySelectorAll(".controller-inner")
let sliderElements = document.querySelectorAll(".slider-elem")
controllersBtnsInner[0].classList.add('controller-inner-active')

function changeOrder(index) {
  sliderElements.forEach((slide) => {
    slide.classList.remove('order')
  })
}

controllersBtns.forEach((el, index) => {
  el.addEventListener("click", () => {
    sliderText.forEach((el) => {
      el.classList.remove('tooltip')
    })

    controllersBtnsInner.forEach((el) => {
      el.classList.remove("controller-inner-active")
      })
    controllersBtnsInner[index].classList.add('controller-inner-active')

    el.classList.remove("controller-inner-active")
    sliderWrapper.classList.remove('transition-right-1-left')
    sliderWrapper.classList.remove('transition-right-left')
    sliderWrapper.classList.remove('transition-right-104-left')
    sliderWrapper.classList.remove('transition-right-156-left')

    indexOfSlide = index;

    if (index == 0 && indexOfPreviewSlide == 1) {
      sliderWrapper.classList.add('transition-right-1')
      sliderWrapper.classList.add('transition-right-1-left')
      sliderTextWrapperAnimation.classList.add('transition-left-text')
      // sliderWrapper.style.left = '0'
      sliderTextWrapperAnimation.style.left = '0'
    } else if (index == 0 && indexOfPreviewSlide == 2) {
      sliderWrapper.classList.add('transition-right-2')
      sliderWrapper.classList.add('transition-right-1-left')
      sliderTextWrapperAnimation.classList.add('transition-left-text')
      // sliderWrapper.style.left = '0'
      sliderTextWrapperAnimation.style.left = '0'
    }
    else if (index == 0 && indexOfPreviewSlide == 3) {
      sliderWrapper.classList.add('transition-right-3')
      sliderWrapper.classList.add('transition-right-1-left')
      sliderTextWrapperAnimation.classList.add('transition-left-text')
      // sliderWrapper.style.left = '0'
      sliderTextWrapperAnimation.style.left = '0'
    }



    else if (index == 1 && indexOfPreviewSlide < 1) {
      sliderWrapper.classList.add('transition-right')
      sliderWrapper.classList.add('transition-right-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-25')
      // sliderWrapper.style.left = '-50.5em'
      sliderTextWrapperAnimation.style.left = '-22em'
    }
    else if (index == 1 && indexOfPreviewSlide == 2) {
      sliderWrapper.classList.add('transition-right-2-3')
      sliderWrapper.classList.add('transition-right-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-25')
      // sliderWrapper.style.left = '-50.5em'
      sliderTextWrapperAnimation.style.left = '-22em'
    } else if (index == 1 && indexOfPreviewSlide == 3) {
      sliderWrapper.classList.add('transition-right-2-4')
      sliderWrapper.classList.add('transition-right-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-25')
      // sliderWrapper.style.left = '-50.5em'
      sliderTextWrapperAnimation.style.left = '-22em'
    } else if (index == 2 && indexOfPreviewSlide == 1) {
      sliderWrapper.classList.add('transition-right-104')
      sliderWrapper.classList.add('transition-right-104-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-50')
      // sliderWrapper.style.left = '-102em'
      sliderTextWrapperAnimation.style.left = '-44em'
    }
    else if (index == 2 && indexOfPreviewSlide == 0) {
      sliderWrapper.classList.add('transition-right-3-1')
      sliderWrapper.classList.add('transition-right-104-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-50')
      // sliderWrapper.style.left = '-102em'
      sliderTextWrapperAnimation.style.left = '-44em'
    } else if (index == 2 && indexOfPreviewSlide == 3) {
      sliderWrapper.classList.add('transition-right-3-4')
      sliderWrapper.classList.add('transition-right-104-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-50')
      // sliderWrapper.style.left = '-102em'
      sliderTextWrapperAnimation.style.left = '-44em'
    }
    else if (index == 3 && indexOfPreviewSlide == 2) {
      sliderWrapper.classList.add('transition-right-156')
      sliderWrapper.classList.add('transition-right-156-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-75')
      // sliderWrapper.style.left = '-153.5em'
      sliderTextWrapperAnimation.style.left = '-66em'
    }
    else if (index == 3 && indexOfPreviewSlide == 1) {
      sliderWrapper.classList.add('transition-right-4-1')
      sliderWrapper.classList.add('transition-right-156-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-75')
      // sliderWrapper.style.left = '-153.5em'
      sliderTextWrapperAnimation.style.left = '-66em'
    }
    else if (index == 3 && indexOfPreviewSlide == 0) {
      sliderWrapper.classList.add('transition-right-4-0')
      sliderWrapper.classList.add('transition-right-156-left')
      sliderTextWrapperAnimation.classList.add('transition-right-text-75')
      // sliderWrapper.style.left = '-153.5em'
      sliderTextWrapperAnimation.style.left = '-66em'
    }
  })
})

sliderTextWrapperAnimation.addEventListener('animationstart', () => {

  sliderText.forEach((el) => {
    el.classList.add('tooltip1')
  })
  sliderText[indexOfSlide].classList.add('tooltip')
})

sliderWrapper.addEventListener('animationend', () => {
  sliderWrapper.classList.remove('transition-left')
  sliderWrapper.classList.remove('transition-right')
  sliderWrapper.classList.remove('transition-right-104')
  sliderWrapper.classList.remove('transition-right-156')
  sliderWrapper.classList.remove('transition-right-1')
  sliderWrapper.classList.remove('transition-right-2')
  sliderWrapper.classList.remove('transition-right-3')
  sliderWrapper.classList.remove('transition-right-2-3')
  sliderWrapper.classList.remove('transition-right-2-4')
  sliderWrapper.classList.remove('transition-right-3-1')
  sliderWrapper.classList.remove('transition-right-3-4')
  sliderWrapper.classList.remove('transition-right-4-1')
  sliderWrapper.classList.remove('transition-right-4-0')
  indexOfPreviewSlide = indexOfSlide
})

sliderTextWrapperAnimation.addEventListener('animationend', () => {
  sliderTextWrapperAnimation.classList.remove('transition-left-text')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-25')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-50')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-75')
})

