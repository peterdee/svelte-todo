<script>
	import TodoIndex from './views/TodoIndex/TodoIndex.svelte';

	export let existingTodos = [];
</script>

<main>
	<TodoIndex todos="{existingTodos}" />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		max-width: 440px;
		margin: 0 auto;
	}
</style>
