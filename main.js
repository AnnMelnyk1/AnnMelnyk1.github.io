// burger-menu

const burgerIcon = document.querySelector('.burger-icon'),
menu = document.querySelector('.nav-menu .nav-list'),
closeElement = document.querySelectorAll('.nav-list li a');

burgerIcon.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeElement.forEach(item => {
        item.addEventListener('click', () => {
            menu.style.display = 'none';
        })
    });
});

// Show NavBar

const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}

// Remove NavBar

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Active Color

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink))

// Change Header Background When Scroll Down

function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 200){
        scrollHeader.classList.add('scroll-header')
    }
    else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

var count = 0;
var incrementBtn = document.getElementById("increment-btn");
var cartCount = document.getElementById("cart-count");

incrementBtn.addEventListener("click", function() {
  count++;
  cartCount.innerHTML = count;
});


