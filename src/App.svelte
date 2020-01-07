<script>
	import Footer from './components/Footer.svelte';
	import TodoIndex from './TodoApp/Index.svelte';
</script>

<main>
	<TodoIndex />
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		min-height: calc(100vh - 30px);
		text-align: center;
		max-width: 440px;
		margin: 0 auto;
	}
</style>
