<template>
	<nav class="p-3 flex justify-between align-middle dark:bg-slate-900 bg-slate-50">
		<div>
			<MyToolbarMyLogo />
		</div>
		<div class="flex align-middle">
			<div class="flex align-middle">
				<template v-for="{ label, route } in items">
					<UButton
						:to="route"
						:label="label"
						size="xl"
						truncate
						:ui="{ rounded: 'rounded-full' }"
						variant="ghost"
						class="my-auto mx-2 min-w-[100px] max-w-[150px] overflow-ellipsis text-ellipsis justify-center" />
				</template>
			</div>
			<MyToolbarMyMode />
		</div>
	</nav>
</template>

<script setup lang="ts">
type ToolbarItem = {
	label: string;
	route: string;
};

// const { items } = defineProps<{ items: ToolbarItem[]; }>();

const items: ToolbarItem[] = [
	// { label: 'Home', route: '/' },
	{ label: 'About', route: '/about' },
	{ label: 'Products', route: '/products' },
	// { label: 'Error', route: '/nopagehere' },
	// { label: 'No prod', route: '/products/noprods' },
];
</script>
