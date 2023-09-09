<template>
	<nav class="p-3 flex justify-between dark:bg-slate-900 bg-slate-50">
		<div></div>
		<div>
			<span> Nuxt Playground &copy;</span>
		</div>
		<div class="flex"></div>
	</nav>
</template>

<script setup lang="ts">
type ToolbarItem = {
	label: string;
	route: string;
};

// const { items } = defineProps<{ items: ToolbarItem[]; }>();

const items: ToolbarItem[] = [
	{ label: 'Home', route: '/' },
	{ label: 'About', route: '/about' },
	{ label: 'Products', route: '/products' },
];
</script>
