let images = document.querySelectorAll(".auto-width");
console.log(images);
let currentImage = 1;
images.forEach((image)=>{
    image.style.display = "none";
})

images[0].style.display = "block";

function automaticSlide()
{
    images[currentImage-1].style.display = "none";
    currentImage = currentImage+1;
    if (currentImage > images.length)
    {   
        currentImage = 1;
    }
    images[currentImage-1].style.display = "block";
}

setInterval(()=>{automaticSlide()} , 4000);



// var firstIndex=0;
// function automaticSlide()
// {
//     // setTimeout(automaticSlide,5000);
//     let imageindex;
//     let images = document.querySelectorAll('.auto-width');
//     console.log(images);
//     for(imageindex=0;imageindex<images.length;imageindex++)
//     {
//         images[imageindex].style.display = "none";
//     }
//     firstIndex++;
//     if(firstIndex > images.length)
//         firstIndex = 1;
//     images[firstIndex-1].style.display="block";
// }

// setInterval(()=>{automaticSlide()} , 3000);

