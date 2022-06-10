<script lang="ts" context="module">
	import type { NavItemType } from './../types/navItem';

	const modules = import.meta.glob('../routes/**.svelte');
	let fullMenu: NavItemType[] = [];

	for (let path in modules) {
		const label = path
			.replace(/^\..\/routes\//, '')
			.replace(/\.svelte$/, '');
		if (!(label === 'index' || label.startsWith('__'))) {
			fullMenu.push({
				label,
				href: `/${label}`
			});
		}
	}

	export const load = async () => {
		const menu = await Promise.all(fullMenu);
		return { props: { menu } };
	};
</script>

<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import '../app.css';

	export let menu: NavItemType[];
</script>

<Navbar {menu} />
<main class="mx-auto w-2/3 text-center text-6xl font-bold text-primary">
	<slot />
</main>
