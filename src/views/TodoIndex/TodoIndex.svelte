<script>
  import StyledButton from '../../components/StyledButton.svelte';
  import StyledInput from '../../components/StyledInput.svelte';
  import TodoItem from './TodoItem.svelte';

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
  <form
    class="todo-form"
    on:submit|preventDefault="{addTodo}"
  >
    <div class="input">
      <StyledInput
        name="todo-input"
        placeholder="New task"
        bind:value="{newTodo}"
      />
    </div>
    <div class="button">
      <StyledButton
        disabled="{!newTodo}"
        text="Add"
        type="submit"
      />
    </div>
  </form>
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
    text-transform: uppercase;
  }
  .app-wrap {
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: flex-start;
    padding: 0 10px;
  }
  .todo-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .input {
    margin-right: 5px;
    width: 100%;
  }
  .button {
    margin-left: 5px;
  }
</style>
