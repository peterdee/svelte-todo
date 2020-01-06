import App from './App.svelte';

// load existing todos from localStorage, pass it as a prop
const existingTodos = localStorage.getItem('todos');

const app = new App({
	props: {
		existingTodos: existingTodos ? JSON.parse(existingTodos) : [],
	},
	target: document.body,
});

export default app;
