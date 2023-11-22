class User {
    constructor(name, lastName, userName, email, password) {
        this.name = name,
        this.lastName = lastName,
        this.userName = userName,
        this.email = email,
        this.password = password
    }
}

const email = document.getElementById('email');
const password = document.getElementById('password');

const user = new User();

const submitBtn = document.getElementById('submitBtn');
const labelValidationEmail = document.getElementById('validationLabelEmail');
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
        alert('Ingresaste con exito :)')
        localStorage.setItem('authUser', JSON.stringify(foundUser))
    } else {
        validationLabelPassword.className = 'text-danger d-inline'
        user.password = '';
        event.target.style.border = '2px solid red'
    }

    const validation = validateFields();

    if (validation) {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', 'true')
    }
}