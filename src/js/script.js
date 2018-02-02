'use strict'

var form = document.getElementById('form')

function validateFirstName (e) {
  var firstNameInput = document.getElementById('firstNameInput')
  var firstNameError = document.getElementById('firstNameError')

  // remove error class in case user resubmits with valid first name
  if (firstNameError.classList.contains('show')) {
    firstNameError.classList.remove('show')
  }

  if (firstNameInput.value.length !== 20) {
    firstNameError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validateLastName (e) {
  var lastNameInput = document.getElementById('lastNameInput')
  var lastNameError = document.getElementById('lastNameError')

  // remove error class in case user resubmits with valid last name
  if (lastNameError.classList.contains('show')) {
    lastNameError.classList.remove('show')
  }

  if (lastNameInput.value.length !== 20) {
    lastNameError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validateZipCode (e) {
  var zipCodeInput = document.getElementById('zipCodeInput')
  var zipCodeError = document.getElementById('zipCodeError')
  
  // reg expression for five digits in a row
  var validZip = /^\d{5}$/

  // remove error class in case user resubmits with valid zip code
  if (zipCodeError.classList.contains('show')) {
    zipCodeError.classList.remove('show')
  }

  if(!validZip.test(zipCodeInput.value)) {
    zipCodeError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validatePhoneNumber (e) {
  var phoneNumberInput = document.getElementById('phoneNumberInput')
  var phoneNumberError = document.getElementById('phoneNumberError')
  var validPhone = /\(\d{3}\)\s\d{3}-\d{4}/

  // remove error class in case user resubmits with valid phone number
  if (phoneNumberError.classList.contains('show')) {
    phoneNumberError.classList.remove('show')
  }

  if(!validPhone.test(phoneNumberInput.value)) {
    phoneNumberError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validateEmail (e) {
  var emailInput = document.getElementById('emailInput')
  var emailError = document.getElementById('emailError')
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  // remove error class in case user resubmits with valid email
  if (emailError.classList.contains('show')) {
    emailError.classList.remove('show')
  }

  if(!validEmail.test(emailInput.value)) {
    emailError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validateDisclaimer (e) {
  var disclaimerInput = document.getElementById('disclaimerInput')
  var disclaimerError = document.getElementById('disclaimerError')

  // remove error class in case user resubmits with disclaimer check/tick
  if (disclaimerError.classList.contains('show')) {
    disclaimerError.classList.remove('show')
  }

  if (!disclaimerInput.checked) {
    disclaimerError.classList.add('show')
    e.preventDefault()
    return false
  } else {
    return true
  }
}

function validateAllFields (e) {
  validateFirstName(e)
  validateLastName(e)
  validateZipCode(e)
  validatePhoneNumber(e)
  validateEmail(e)
  validateDisclaimer(e)
}

form.addEventListener('submit', validateAllFields)
