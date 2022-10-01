const fs = require('fs')

// WRITE
fs.writeFile('test.txt', 'Hello World!', (err) => {
  if (err) throw err
  console.log('File created!')
})

// writeFile will overwrite the file if it already exists.
// appendFile will append the text to the end of the file.

// READ
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// RENAME FILE
// fs.rename('test.txt', 'test2.txt', (err) => {
//   if (err) throw err
//   console.log('File Renamed!')
// })

// DELETE
// fs.unlink('test2.txt', (err) => {
//   if (err) throw err
//   console.log('File deleted!')
// })
