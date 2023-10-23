let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else{
        document.body.classList.remove('active');
    }
};

const slider = document.querySelector('.slider');
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= 5) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function showSlide(index) {
    const slidePosition = -index * 20;
    slider.style.transform = `translateX(${slidePosition}%)`;
}

setInterval(nextSlide, 5000);

showSlide(slideIndex);

//activar el menú desplegable
const dropdownButton = document.getElementById('dropdown-btn');
const dropdownContent = document.getElementById('dropdown1');

dropdownContent.style.display = 'none'; //no activarlo al iniciar

dropdownButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Cerrar si se hace clic en otro lugar
document.addEventListener('click', (event) => {
    if (event.target !== dropdownButton && event.target !== dropdownContent) {
        dropdownContent.style.display = 'none';
    }
});


