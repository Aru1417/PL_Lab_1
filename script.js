
// ------------------------------- Saurabh ------------------------------------- // 

let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

let flag = true;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Initial slide
function startSlide() {
    document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
    document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
    document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');

}


// Left arrow click
arrowLeft.addEventListener("click", function () {
    document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
const rightSlide = function () {
    if (flag == true) {
        document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');
    }
    else
        flag = true;
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
}
arrowRight.addEventListener("click", rightSlide);

startSlide();

setInterval(() => { rightSlide() }, 4000);

function targetSlide(no) {
    document.getElementById(`btn${current + 1}`).classList.toggle('util-shadow');
    flag = false;
    current = no - 1;
    rightSlide();
}

function targetVideo() {
    let vidTag = document.getElementById('101');
    vidTag.scrollIntoView();
    let vid1 = document.getElementById('vid1');
    vid1.play();
}

function toggleMute() {
    let video = document.getElementById('vid1');
    video.muted = !video.muted;
}

function playVideo() {
    let vid1 = document.getElementById('vid1');
    vid1.play();
}
function pauseVideo() {
    let vid1 = document.getElementById('vid1');
    vid1.pause();
}


// ------------------------------- Saurabh ------------------------------------- /

// <-------------------------------------------------- Product Image Description ----------------------------------------------------->

var indexValue = 1;
function slide_show(e){
    showImg(indexValue += e);
}

function showImg(e)
{
    var i;
    const img=document.querySelectorAll('img');

    if(e > img.length)
        indexValue = 1;
    if(e < 1)
        indexValue=img.length;

    for(i=0;i<img.length;i++)
    {
        img[i].style.display = "none";
    }
    img[i].style.display = "block";
}

// <-------------------------------------------------------- Product Review -------------------------------------------------------->

let starCountFinal = 0;
const stars = document.querySelectorAll(".star i");

// Loop through stars

stars.forEach((star,index1)=>{
    let starCount = 0;
    star.addEventListener("click",(event)=>{        
        stars.forEach((star,index2)=>{

            console.log(event);
            if (index1 >= index2){
                star.classList.add("active");
                starCount = starCount + 1;
            }
            else
                star.classList.remove("active");
        }); 
        starCountFinal = index1 + 1;
    });
});


function Alert()
{
    alert("Your Feedback has been received ");
}

let arr = [];

function addToArray()
{
    arr.push({rating: starCountFinal , review: document.getElementById("fd").value});
    console.log(arr);
    document.querySelector(".feedback").innerText = "";
    stars.forEach((star , index)=>{
        if (index < starCountFinal)
        {
            star.remove("active");
        }
    });
    refreshlist();
    Alert();
}

function refreshlist()
{
    console.log(`refresh list called`);
    //removing all the children first
    let obj = document.querySelector('.display');

    while(obj.lastChild) {
        obj.lastChild.remove();//removee the last child of "ele"
    }

    // putting all the elements from array
    const display = document.querySelector(".display");
    if (arr.length == 0)
    {
        let noElement = document.createElement("p");
        noElement.innerText = `No reviews`;
        display.appendChild(noElement);
        return;
    }

    arr.forEach((ele)=>{
        let element = document.createElement("p");
        element.innerText =`Rating : ${ele.rating} Review : ${ele.review}`;
        display.appendChild(element);
    });
}

refreshlist();