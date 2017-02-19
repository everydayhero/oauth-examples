(function (global) {
  'use strict'

  const RESET_PASSWORD_URL = `${global.ENV.EVERYDAYHERO_URL}/api/v2/authentication/reset_password`

  const form = global.document.getElementById('sign-in-form')
  const result = global.document.getElementById('result')

  const emailInput = form.querySelector('[name="user[email]"]')

  form.onsubmit = function (event) {
    event.preventDefault()

    const email = emailInput.value

    const data = {
      client_id: global.ENV.CLIENT_ID,
      email
    }

    global.UTILS.post(RESET_PASSWORD_URL, data).then(function (response) {
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

