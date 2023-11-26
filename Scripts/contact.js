class User {
    constructor(email, password, comment) {
        this.email = email,
        this.password = password
    }
}

const email = document.getElementById('Email');
const password = document.getElementById('Password');

const submitBtn = document.getElementById('submitBtn');

const labelValidationPassword = document.getElementById('labelValidationPassword')

const validateFields = () => {
    const isEmailValid = regexEmail.test(user.email);
    const isPasswordValid = regexPass.test(user.password);

    const validationSuccesfull = isEmailValid && isPasswordValid;

    return validationSuccesfull;
}

const handleSubmit = (event) => {

    event.preventDefault();

    const arrayUsers = JSON.parse(localStorage.getItem('users'));
    const foundUser = arrayUsers.find(user => user.email === email.value) 

    if (foundUser != null && foundUser.password === password.value) {
        alert('Recibimos tu mensaje. Un miembro de nuestro equipo se comunicara a la brevedad. :)')
        localStorage.setItem('authUser', JSON.stringify(foundUser))
    } else {
        validationLabelPassword.className = 'text-danger d-inline'
        user.password = '';
        event.target.style.border = '2px solid red'
    }

}