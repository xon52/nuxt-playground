<template>
	<div class="mt-7 max-w-sm p-5 mx-auto text-center shadow-center bg-slate-50 dark:bg-slate-900">
		<p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
		<p class="mt-7 text-6xl">Ooops.</p>
		<p class="m-7">{{ error.message }}</p>
		<UButton color="purple" size="xl" class="fill-purple-500" @click="handleClearError">Go home</UButton>
	</div>
</template>

<script setup lang="ts">
import { NuxtError } from 'nuxt/app';

const { error } = defineProps<{ error: NuxtError }>();

const handleClearError = () => {
	console.log('fire');
	clearError({ redirect: '/' });
};
</script>

<style>
.shadow-center {
	box-shadow: 0 0 10px 10px rgb(168 85 247 / var(--tw-bg-opacity));
}
</style>
