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
	<h2>{api} API</h2>
	<button on:click="{doRead}">Read</button>
	<input type="text" id="block" bind:value="{value}">
	<button on:click="{doWrite}">Write</button>
	<input type="text" id="message" disabled="true" value="{message}">
</div>

<style>
	.api {
    margin: 2px;
    padding: 0 2px;
    border: 1px solid rgb(200, 200, 200);
		display: grid;
		grid-gap: 3px;
		grid-template-columns: 6em auto 6em;
		grid-template-rows: repeat(3, 2.5em)
	}

	h2 {
		color: purple;
		grid-column: 1 / -1;
		margin: 0;
	}

	#message {
		grid-column: 1 / -1;
	}
</style>