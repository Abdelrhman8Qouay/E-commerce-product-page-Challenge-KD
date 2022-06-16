let cart = document.querySelector('.cart');


cart.onclick = () => {
  cart.classList.toggle("active");
}

let menu = document.querySelector('.menu');
let bar = document.querySelector('.barContent');

menu.onclick = () => {
  bar.classList.toggle("active");
}

let close = document.querySelector('.close');


close.onclick = () => {

  bar.classList.remove("active");
}





let bgImg = document.querySelector('.imgsOfProd .mainImgPro img');
let smImgs = document.querySelectorAll('.othersProdImgs .imgMs');
let smImgsSrc = document.querySelectorAll('.othersProdImgs .imgMs .none');

smImgs.forEach((smImg) => {
  smImg.onclick = () => {
    removeActiveSmImgs();
    smImg.classList.add('active');

    bgImg.src = smImg.children[0].innerHTML;


  }
})

function removeActiveSmImgs() {
  smImgs.forEach((smImg) => {
  smImg.classList.remove('active');
})
}


// slider start ===========================================



let btnNext = document.querySelector(".btnOfNxt");

let btnPrev = document.querySelector(".btnOfPrv");

let slidesOfImgs = Array.from(document.querySelectorAll('.imgSlideGame'));

let AllSlides = slidesOfImgs.length;

let currentSlide = 1;

btnNext.onclick = nextSlide;
btnPrev.onclick = previousSlide;

function previousSlide() {
  if (currentSlide == 1) {
    console.log("work on -1");
    currentSlide = AllSlides;
    checkNowslide();
  } else {
    console.log("work on --");
    currentSlide--;
    checkNowslide();
  }
}

function nextSlide() {
  if (currentSlide == AllSlides) {
    console.log("work on all + 1");
    currentSlide = 1;
    checkNowslide();
  } else {
    console.log("work on ++");
    currentSlide++;
    checkNowslide();
  }
}
console.log(slidesOfImgs[currentSlide - 1]);
function checkNowslide() {

  removeAllActive();

  slidesOfImgs[currentSlide - 1].classList.add('active');
}


function removeAllActive() {
  slidesOfImgs.forEach(function (img){
        img.classList.remove('active');
    })
}


// slider end =================================

let numberDown = document.querySelector(".numInput span");
let minus = document.querySelector(".numInput #minus");
let plus = document.querySelector(".numInput #plus");
let btnToCart = document.querySelector(".canInp button");


minus.onclick = () => {
  if (numberDown.innerHTML == "0") {
    return false;
  }else {
    numberDown.innerHTML--;
  }
}

plus.onclick = () => {
  if (numberDown.innerHTML == "5") {
    return false;
  }else {
    numberDown.innerHTML++;
  }
}

let fixedProd = document.getElementById("currentNumProd");
let edsProd = document.getElementById("numInp");
let bessNum = document.getElementById("numCalc");

const calcFinal = eval(`${fixedProd.innerHTML} * ${edsProd.innerHTML}`);

btnToCart.onclick = () => {
  if (numberDown.innerHTML == "0") {
    return false;
  } else {
    numberCart.innerHTML = numberDown.innerHTML;
    cart.classList.remove("active");
    emptyField.style.display = "none";
    productField.style.display = "flex";
    btnCheckOut.style.display = "block";
    edsProd.innerHTML = numberCart.innerHTML;
    bessNum.innerHTML = "$" + calcFinal;
  }
}




let deleteBtn = document.querySelector('.delIcon');

deleteBtn.onclick = () => {
  productField.style.display = "none";
  btnCheckOut.style.display = "none";
  emptyField.style.display = "block";
  numberCart.innerHTML = "";
}




let numberCart = document.querySelector('.cart .numCart');
let emptyField = document.getElementById("empty");
let productField = document.querySelector('.showCart .productCart');
let btnCheckOut = document.querySelector('.showCart button');
// let cart = document.querySelector('.cart');


if (numberCart.innerHTML === "") {
  productField.style.display = "none";
  btnCheckOut.style.display = "none";
} else {
  emptyField.style.display = "none";
}




// prop start

let btnNextProp = document.querySelector(".btnOfNxtProp");

let btnPrevProp = document.querySelector(".btnOfPrvProp");


bgImg.onclick = () => {
  document.querySelector('.propBack').style.display = "flex";
}

document.querySelector('.closeProp').onclick = () => {
  document.querySelector('.propBack').style.display = "none";
}

let bgImgProp = document.querySelector('.imgsOfProp .mainImgPropPro img');
let smImgsProp = document.querySelectorAll('.othersPropImgs .imgMsProp');
let smImgsSrcProp = document.querySelectorAll('.othersPropImgs .imgMsProp .noneProp');

smImgsProp.forEach((smImgProp) => {
  smImgProp.onclick = () => {
    removeActiveSmImgsProp();
    smImgProp.classList.add('active');

    bgImgProp.src = smImgProp.children[0].innerHTML;


  }
})

function removeActiveSmImgsProp() {
  smImgsProp.forEach((smImgProp) => {
    smImgProp.classList.remove('active');
})
}

// slide of Prop

let slidesOfImgsProp = Array.from(document.querySelectorAll('.imgMsProp'));

let AllSlidesProp = slidesOfImgs.length;

let currentSlideProp = 1;

btnNextProp.onclick = nextSlideProp;
btnPrevProp.onclick = previousSlideProp;

function previousSlideProp() {
  if (currentSlideProp == 1) {
    console.log("work on -1");
    currentSlideProp = AllSlidesProp;
    checkNowslideProp();
  } else {
    console.log("work on --");
    currentSlideProp--;
    checkNowslideProp();
  }
}

function nextSlideProp() {
  if (currentSlideProp == AllSlidesProp) {
    console.log("work on all + 1");
    currentSlideProp = 1;
    checkNowslideProp();
  } else {
    console.log("work on ++");
    currentSlideProp++;
    checkNowslideProp();
  }
}
console.log(slidesOfImgsProp[currentSlideProp - 1]);
function checkNowslideProp() {

  removeAllActiveProp();

  slidesOfImgsProp[currentSlideProp - 1].classList.add('active');

  bgImgProp.src = slidesOfImgsProp[currentSlideProp - 1].children[0].innerHTML;
}


function removeAllActiveProp() {
  slidesOfImgsProp.forEach(function (img){
        img.classList.remove('active');
    })
}
