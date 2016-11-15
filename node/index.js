const axios = require('axios')
const querystring = require('querystring')
const express = require('express')

const app = express()

const EVERYDAYHERO_URL = 'https://everydayhero-staging.com'
const REDIRECT_URI = 'http://localhost:8080/authorize/callback'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

app.get('/authorize', (req, res) => {
  const query = querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI
  })

  res.redirect(`${EVERYDAYHERO_URL}/oauth/authorize?${query}`)
})

app.get('/authorize/callback', (req, res) => {
  const { code } = req.query

  const query = querystring.stringify({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI
  })

  axios.post(`${EVERYDAYHERO_URL}/oauth/token?${query}`).then(({ data }) => {
    res.send(data)
  })
})

app.listen(8080)
