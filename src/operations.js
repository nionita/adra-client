const url_base = 'http://localhost:7200/api/'

const write = (api, value) => {
  console.log('Want to write', value)
  const body = api === 'id' ? { id: Number(value) } : { block: value }
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const myInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)
  }
  const url = url_base + api
  const writeRequest = new Request(url)
  return fetch(writeRequest, myInit)
    .then(response => {
      console.log(response)
      if (!response.ok)
        throw new Error('HTTP error, status = ' + response.status)
      return response.json()
    })
    .then(json => {
      console.log(json)
      return JSON.stringify(json)
    })
    .catch(e => {
      console.log('Exception in fetch:', e)
      return `${e}`
    })
}

const read = api => {
  let value = ''
  const myInit = {
    method: 'GET',
  }
  const url = url_base + api
  const readRequest = new Request(url)
  return fetch(readRequest, myInit)
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status)
      }
      return response.json()
    })
    .then(json => {
      console.log(json)
      const message = JSON.stringify(json)
      if (api in json) {
        value = json[api]
      }
      return { message, value }
    })
    .catch(e => {
      console.log('Exception in fetch:', e)
      const message = `${e}`
      return { message, value }
    })
}

export { read, write }