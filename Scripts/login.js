class User {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }
}

const email = document.getElementById('email');
const password = document.getElementById('password');

const user = new User();

const labelValidationPassword = document.getElementById('validationLabelPassword')

const validateFields = () => {
    const isEmailValid = regexEmail.test (user.email);
    const isPasswordValid = regexPass.test (user.password);

    const validationSuccesfull = isEmailValid && isPasswordValid;

    return validationSuccesfull;
}

const handleSubmit = (event) => {
    event.preventDefault();

    const arrayUsers = JSON.parse(localStorage.getItem('users'));
    const foundUser = arrayUsers.find(user => user.email === email.value);

    if (foundUser != null && foundUser.password === password.value) {
        event.target.style.border = '2px solid green'
        localStorage.setItem('authUser', JSON.stringify(foundUser))
        window.location.href = '../index.html'
    } else {
        validationLabelPassword.className = 'text-danger d-inline'
        user.password = '';
        event.target.style.border = '2px solid red'
    }

}