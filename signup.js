const error1 = document.querySelector('.err-msg1')
const error2 = document.querySelector('.err-msg2')
const error3 = document.querySelector('.err-msg3')
const error4 = document.querySelector('.err-msg4')
const error5 = document.querySelector('.err-msg5')
const InputX = document.querySelector('.inputs1')
const Inputx = document.querySelector('.inputs2')
let Inputb= document.querySelector('.birthdaytime')
let InputR = document.querySelector('.input1')
let Inputr = document.querySelector('.input2')
const passW = document.querySelector('.pass')
const passw = document.querySelector('.pass1')

// const input = document.querySelector('.input3')
const form = document.querySelector('.form')
const genform = document.querySelector('form')
const wrap = document.querySelector('.wrapper')
const flex = document.querySelector('.flex-button')
const button = document.querySelector('.input5')


InputX.addEventListener('blur', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(InputX.value)) {
        error1.style.display = 'block'
        InputX.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error1.style.display = 'none'
        InputX.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})


Inputx.addEventListener('blur', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(Inputx.value)) {
        error2.style.display = 'block'
        Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error2.style.display = 'none'
        Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

Inputb.addEventListener('blur', () => {
    if(Inputb = ''){
        error3.style.display = 'block'
        Inputb.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

passW.addEventListener('blur', () => {
    const regex = /([A-Za-z]){5,10}/;
    if(!regex.test(passW.value)) {
        console.log(passW);
        error4.style.display = 'block'
        passW.style.borderColor = 'hsl(0, 100%, 66%)'
    } else {
        error4.style.display = 'none'
        passW.style.borderColor = 'hsl(0, 0%, 59%)'
    }
})

passw.addEventListener('keyup', () => {
    if(passw.value !== passW.value) {
        error5.style.display = 'block'
        passw.style.borderColor = 'hsl(0, 100%, 66%)'
        console.log('not the same');
    } else if (passw.value === passW.value) {
        error5.style.display = 'none'
        passw.style.borderColor = 'hsl(0, 0%, 59%)'
        console.log('Its the same');
    } 
    
})


genform.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log("sub");
    if(InputX.value === '' || Inputx.value === '' || Inputb.value === '' || InputR.value === '' || Inputr.value === '' || passW.value === '' || passw.value === ''){
        error1.style.display = 'block'
        error2.style.display = 'block'
        error3.style.display = 'block'
        error4.style.display = 'block'
        error5.style.display = 'block'
        InputX.style.borderColor = 'hsl(0, 100%, 66%)'
        Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
        Inputb.style.borderColor = 'hsl(0, 100%, 66%)'
        InputR.style.borderColor = 'hsl(0, 100%, 66%)'
        Inputr.style.borderColor = 'hsl(0, 100%, 66%)'
        passW.style.borderColor = 'hsl(0, 100%, 66%)'
        passw.style.borderColor = 'hsl(0, 100%, 66%)'


        setTimeout(() => {
        error1.style.display = 'none'
        error2.style.display = 'none'
        error3.style.display = 'none'
        error4.style.display = 'none'
        error5.style.display = 'none'

        InputX.style.borderColor = 'hsl(0, 0%, 59%)'
        Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
        Inputb.style.borderColor = 'hsl(0, 0%, 59%)'
        InputR.style.borderColor = 'hsl(0, 0%, 59%)'
        Inputr.style.borderColor = 'hsl(0, 0%, 59%)'
        passW.style.borderColor = 'hsl(0, 0%, 59%)'
        passw.style.borderColor = 'hsl(0, 0%, 59%)'
        }, 3000);
    } else if (InputX.value !== '' && Inputx.value !== '' && Inputb.value !== '' && InputR.value !== '' && Inputr.value !== '' && passW.value !== '' && passw.value !== ''){
        console.log(wrap.innerHTML);
        genform.style.display = 'none';
        wrap.style.display = 'block'
        flex.style.display = 'none'
    }

   
        // setTimeout(() => {
        //     wrap.style.display = 'block'
        //     input.style.display = 'block'
        //     InputX.value = '' 
        //     Inputx.value = '' 
        //     Inputb.value = '' 
        //     InputR.value = ''
        //     Inputr.value = ''
        //     error1.style.display = 'none'
        //     error2.style.display = 'none'
        //     error3.style.display = 'none'
        //     error4.style.display = 'none'
        //     error5.style.display = 'none'
        //     InputX.style.borderColor = 'hsl(0, 0%, 59%)'
        //     Inputx.style.borderColor = 'hsl(0, 0%, 59%)'
        //     Inputb.style.borderColor = 'hsl(0, 0%, 59%)'
        //     InputR.style.borderColor = 'hsl(0, 0%, 59%)'
        //     Inputr.style.borderColor = 'hsl(0, 0%, 59%)'
        //     passW.style.borderColor = 'hsl(0, 0%, 59%)'
        //     passw.style.borderColor = 'hsl(0, 0%, 59%)'
        // }, 5000);
    })

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


 // input.addEventListener('submit',(e)=>{
    //     e.preventDefault()
    //     if(InputX.value === '' || Inputx.value === '' || Inputb.value === '' || InputR.value === '' || Inputr.value === '' || passW.value === '' || passw.value === ''){
    //     error1.style.display = 'block'
    //     error2.style.display = 'block'
    //     error3.style.display = 'block'
    //     error4.style.display = 'block'
    //     error5.style.display = 'block'
    //     InputX.style.borderColor = 'hsl(0, 100%, 66%)'
    //     Inputx.style.borderColor = 'hsl(0, 100%, 66%)'
    //     Inputb.style.borderColor = 'hsl(0, 100%, 66%)'
    //     InputR.style.borderColor = 'hsl(0, 100%, 66%)'
    //     Inputr.style.borderColor = 'hsl(0, 100%, 66%)'
    //     passW.style.borderColor = 'hsl(0, 100%, 66%)'
    //     passw.style.borderColor = 'hsl(0, 100%, 66%)'
    //     }
    
    // })
    // console.log('Its done');