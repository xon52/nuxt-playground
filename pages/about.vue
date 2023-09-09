<template>
	<MyToolbar />
	<p>About - {{ data?.message }}</p>
	<div>
		{{ data2 }}
		{{ error?.statusMessage }}
	</div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/ninja?name=Mario', {
	method: 'post',
	body: { age: 30 },
});
const { data: data2, error } = await useFetch('/api/movers/gainers');
</script>
