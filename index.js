const body = document.body;
const slide = document.querySelectorAll(".slide");
const left = document.getElementById("left")
const right = document.getElementById("right")
let activeslide = 0;
function setBackgroundToslide(){
    body.style.backgroundImage = slide[activeslide].style.backgroundImage;
}

function setActiveSlide(){
    slide.forEach( e => e.classList.remove('active') )
    slide[activeslide].classList.add("active");
}

right.addEventListener('click',()=>{
    activeslide++;
    if(activeslide>slide.length-1)
    activeslide = 0;

    setBackgroundToslide();
    setActiveSlide();
})
setBackgroundToslide()
left.addEventListener('click',()=>{
    activeslide--;
    if(activeslide<0)
    activeslide = slide.length-1;

    setBackgroundToslide();
    setActiveSlide();
})


