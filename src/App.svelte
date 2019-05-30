<script>
	import API from './API.svelte'
</script>

<div class="content">
	<div class="title">
		<h1>ADRA Web Client</h1>
	</div>
	<API api="id"/>
	<API api="block"/>
</div>

<style>
	h1 {
		color: purple;
	}

	.content {
		width: 80%;
		margin: auto;
	}
</style>