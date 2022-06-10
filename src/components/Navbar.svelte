<script lang="ts">
	import type { NavItemType } from '../types/navItem';
	import { fly } from 'svelte/transition';

	export let menu: NavItemType[];
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl normal-case">daisyUI</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			{#each menu as { href, label }, index}
				<li in:fly={{ y: -22, duration: 200, delay: 200 * index }}>
					<a {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
