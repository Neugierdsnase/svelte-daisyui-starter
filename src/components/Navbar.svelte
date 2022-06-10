<script lang="ts">
	import type { NavItemType } from '../types/navItem';
	import { fly } from 'svelte/transition';

	export let menu: NavItemType[];

	const handleThemeToggle = () => {
		const { documentElement } = window.document;
		documentElement.setAttribute(
			'data-theme',
			`${
				documentElement.getAttribute('data-theme') === 'dracula'
					? 'winter'
					: 'dracula'
			}`
		);
	};
</script>

<nav class="navbar bg-base-100" data-testid="navbar">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl normal-case">daisyUI</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal items-center p-0">
			{#each menu as { href, label }, index}
				<li in:fly={{ y: -22, duration: 200, delay: 200 * index }}>
					<a {href} data-testid={`nav-${label}`}>{label}</a>
				</li>
			{/each}
			<li class="ml-4">
				<input
					type="checkbox"
					class="toggle"
					data-toggle-theme="dracula,winter"
					data-act-class="ACTIVECLASS"
					on:click={handleThemeToggle}
					checked
				/>
			</li>
		</ul>
	</div>
</nav>
