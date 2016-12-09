(function (global) {
  'use strict'

  const SIGN_IN_URL = `${global.ENV.EVERYDAYHERO_URL}/api/v2/authentication/sign_in`

  const form = global.document.getElementById('sign-in-form')
  const result = global.document.getElementById('result')

  const emailInput = form.querySelector('[name="user[email]"]')
  const passwordInput = form.querySelector('[name="user[password]"]')

  form.onsubmit = function (event) {
    event.preventDefault()

    const email = emailInput.value
    const password = passwordInput.value

    const data = {
      client_id: global.ENV.CLIENT_ID,
      user: {
        email,
        password
      }
    }

    global.UTILS.post(SIGN_IN_URL, data).then(function (response) {
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

