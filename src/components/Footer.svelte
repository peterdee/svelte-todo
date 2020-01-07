<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;

	/**
	 * A lifecycle hook that fires up when the DOM is mounted
	 */
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
  <div
    class="footer noselect"
    transition:fade="{{ duration: 750 }}"
  >
    With <span
      class="highlight"
    >❤</span> by <a
      href="https://github.com/peterdee"
    >Peter Dyumin</a>
  </div>
{/if}

<style>
  .footer {
    font-size: 12px;
    height: 30px;
    text-align: center;
  }
  .highlight {
    color: #ff3e00;
  }
</style>
