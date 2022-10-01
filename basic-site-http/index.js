const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const url = req.url
    if (url === '/') {
      fs.readFile('index.html', (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    } else if (url === '/about') {
      fs.readFile('about.html', (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    } else if (url === '/contact-me') {
      fs.readFile('contact-me.html', (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    } else {
      fs.readFile('404.html', (err, data) => {
        if (err) throw err
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    }
  })
  .listen(8080, () => {
    console.log('Server running on port 8080')
  })
