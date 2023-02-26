// Search area
const searchActivate = document.getElementById('search-activate');
const searchbtn = document.getElementById('search');
let searchInput = document.querySelector('.search-area input')
let searchArea = document.querySelector('.search-area');

searchActivate.addEventListener('click', () => {
    searchArea.classList.toggle('active')
});

searchbtn.addEventListener('click', () => {
    searchArea.classList.toggle('active')
    searchInput.value = ""
});


//Navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
});

var play = document.querySelector('.watch-trailer')


function toggle() {
    var trailer = document.querySelector('.trailer')
    var video = document.querySelector('.trailer video')
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause()
}

let btn = document.getElementById('eye');
let PasswordInput = document.getElementById('password');
let body = document.querySelector('body')

let showpassword = true
btn.addEventListener('click', () => {
    
    if (PasswordInput.type === "password") {
        btn.classList.remove('ri-eye-off-line');
        btn.classList.add('ri-eye-line');
        PasswordInput.type = "text";
    } else {
        btn.classList.remove('ri-eye-line');
        btn.classList.add('ri-eye-off-line');
        PasswordInput.type = "password";
    }

})