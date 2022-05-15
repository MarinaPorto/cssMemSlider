
// let mems = [
//   {
//     "id": 0,
//     "img": "./img/01.jpg",
//     "text": "Error",
//   },
//   {
//     "id": 1,
//     "img": "./img/02.jpg",
//     "text": "Выбор очевиден",
//   },
//   {
//     "id": 2,
//     "img": "./img/03.jpg",
//     "text": "Хм, код не работает...",
//   },
//   {
//     "id": 3,
//     "img": "./img/04.jpg",
//     "text": "You're the best",
//   }
// ]

// const sliderWrapper = document.querySelector('.slider-wrapper');
// const controllerWrapper = document.querySelector('.controller-wrapper');

// console.log(sliderWrapper)
// console.log(mems)
// let slide = "";
// let controll = "";
// let sliderElement = "";
// let indexOfSlide = 0;


// createCards()
// createControllers()


// function createCards() {
//   // sliderWrapper.innerHTML = "";
//   sliderWrapper.innerHTML = "";

//   // sliderElement = `
//   //     <div class="slider-elem" id=${mems[indexOfSlide].id}>
//   //         <img class="slider-img" src="${mems[indexOfSlide].img}" alt=${mems[indexOfSlide].id} />
//   //         <span class="slider-text">${mems[indexOfSlide].text}</span>
//   //              </div>       
//   // `


//   mems.forEach((el) => {
//     console.log(el.id)
//     sliderElement =
//   //    `
//   //     <div class="slider-elem" id=${el.id}>
//   //         <img class="slider-img" src="${el.img}" alt=${el.id} />
//   //         <span class="slider-text">${el.text}</span>
//   //              </div>       
//   // `
//      `
//       <div class="slider-elem" id=${el.id}>
//           <img class="slider-img" src="${el.img}" alt=${el.id} />
//                </div>  
//                <div class="slider-elem-text" id=${el.id}>
//           <span class="slider-text">${el.text}</span>
//           </div>

//   `
//     sliderWrapper.innerHTML += sliderElement
//   })




// }

// function createControllers() {
//   mems.forEach((el) => {
//     controll += `
//     <div class="controller" id='contr${el.id}'>
//     </div>
//     `
//     controllerWrapper.innerHTML = controll
//   })
// }

// let controllersBtns = document.querySelectorAll(".controller")
// let sliderElements = document.querySelectorAll(".slider-elem")
// console.log(controllersBtns)
// console.log(sliderElements)

// function changeOrder (index) {
//   sliderElements.forEach((slide) => {
//     slide.classList.remove('order')
//     console.log("sliderElements.forEach", slide.id)
//     console.log("index", index)
//     if (slide.id == index) {
//       console.log("slide", slide)

//       // slide.classList.add("order")

//       // let currentSlide = slide.innerHTML
//       // let firstSlide = document.getElementById('0')
//       // console.log(currentSlide)
//       // console.log(firstSlide)
//       // firstSlide.innerHTML = currentSlide
//       // slide.style.order = -1
//     }

//   })

// }

// controllersBtns.forEach((el, index) => {

//   // console.log(index)
//   console.log(el)
//   console.log(index)

//   el.addEventListener("click", () => {


//     // indexOfSlide = index;
//     console.log("click")
//     console.log("index", index)
//     if (index == 0) {
//       sliderWrapper.classList.add('transition-left')
//       sliderWrapper.style.left = '0'
//     } else if (index == 1) {
//       sliderWrapper.classList.add('transition-right')
//       sliderWrapper.style.left = '-52em'
//     } else if (index == 2) {
//       sliderWrapper.classList.add('transition-right-104')
//       sliderWrapper.style.left = '-104em'
//     }
//     else if (index == 3) {
//       sliderWrapper.classList.add('transition-right-156')
//       sliderWrapper.style.left = '-156em'
//     }

//     // let currentSlide = sliderElements[index].innerHTML
//     // let firstSlide = document.getElementById('0')
//     // console.log(currentSlide)
//     // console.log(firstSlide)
//     // firstSlide.innerHTML = currentSlide

//     // createCards()
//     //  changeOrder(index)
//   })
// })


// sliderWrapper.addEventListener('animationend', () =>{
//     sliderWrapper.classList.remove('transition-right')
//     sliderWrapper.classList.remove('transition-right-104')
//     sliderWrapper.classList.remove('transition-right-156')
// })


///////////////другое позиционирование и разметка

let mems = [
  {
    "id": 0,
    "img": "./img/01.jpg",
    "text": "Error",
  },
  {
    "id": 1,
    "img": "./img/02.jpg",
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
  // sliderWrapper.innerHTML = "";
  sliderElementWrapper.innerHTML = "";

  // sliderElement = `
  //     <div class="slider-elem" id=${mems[indexOfSlide].id}>
  //         <img class="slider-img" src="${mems[indexOfSlide].img}" alt=${mems[indexOfSlide].id} />
  //         <span class="slider-text">${mems[indexOfSlide].text}</span>
  //              </div>       
  // `

  //  <div class="slider-text" style="display:block">
  mems.forEach((el, index) => {
    console.log(el.id)
    sliderElement =
      //    `
      //     <div class="slider-elem" id=${el.id}>
      //         <img class="slider-img" src="${el.img}" alt=${el.id} />
      //         <span class="slider-text">${el.text}</span>
      //              </div>       
      // `
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
console.log("controllersBtns[0]", controllersBtns[0])
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
  // el.style.display = "none"
})

controllersBtnsInner.forEach((el) => {
  el.classList.remove("controller-inner-active")
// el.style.display = "none"
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
    }  else   if (index == 0 && indexOfPreviewSlide == 2) {
      sliderWrapper.classList.add('transition-right-2')
      sliderWrapper.classList.add('transition-right-1-left')
      sliderTextWrapperAnimation.classList.add('transition-left-text')
      // sliderWrapper.style.left = '0'
      sliderTextWrapperAnimation.style.left = '0'
    } 
    else   if (index == 0 && indexOfPreviewSlide == 3) {
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
    }else if (index == 2 && indexOfPreviewSlide == 1) {
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
    // el.style.display = "none"
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
 

  // sliderText[indexOfSlide].style.display = "block"
  // sliderText[indexOfSlide].style.opacity = "1" 

  indexOfPreviewSlide = indexOfSlide

  console.log("indexOfPreviewSlide2", indexOfPreviewSlide)
})

sliderTextWrapperAnimation.addEventListener('animationend', () => {
  sliderTextWrapperAnimation.classList.remove('transition-left-text')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-25')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-50')
  sliderTextWrapperAnimation.classList.remove('transition-right-text-75')
})

