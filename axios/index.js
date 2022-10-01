const axios = require('axios')

// GET
axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => {
    const user = response.data
    console.log(user.name)
    console.log(user.email)
  })
  .catch((error) => {
    console.log(error)
  })

// POST
axios
  .post('https://jsonplaceholder.typicode.com/users', {
    id: 11,
    name: 'John Doe',
    email: 'johndoeg@email.com',
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })

// PUT
// same as POST, axios.put()

// DELETE
// same as POST, axios.delete()
