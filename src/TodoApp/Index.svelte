<script>
  import { afterUpdate } from 'svelte';

  import { store } from '../store';
  import TodoForm from './Form.svelte';
  import TodoItem from './Item.svelte';

  export let todos = $store.todos;
  let newTodo = '';

  /**
   * A lifecycle hook that runs after every update
   * @returns {void}
   */
	afterUpdate(() => {
		todos = $store.todos;
	});

  /**
   * Add new todo to the list
   * @returns {void}
   */
  const addTodo = () => {
    if (newTodo) {
      // update the store
      store.addTodo(newTodo);

      // clear the input
      return newTodo = '';
    }
  };

  /**
   * Delete todo from the list
   * @param detail {number} - passed ID of the todo item
   * @returns {void}
   */
  const deleteTodo = ({ detail: todoId = null }) => store.deleteTodo(todoId);

  /**
   * Switch status for a todo
   * @param detail {number} - passed ID of the todo item
   * @returns {void}
   */
  const switchTodoStatus = ({ detail: todoId = null }) => store.switchTodoStatus(todoId);
</script>

<div class="app-wrap">
  <h1 class="noselect">Todo-list with Svelte</h1>
  <div class="source noselect">
    <a href="https://github.com/peterdee/svelte-todo">View the source</a>
  </div>
  <TodoForm
    bind:input="{newTodo}"
    on:add-todo="{addTodo}"
  />
  {#each todos as item}
    <TodoItem
      completed="{item.completed}"
      id="{item.id}"
      on:delete-todo={deleteTodo}
      on:switch-status={switchTodoStatus}
      text="{item.text}"
    />
	{/each}
</div>

<style>
  h1 {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 100;
    margin: 0;
    text-transform: uppercase;
  }
  .app-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 35px 10px;
  }
  .source {
    font-size: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
</style>
