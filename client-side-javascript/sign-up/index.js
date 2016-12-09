(function (global) {
  'use strict'

  const SIGN_UP_URL = `${global.ENV.EVERYDAYHERO_URL}/api/v2/authentication/sign_up`

  const form = global.document.getElementById('sign-up-form')
  const result = global.document.getElementById('result')

  const countryInput = form.querySelector('[name="user[country]"]')
  const emailInput = form.querySelector('[name="user[email]"]')
  const passwordInput = form.querySelector('[name="user[password]"]')
  const nameInput = form.querySelector('[name="user[name]"]')
  const phoneInput = form.querySelector('[name="user[phone]"]')

  form.onsubmit = function (event) {
    event.preventDefault()

    const country = countryInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const name = nameInput.value
    const phone = phoneInput.value

    const data = {
      client_id: global.ENV.CLIENT_ID,
      country,
      user: {
        email,
        password,
        name,
        phone
      }
    }

    global.UTILS.post(SIGN_UP_URL, data).then(function (response) {
      result.classList.remove('error')
      result.classList.add('success')
      result.innerHTML = JSON.stringify(response, null, 2)
    }).catch(function (error) {
      result.classList.remove('success')
      result.classList.add('error')
      result.innerHTML = JSON.stringify(error, null, 2)
    })
  }
})(window)

