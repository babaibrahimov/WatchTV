const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const showpasswordButton = document.getElementById('eye');
const showPasswordConfirmButton = document.getElementById('eye-confirm');

let showPassword = true
let showPasswordConfirm = true

showpasswordButton.addEventListener('click', () => {
    
    if (password.type === "password") {
        showpasswordButton.classList.remove('ri-eye-off-line');
        showpasswordButton.classList.add('ri-eye-line');
        password.type = "text";
    } else {
        showpasswordButton.classList.remove('ri-eye-line');
        showpasswordButton.classList.add('ri-eye-off-line');
        password.type = "password";
    }
});

showPasswordConfirmButton.addEventListener('click', () => {
    if (passwordConfirm.type === "password") {
        showPasswordConfirmButton.classList.remove('ri-eye-off-line');
        showPasswordConfirmButton.classList.add('ri-eye-line');
        passwordConfirm.type = "text";
    } else {
        showPasswordConfirmButton.classList.remove('ri-eye-line');
        showPasswordConfirmButton.classList.add('ri-eye-off-line');
        passwordConfirm.type = "password";
    }
})