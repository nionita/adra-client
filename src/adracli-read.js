window.onload = function() {
  // Example code for a raw JS client implementation
  // This works only on modern browsers, like Chrome or Firefox
  const url = 'http://localhost:7200/api/id'

  // rfidread is the ID of the Read button
  // rfidid is the ID of the element containing the database ID
  document.getElementById('rfidread').onclick = ev => {
    const api = 'id'
    const dbidField = document.getElementById('rfidfid')
    dbidField.value = ''
    const myInit = {
      method: 'GET',
    }
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
        window.alert(`${e}`)
      })
  }
}