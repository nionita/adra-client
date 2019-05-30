<script>
  import { read, write } from './operations'
  export let api
	let message = ''
	let value = ''

	async function doWrite() {
    message = await write(api, value)
	}

	async function doRead() {
    const rr = await read(api)
    message = rr.message
    value = rr.value
  }
</script>

<div class="api">
	<div class="title">
		<h2>{api} API</h2>
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
	h2 {
		color: purple;
	}

	.api {
    margin: 2px;
    padding: 2px;
    border: 1px solid rgb(200, 200, 200);
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