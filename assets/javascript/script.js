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

let profileBox = document.querySelector('.profile');
let profileClose = document.getElementById('profile-close');
let user = document.getElementById('user');

function showprofile() {
    profileBox.classList.toggle('active');
}
user.addEventListener('click', () => {
    profileBox.classList.add('active')
});

profileClose.addEventListener('click', () => {
    profileBox.classList.remove('active')
});

// Search area
const searchActivate = document.getElementById('search-activate');
const searchbtn = document.getElementById('search');
let searchInput = document.querySelector('.search-area input')
let searchArea = document.querySelector('.search-area');
let catagories = document.querySelector('.catagories');

searchActivate.addEventListener('click', () => {
    searchArea.classList.toggle('active')
    catagories.classList.toggle('active')
});

searchbtn.addEventListener('click', () => {
    searchArea.classList.toggle('active')
    catagories.classList.toggle('active')
    searchInput.value = ""
});



let suggestionRightButton = document.getElementById('btn-suggestions-right');
let suggestionLeftButton = document.getElementById('btn-suggestions-left');
let forChildrenRightButton = document.getElementById('btn-for-childrens-right');
let forChildrenLeftButton = document.getElementById('btn-for-childrens-left');
let sportRightButton = document.getElementById('btn-sport-right');
let sportLeftButton = document.getElementById('btn-sport-left');
let comedyRightButton = document.getElementById('btn-comedy-right');
let comedyLeftButton = document.getElementById('btn-comedy-left');
let suggestionScrollArea = document.querySelector('.suggestion-films');
let forChildrenScrollArea = document.querySelector('.films-for-childrens');
let sportScrollArea = document.querySelector('.sport-films');
let comedyScrollArea = document.querySelector('.comedy-films');

suggestionRightButton.addEventListener('click', () => {
    suggestionScrollArea.scrollLeft += 450
});

suggestionLeftButton.addEventListener('click', () => {
    suggestionScrollArea.scrollLeft -= 450
});

forChildrenRightButton.addEventListener('click', () => {
    forChildrenScrollArea.scrollLeft += 450
});

forChildrenLeftButton.addEventListener('click', () => {
    forChildrenScrollArea.scrollLeft -= 450
});

sportRightButton.addEventListener('click', () => {
    sportScrollArea.scrollLeft += 450
});

sportLeftButton.addEventListener('click', () => {
    sportScrollArea.scrollLeft -= 450
});

comedyRightButton.addEventListener('click', () => {
    comedyScrollArea.scrollLeft += 450
});

comedyLeftButton.addEventListener('click', () => {
    comedyScrollArea.scrollLeft -= 450
});
