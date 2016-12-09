(function (global) {
  const UTILS = global.UTILS = {}

  function post (url, data) {
    return new global.Promise(function (resolve, reject) {
      const request = new global.XMLHttpRequest()
      request.open('POST', url, true)
      request.setRequestHeader('Content-Type', 'application/json')
      request.setRequestHeader('Accept', 'application/json')

      request.onreadystatechange = function () {
        if (request.readyState === global.XMLHttpRequest.DONE) {
          if (request.status < 400) {
            resolve(JSON.parse(request.responseText || '{}'))
          } else {
            reject(JSON.parse(request.responseText))
          }
        }
      }
      request.onerror = reject
      request.send(JSON.stringify(data))
    })
  }
  UTILS.post = post
})(window)
