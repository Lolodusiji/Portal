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
