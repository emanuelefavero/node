const express = require('express')
const app = express()

// Middleware - logs various request infos every time there is a new request
const myLogger = (req, res, next) => {
  console.log('Request IP: ' + req.ip)
  console.log('Request Method: ' + req.method)
  console.log('Request date: ' + new Date())
  console.log('Request URL: ' + req.originalUrl)
  console.log('Request Path: ' + req.path)
  console.log('Request Protocol: ' + req.protocol)
  console.log('Request Host: ' + req.hostname)
  console.log('Request Subdomains: ' + req.subdomains)
  console.log('Request is XHR: ' + req.xhr)
  console.log('Request is Secure: ' + req.secure)
  console.log('Request is Fresh: ' + req.fresh)
  console.log('Request is Stale: ' + req.stale)
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
