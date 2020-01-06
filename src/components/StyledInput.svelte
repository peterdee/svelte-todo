<script>
  export let name = 'input';
  export let placeholder = '';
  export let value = '';
</script>

<input
  id="input-{name}"
  name="{name}"
  placeholder="{placeholder}"
  bind:value="{value}"
/>

<style>
  input {
    background-color: #fafafa;
    border: none;
    border-bottom: 3px solid #eaeaea;
    border-radius: 5px;
    font-size: 16px;
    height: 3em;
    padding: 0 15px;
    transition: border-bottom 500ms ease;
    width: 100%;
  }
  input:focus {
    border-bottom: 3px solid #ff3e00;
    outline: none;
    transition: border-bottom 500ms ease;
  }
</style>
