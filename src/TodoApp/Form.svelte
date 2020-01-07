<script>
  import { createEventDispatcher } from 'svelte';
  
  import StyledButton from '../components/StyledButton.svelte';
  import StyledInput from '../components/StyledInput.svelte';

  export let input = '';

  const dispatch = createEventDispatcher();

	const addTodo = () => dispatch('add-todo');
</script>

<form
  class="todo-form"
  on:submit|preventDefault="{addTodo}"
>
  <div class="input">
    <StyledInput
      name="todo-input"
      placeholder="New task"
      bind:value="{input}"
    />
  </div>
  <div class="button">
    <StyledButton
      disabled="{!input}"
      text="Add"
      type="submit"
    />
  </div>
</form>

<style>
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
