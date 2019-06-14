window.onload = function() {
  // Example code for a raw JS client implementation
  // This works only on modern browsers, like Chrome or Firefox
  const url = 'http://localhost:7200/api/id'

  // rfidwrite is the ID of the Write button
  // rfidfid is the ID of the element containing the generated ID from database
  document.getElementById('rfidwrite').onclick = ev => {
    const value = Number(document.getElementById('rfidfid').value)
    const body = { id: value }
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body)
    }
    const writeRequest = new Request(url)
    return fetch(writeRequest, myInit)
      .then(response => {
        if (!response.ok)
          throw new Error('HTTP error, status = ' + response.status)
        return response.json()
      })
      .then(json => {
        if (json.message !== 'done')
          throw json.message
      })
      .catch(e => {
        window.alert(`${e}`)
      })
  }
}
