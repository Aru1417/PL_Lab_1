const display = document.querySelector(".display");

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







let storePrevious = 1;

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let select1 = document.getElementById('image1');
let select2 = document.getElementById('image2');
let select3 = document.getElementById('image3');

function start() {
    button1.classList.toggle('changeBackground');
    select1.style.display = 'block';
    select2.style.display = 'none';
    select3.style.display = 'none';
}

function changeImage(whichButton) {
    if (whichButton == 1) {
        if (storePrevious == 2) {
            button2.classList.toggle('changeBackground');
        }
        else if (storePrevious == 3) {
            button3.classList.toggle('changeBackground');
        }
        else {
            button1.classList.toggle('changeBackground');
        }
        button1.classList.toggle('changeBackground');
        select2.style.display = 'none';
        select3.style.display = 'none';
        select1.style.display = 'block';
        storePrevious = 1;
    }
    else if (whichButton == 2) {
        if (storePrevious == 2) {
            button2.classList.toggle('changeBackground');
        }
        else if (storePrevious == 3) {
            button3.classList.toggle('changeBackground');
        }
        else {
            button1.classList.toggle('changeBackground');
        }
        button2.classList.toggle('changeBackground');
        select1.style.display = 'none';
        select3.style.display = 'none';
        select2.style.display = 'block';
        storePrevious = 2;
    }
    else {
        if (storePrevious == 2) {
            button2.classList.toggle('changeBackground');
        }
        else if (storePrevious == 3) {
            button3.classList.toggle('changeBackground');
        }
        else {
            button1.classList.toggle('changeBackground');
        }
        button3.classList.toggle('changeBackground');
        select1.style.display = 'none';
        select2.style.display = 'none';
        select3.style.display = 'block';
        storePrevious = 3;
    }
}

start();

// var indexValue = 1;
// function slide_show(e){
//     showImg(indexValue += e);
// }

// function showImg(e)
// {
//     var i;
//     const img=document.querySelectorAll('img');

//     if(e > img.length)
//         indexValue = 1;
//     if(e < 1)
//         indexValue=img.length;

//     for(i=0;i<img.length;i++)
//     {
//         img[i].style.display = "none";
//     }
//     img[i].style.display = "block";
// }


// var slider_img = document.querySelector('.slider-img');
// var images = ['product img4.jpg','product img5.jpg'];

// var i=0; // current image index

// function prev()
// {
//     if(i <= 0)
//         i = images.length;
//         i--;
//         return setImg();
// }

//     function next()
//     {
//         if(i >= images.length-1)
//         i = -1;
//         i++;
//         return setImg();
//     }

//     function setImg()
//     {
//         return slider_img.setAttribute('src','images/'+images[i]);
//     }

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


// function Alert()
// {
//     alert("Your Feedback has been received ");
// }

// let arr = [];
// function add()
// {
//     arr.push({rating: starCountFinal , review: document.getElementById("fd").value});

// }

// function addToArray()
// {
//     // console.log(arr);
//     // document.querySelector(".feedback").innerText = "";
//     stars.forEach((star , index)=>{
//         if (index < starCountFinal)
//         {
//             star.remove("active");
//         }
//     });
//     // refreshlist();
//     // setdata();
//     // Alert();
// }


// function refreshlist()
// {
//     console.log(`refresh list called`);
//     //removing all the children first
//     let obj = document.querySelector('.display');

//     while(obj.lastChild) {
//         obj.lastChild.remove();//removee the last child of "ele"
//     }

//     // putting all the elements from array
//     if (arr.length == 0)
//     {
//         let noElement = document.createElement("p");
//         noElement.innerText = `No reviews`;
//         display.appendChild(noElement);
//         // setdata();
//         return;
//     }

//     arr.forEach((ele)=>{
//         let element = document.createElement("p");
//         element.innerText =`Rating : ${ele.rating} Review : ${ele.review}`;
//        display.appendChild(element);   
//     //    setdata();
//     });
    
// }

// refreshlist();

// function star1(){
//     let component = document.querySelectorAll('.star1 i');

//     for(let i=0;i<starCountFinal;i++)
//     {
//          component.classList.add("active");
//     }
    
// }

function starsCreation(element){
    for(var i=0;i<5;i++)
    {
        // var div = document.createElement('div');
        // div.classList.add(`star`);
        element.innerHTML = `${element.innerHTML} <i class="fa-solid fa-star "></i>`;
        // element.appendChild(div);
    }
}

function paintstars(){
    let divstar = document.querySelectorAll(".feedback-display:last-child i");
    console.log(divstar);
    divstar.forEach((star,index)=>{
        if (index < starCountFinal)
        {
            star.classList.add("changeColor");
        }
    });
}

function setdata()
{
    var divele = document.createElement("div");
    divele.classList.add("feedback-display");
    display.appendChild(divele);

    var element = document.createElement("div");
    element.classList.add("divstars");
    starsCreation(element);
    divele.appendChild(element);
    paintstars();
    
    var p = document.createElement("p");
    p.classList.add("feedback-area");
    p.innerHTML =  document.getElementById("fd").value;
    divele.appendChild(p);
    console.log(element);
    // console.log(element);
    // addToArray();

    document.getElementById("fd").value ="";
    localStorage.setItem("SaveData",display.innerHTML);
    getdata();
}

function getdata()
{
    display.innerHTML = localStorage.getItem("SaveData");
}


// localStorage.clear();

//  popup

let popup = document.getElementById("popup");

function openPopup()
{
    let obj = document.querySelector(".overlay");
    obj.classList.add("toggleDisplay");
    setdata();
    popup.classList.add("open-popup");
}

function closePopup()
{
    let obj = document.querySelector(".overlay");
    obj.classList.remove("toggleDisplay");
    popup.classList.remove("open-popup");
    getdata();
}

getdata();