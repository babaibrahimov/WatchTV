const changeProfile = document.getElementById('change-profile');
const saveProfile = document.getElementById('save-profile');
const closeProfile = document.getElementById('close-profile');
let changeProfileArea = document.querySelector('.change-profile-area');

function profileChange() {
    changeProfileArea.classList.toggle('active');
}

changeProfile.addEventListener('click', profileChange)
saveProfile.addEventListener('click', profileChange);
closeProfile.addEventListener('click', profileChange);

const changePassword = document.getElementById('change-password');
const savePassword = document.getElementById('save-password');
const closePassword = document.getElementById('close-password');
const changePasswordArea = document.querySelector('.change-password-area');
const passwordInput = document.querySelectorAll('.change-password-area input[type="password"]')

function passwordChange() {
    changePasswordArea.classList.toggle('active');
    for(let i = 0; i < passwordInput.length; i++) {
        passwordInput[i].value = "";
    }
}

changePassword.addEventListener('click', passwordChange);
savePassword.addEventListener('click', passwordChange);
closePassword.addEventListener('click', passwordChange);


const likedMovies = document.getElementById('liked-movies');
const savedMovies = document.getElementById('saved-movies');
const downloadMovies = document.getElementById('download-movies');

let likedArea = document.querySelector('.liked-area');
let savedArea = document.querySelector('.saved-area');
let downloadArea = document.querySelector('.download-area');

likedMovies.addEventListener('click', () => {
    likedArea.classList.toggle('active');
    savedArea.classList.remove('active');
    downloadArea.classList.remove('active');
    likedMovies.classList.toggle('active');
    savedMovies.classList.remove('active');
    downloadMovies.classList.remove('active');
});

savedMovies.addEventListener('click', () => {
    savedArea.classList.toggle('active');
    likedArea.classList.remove('active');
    downloadArea.classList.remove('active');
    savedMovies.classList.toggle('active');
    likedMovies.classList.remove('active');
    downloadMovies.classList.remove('active');
});

downloadMovies.addEventListener('click', () => {
    downloadArea.classList.toggle('active');
    savedArea.classList.remove('active');
    likedArea.classList.remove('active');
    downloadMovies.classList.toggle('active');
    savedMovies.classList.remove('active');
    likedMovies.classList.remove('active');
});



