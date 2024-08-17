function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === '' || password === '') {
        document.getElementById('loginError').innerText = 'Username/email and password are required';
        return false;
    }
    return true;
}

function validateSignupForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (email === '' || password === '' || confirmPassword === '') {
        document.getElementById('signupError').innerText = 'Email, password, and confirm password are required';
        return false;
    }
    if (password !== confirmPassword) {
        document.getElementById('signupError').innerText = 'Passwords do not match';
        return false;
    }
    return true;
}


function validate(){
    var email=document.getElementById('name').value;
}