let search = document.querySelector('.search-box')
let searchic= document.querySelector('#search-icon')
searchic.onclick =() => {
    searchic.classList.toggle('active')
    search.classList.toggle('active')
    navbar.classList.remove('active')

}
let navbar = document.querySelector('.navbar')
document.getElementById('menu-icon').onclick =() => {

    navbar.classList.toggle('active')
    search.classList.remove('active')
    searchic.classList.remove('active')


}

let header= document.querySelector('header')

window.addEventListener('scroll', function(){
    header.classList.toggle('shadow', scrollY>0);
})
window.onscroll=function(){
    navbar.classList.remove('active')
    search.classList.remove('active')
}
   
