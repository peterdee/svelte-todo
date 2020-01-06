<script>
	import Footer from './components/Footer.svelte';
	import TodoIndex from './views/Todo/Index.svelte';

	export let existingTodos = [];
</script>

<main>
	<TodoIndex todos="{existingTodos}" />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: calc(100vh - 30px);
		text-align: center;
		max-width: 440px;
		margin: 0 auto;
	}
</style>
