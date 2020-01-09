<script>
  import { createEventDispatcher } from 'svelte';

  export let completed = false;
  export let id = '';
  export let text = '';

  const dispatch = createEventDispatcher();

  const deleteTodo = (id = '') => dispatch('delete-todo', Number(id));
  const switchStatus = (id = '') => dispatch('switch-status', Number(id));
</script>

<div
  class="todo-item"
  id="{id}"
>
  <div
    class="todo-text"
    on:click="{() => switchStatus(id)}"
  >
    <span class="{completed ? 'completed' : ''}">
      {text}
    </span>
  </div>
  <div
    class="noselect"
    on:click="{() => deleteTodo(id)}"
  >
    ✖
  </div>
</div>

<style>
  .todo-item {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    justify-content: space-between;
    padding: 10px 15px;
    transition: background-color 250ms ease;
  }
  .todo-item:hover {
    background-color: #fafafa;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 250ms ease;
  }
  .todo-text {
    margin-right: 10px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    width: 100%;
  }
  .completed {
    color: #aaa;
    text-decoration: line-through;
    transition: text-decoration 150ms ease, color 500ms ease;
  }
</style>
