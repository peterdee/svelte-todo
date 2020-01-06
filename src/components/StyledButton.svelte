<script>
  export let disabled = false;
  export let text = '';
  export let type = 'button';
</script>

<button
  disabled="{disabled}"
  type="{type}"
>
  {text}
</button>

<style>
  button {
    background-color: #ff3e00;
    border-bottom: 3px solid #db3700;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    height: 3em;
    padding: 0 15px;
    transition: background-color 500ms ease, border-bottom 250ms ease;
  }
  button:hover {
    background-color: #ff6c3b;
    cursor: pointer;
    transition: background-color 600ms ease;
  }
  button:disabled {
    background-color: #999999;
    border-bottom: 3px solid #7a7a7a;
    cursor: default;
    transition: background-color 500ms ease, border-bottom 250ms ease;
  }
</style>
