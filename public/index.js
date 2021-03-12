const loginButton = document.querySelector('.btn-login')
const userInput = document.querySelector('.user-input')
const passwordInput = document.querySelector('.password-input')
const checkUser = document.querySelector('.check.user')
const checkPassword = document.querySelector('.check.password')

loginButton.addEventListener('click', getLogin)
userInput.addEventListener('keyup', validUser)
passwordInput.addEventListener('keyup', validPassword)

function getLogin() {
  const modal = document.querySelector('.modal')

  if ( userInput.value != 'testuser' ) {
    userInput.style.background = 'rgb(230, 50, 50)'

    setTimeout(() => userInput.style.background = '#EEEEEE', 2000)
  }

  if ( passwordInput.value != 'mypassword' ) {
    passwordInput.style.background = 'rgb(230, 50, 50)'

    setTimeout(() => passwordInput.style.background = '#EEEEEE', 2000)
  
  }
  
  if ( userInput.value == 'testuser' && passwordInput.value == 'mypassword' ) {
    modal.hidden = false

    userInput.value = ""
    passwordInput.value = ""

    checkPassword.classList.remove('correct')
    checkUser.classList.remove('correct')

    setTimeout(() => {
      modal.hidden = true
    }, 4000)

    return true
  }
}


function validUser() {
  if ( userInput.value.length == 0 ) {
    checkUser.classList.remove('wrong')
    checkUser.classList.remove('correct')

  } else if ( userInput.value != 'testuser' ) {
  
    checkUser.classList.remove('correct')
    checkUser.classList.add('wrong')
    
  } else if ( userInput.value == 'testuser' ) {
    checkUser.classList.remove('wrong')
    checkUser.classList.add('correct')

  } 
}

function validPassword() {
  if ( passwordInput.value.length == 0 ) {
    checkPassword.classList.remove('wrong')
    checkPassword.classList.remove('correct')
  
  } else if ( passwordInput.value != 'mypassword' ) {
  
    checkPassword.classList.remove('correct')
    checkPassword.classList.add('wrong')
    
  } else if ( passwordInput.value == 'mypassword' ) {
    checkPassword.classList.remove('wrong')
    checkPassword.classList.add('correct')
  
  }
}