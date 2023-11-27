class User {
    constructor(name, lastName, userName, email, password) {
        this.name = name,
        this.lastName = lastName,
        this.userName = userName,
        this.email = email,
        this.password = password
    }
}

const submitBtn = document.getElementById('submitButton');
const labelValidationName = document.getElementById('validationLabelName');
const labelValidationlastName = document.getElementById('validationLabellastName');
const labelValidationuserName = document.getElementById('validationLabeluserName');
const labelValidationEmail = document.getElementById('validationLabelEmail');
const labelValidationPassword = document.getElementById('validationLabelPassword')
const labelValidationrepeatPassword = document.getElementById('validationLabelrepeatPassword')

const user = new User();

const regexName = /^[A-Za-z\s]{3,40}$/;
const regexUsername = /^[A-Za-z\s]{6,20}$/;
const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,25}$/;

const validateFields = () => {
    const isNameValid = regexName.test(user.name);
    const isLastNameValid = regexName.test(user.lastName);
    const isEmailValid = regexEmail.test(user.email);
    const isUserNameValid = regexUsername.test(user.userName);
    const isPasswordValid = regexPass.test(user.password);
    const isRepeatPasswordValid = regexPass.test(user.repeatPassword);
  
    const validationSuccesfull = isNameValid && isLastNameValid && isEmailValid && isUserNameValid && isPasswordValid && isRepeatPasswordValid;
  
    return validationSuccesfull;
  }

const handleChange = (event) => {

    switch (event.target.id) {
        case 'name':
          if (!regexName.test(event.target.value)) {
            labelValidationName.className = 'text-danger d-inline'
            user.name = '';
            event.target.style.border = '2px solid red'
          } else {
            labelValidationName.className = 'd-none'
            event.target.style.border = '2px solid green'
            user.name = event.target.value.toLowerCase();
          }
          break;
        case 'lastName':
          if (!regexName.test(event.target.value)) {
            validationLabellastName.className = 'text-danger d-inline'
            user.lastName = '';
            event.target.style.border = '2px solid red'
          } else {
            event.target.style.border = '2px solid green'
            user.lastName = event.target.value.toLowerCase();
          }
          break
          case 'userName':
          if (!regexUsername.test(event.target.value)) {
            validationLabeluserName.className = 'text-danger d-inline'
            user.userName = '';
            event.target.style.border = '2px solid red'
          } else {
            event.target.style.border = '2px solid green'
            user.userName = event.target.value.toLowerCase()
          }
          break
        case 'email':
          if (!regexEmail.test(event.target.value)) {
            validationLabelEmail.className = 'text-danger d-inline'
            user.email = '';
            event.target.style.border = '2px solid red'
          } else {
            event.target.style.border = '2px solid green'
            user.email = event.target.value.toLowerCase()
          }
          break
        case 'password':
          if (!regexPass.test(event.target.value)) {
            validationLabelPassword.className = 'text-danger d-inline'
            user.password = '';
            event.target.style.border = '2px solid red'
          } else {
            event.target.style.border = '2px solid green'
            user.password = event.target.value
          }
          break
        case 'repeatPassword':
          if (user.password !== event.target.value) {
            validationLabelrepeatPassword.className = 'text-danger d-inline'
            user.repeatPassword = '';
            event.target.style.border = '2px solid red'
          } else {
            event.target.style.border = '2px solid green'
            user.repeatPassword = event.target.value
          }
          break
    }

    const validation = validateFields();

    if (validation) {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', 'true')
    }
}

const handleSubmit = (event) => {
  const saveUsers = JSON.parse(localStorage.getItem('users'));
  if (saveUsers) {
    saveUsers.push(user);
    const jsonUsers = JSON.stringify(saveUsers)
    localStorage.setItem('users', jsonUsers)
    window.location.href = './login.html'
  } else {
    let users = [];
    users.push(user);
    const jsonUsers = JSON.stringify(users)
    localStorage.setItem('users',jsonUsers)
    window.location.href = './login.html'
  }
}