let targetURL = 'https://reqres.in/api/users/23'
// targetURL = 'https://erichepperle.com/blog/feed/' // Blocked by CORS

fetch(targetURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))



// #GOTCHA: Fetch always succeeds unless there is network error.
// Inside response check to see if response OK

// #GOTCHA: Make sure you set header to JSON content type, and
// make sure you JSON.stringify the body to send to server
