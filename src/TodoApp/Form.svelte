<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import StyledButton from '../components/StyledButton.svelte';
  import StyledInput from '../components/StyledInput.svelte';

  export let input = '';
  let mounted = false;

  const dispatch = createEventDispatcher();

  /**
   * A lifecycle hook that fires up when the DOM is mounted
   */
  onMount(() => {
    mounted = true;
  });

  const addTodo = () => dispatch('add-todo');
</script>

{#if mounted}
  <form
    class="todo-form"
    on:submit|preventDefault="{addTodo}"
    transition:fade="{{ duration: 750 }}"
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
{/if}

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
