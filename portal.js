// const slides = document.querySelectorAll(".about > div")
// let index = 0;


// // const icrease = () => {
// //     slide()
// // }

// // slide.forEach((val, i) => {
// //     if((val.classList.contains("active"))){
// //         setInterval(() => {
// //             val.classList.toggle("active")
// //         }, 3000)
// //     }
// // })
// // const change = () => {
// // }

// var slideIndex = 1;
// showSlides(slideIndex);



// function plusSlides(n) {
//     showSlides(slideIndex += n)
//     // console.log('clicked');
// }

// setInterval(() => {
//     plusSlides(1)
//     }, 3000);
  
// // function currentSlide(n) {
// //     showSlides(slideIndex = n);
// //   }

// function showSlides(n) {
//     console.log(n);
//     var i;
//     // var slides = document.getElementsByClassName(".sec");
//     console.log(slides);
//     slides.forEach(element => {
//         if (n > element.length) {
//             slideIndex = 1
//         }if (n < 1) {
//             slideIndex = element.length
//         }
//     });
//     // var dots = document.getElementsByClassName("image_luma");
//     // var captionText = document.getElementById("caption");
    
//     //This is used to remove the active class from the large image
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     // This is used to remove the active class from the thumbnail
//     // for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");
//     // }
//     // Since our n starts from 1 upward we meed to substratct one from index for 
//     // us to access the exact element in the array
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     // captionText.innerHTML = dots[slideIndex-1].alt;
//   }

// showSlides(slideIndex)

setInterval(()=>{
    plusSlides(1)
}, 2000)


var slideIndex = 1;
// showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
    // console.log(slideIndex);
  }
  
// function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sec1");
    // var dots = document.getElementsByClassName("image_luma");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    //This is used to remove the active class from the large image
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // This is used to remove the active class from the thumbnail
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // Since our n starts from 1 upward we meed to substratct one from index for 
    // us to access the exact element in the array
    slides[slideIndex-1].style.display = "flex";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
    // console.log(slides);
  }

  const navbar = document.querySelector('.nav')

window.addEventListener('scroll',() =>{
    if(window.scrollY > 0){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
})

const links = document.querySelectorAll('.link')

links.forEach((value, index) => {
    value.addEventListener('click', () => {
        links.forEach(val => {
            val.classList.remove('active')
        })
        links[index].classList.add('active')
    })
})

const icon = document.querySelector('#ham-burger')
const list =  document.querySelector('.group2')

icon.addEventListener('click',() =>{
    list.classList.toggle('active')
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-times')
    }else{
        icon.classList.replace('fa-times', 'fa-bars')
    }
})
