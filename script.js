const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const signupForm = document.getElementById('signup-form');

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.tooShort) {
        passwordError.textContent = 'Password should be at least 8 characters long.';
    } else if (passwordInput.validity.patternMismatch) {
        passwordError.textContent = 'Password should contain at least one lowercase letter, one uppercase letter, one digit, and one special character.';
    } else {
        passwordError.textContent = '';
    }
});