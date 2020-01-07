<script>
  import TodoForm from './Form.svelte';
  import TodoItem from './Item.svelte';

  export let todos = [];
  let newTodo = '';

  /**
   * Add new todo to the list
   * @returns {void}
   */
  const addTodo = () => {
    if (newTodo) {
      // update the array
      todos = [
        ...todos,
        {
          id: Date.now(),
          completed: false,
          text: newTodo,
        },
      ];

      // clear the input
      newTodo = '';

      // update the localStorage
      return localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  /**
   * Delete todo from the list
   * @param detail {number} - passed ID of the todo item
   * @returns {void}
   */
  const deleteTodo = ({ detail: todoId = null }) => {
    // update the array
    todos = [...todos.filter(({ id = null }) => id !== todoId)];

    // update the localStorage
    return localStorage.setItem('todos', JSON.stringify(todos));
  };

  /**
   * Switch status for a todo
   * @param detail {number} - passed ID of the todo item
   * @returns {void}
   */
  const switchTodoStatus = ({ detail: todoId = null }) => {
    // update the array
    todos = [...todos.reduce((arr, item) => {
      const mutable = { ...item };
      if (mutable.id === todoId) {
        mutable.completed = !mutable.completed;
      }
      arr.push(mutable);
      return arr;
    }, [])];

    // update the localStorage
    return localStorage.setItem('todos', JSON.stringify(todos));
  };
</script>

<div class="app-wrap">
  <h1>To-Do list with Svelte</h1>
  <div class="source">
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
