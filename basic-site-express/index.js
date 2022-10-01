const express = require('express')
const app = express()

app.get('/', (req, res) => res.status(200).sendFile(__dirname + '/index.html'))
app.get('/about', (req, res) =>
  res.status(200).sendFile(__dirname + '/about.html')
)
app.get(['/contact-me', '/contact', '/contacts'], (req, res) =>
  res.status(200).sendFile(__dirname + '/contact-me.html')
)
app.get('*', (req, res) => res.status(404).sendFile(__dirname + '/404.html'))

const PORT = 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
