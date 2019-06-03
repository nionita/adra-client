// Example code for a raw JS client implementation
// This works only on modern browsers, like Chrome or Firefox
const url = 'http://localhost:7200/api/id'

// writeid is the ID of the Write button
// genid is the ID of the element containing the generated ID from database
// status is the ID of a status (error, info) element
document.getElementById('writeid').onclick(ev => {
  const value = Number(document.getElementById('genid').value)
  const body = { id: value }
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const myInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)
  }
  const statusElement = document.getElementById('status')
  const writeRequest = new Request(url)
  return fetch(writeRequest, myInit)
    .then(response => {
      if (!response.ok)
        throw new Error('HTTP error, status = ' + response.status)
      return response.json()
    })
    .then(json => {
      // Style should be: green if 'done', red otherwise
      statusElement.value = json.message
    })
    .catch(e => {
      // Style should be red
      statusElement.value = `${e}`
    })
})

// readid is the ID of the Read button
// dbid is the ID of the element containing the database ID
// status is the ID of a status (error, info) element
document.getElementById('readid').onclick(ev => {
  const api = 'id'
  const dbidField = document.getElementById('dbid').value
  dbidField.value = ''
  const myInit = {
    method: 'GET',
  }
  const statusElement = document.getElementById('status')
  const readRequest = new Request(url)
  return fetch(readRequest, myInit)
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status)
      }
      return response.json()
    })
    .then(json => {
      if (api in json) {
        dbidField.value = json[api]
      } else throw(json.message)
    })
    .catch(e => {
      statusElement.value = `${e}`
    })
})