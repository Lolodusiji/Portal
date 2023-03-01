let InputX = document.querySelector('.inputs')
let Inputx = document.querySelector('.inputp')
const form = document.querySelector('form')
const form2 = document.querySelector('.form')
const button = document.querySelector('.input3')
const error1 = document.querySelector('.err-msg1')
const error2 = document.querySelector('.err-msg2')
const wrap = document.querySelector('.wrapper')
const flex = document.querySelector('.flex-button')

// console.log(InputX,Inputx,form,button,Error1,Error2);

InputX.addEventListener('keyup', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(InputX.value)) {
        error1.style.display = 'block'
        InputX.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error1.style.display = 'none'
        InputX.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})
// console.log(InputX);

Inputx.addEventListener('keyup', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(Inputx.value)) {
        error2.style.display = 'block'
        Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error2.style.display = 'none'
        Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    if(InputX.value === '' || Inputx.value === ''){
        error1.style.display = 'block'
        error2.style.display = 'block'
        InputX.style.borderColor = 'hsl(0, 100%, 66%)'
        Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
        console.log(e);
        setTimeout(() => {
        error1.style.display = 'none'
        error2.style.display = 'none'
        InputX.style.borderColor = 'hsl(0, 0%, 59%)'
        Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
        }, 3000);
    }else if (InputX.value !== '' && Inputx.value !== ''){
        console.log(wrap.innerHTML);
        form.style.display = 'none';
        wrap.style.display = 'block'
        flex.style.display = 'none'
    }})

    // if (form.style.display==='none') {
    //     console.log(wrap.innerHTML);
    //     wrap.style.display = 'block'
    //     flex.style.display = 'none'
    //     form.style.display = 'none'
    // }
    //     setTimeout(() => {
    //         wrap.style.display = 'block'
    //         form.style.display = 'none'
    //         flex.style.display = 'none'
    //         InputX.value = 'none' 
    //         Inputx.value = 'none' 
    //         error1.style.display = 'none'
    //         error2.style.display = 'none'
    //         InputX.style.borderColor = 'hsl(0, 0%, 59%)'
    //         Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
    //     }, 5000);
    // input.addEventListener('submit',(e)=>{
    //     e.preventDefault()
    //     if(InputX.value === '' || Inputx.value === '' ){
    //     error1.style.display = 'block'
    //     error2.style.display = 'block'
    //     InputX.style.borderColor = 'hsl(0, 100%, 66%)'
    //     Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
    //     }
// })

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