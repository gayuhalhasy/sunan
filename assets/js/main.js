//show menu
const showMenu = (togleId, navId) => {
    const togle = document.getElementById(togleId),
    nav = document.getElementById(navId)

    //validate
    if(togle && nav){
        togle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-togle','nav-menu')

//remove menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//scroll
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHight
        const sectiontop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectiontop && scrollY <= sectiontop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ')').classList.add('action-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ')').classList.remove('action-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

//change background header
function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200)nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560)scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Slide Show
var slideIndex = 1;
showSlides(slideIndex);

// Next/Previus Control
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thumbnail Image Controler
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slide = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slide.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slide.length}
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active"
}