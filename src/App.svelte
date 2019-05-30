<script>
	let message = ''
	let value = ''

	function doWrite() {
		console.log('Want to write', value)
		const myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')
		const myInit = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({ id: Number(value) })
		}
		const writeRequest = new Request('http://localhost:7200/api/write')
		fetch(writeRequest, myInit)
			.then(response => {
				console.log(response)
				if (!response.ok)
					throw new Error('HTTP error, status = ' + response.status)
				return response.json()
			})
			.then(json => {
				console.log(json)
				message = JSON.stringify(json)
			})
			.catch(e => {
				console.log('Exception in fetch:', e)
				message = toString(e)
			})
	}

	function doRead() {
		const myInit = {
			method: 'GET',
		}
		const readRequest = new Request('http://localhost:7200/api/read')
		fetch(readRequest, myInit)
			.then(response => {
				console.log(response)
				if (!response.ok) {
					throw new Error('HTTP error, status = ' + response.status)
				}
				return response.json()
			})
			.then(json => {
				console.log(json)
				message = JSON.stringify(json)
				if ('id' in json) {
					value = json.id
				}
			})
			.catch(e => {
				console.log('Exception in fetch:', e)
				message = toString(e)
			})
	}
</script>

<div class="content">
	<div class="title">
		<h1>ADRA Client</h1>
	</div>
	<div class="text">
		<div class="group">
			<button on:click="{doRead}">Read</button>
			<input type="text" id="block" bind:value="{value}">
			<button on:click="{doWrite}">Write</button>
		</div>
		<div class="message">
			<input type="text" id="message" disabled="true" value="{message}">
		</div>
	</div>
</div>

<style>
	h1 {
		color: purple;
	}

	.content {
		width: 80%;
		margin: auto;
	}

	.group {
		display: flex;
	}

	.text, .title {
		width: 100%;
		/* margin: auto; */
	}

	#block {
		width: 80%;
	}

	#message {
		width: 100%;
	}
</style>