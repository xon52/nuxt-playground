<template>
	<UCard class="my-8">
		<template #header>
			<h3>{{ product.title }}</h3>
		</template>
		<div class="flex">
			<div class="h-48 w-48 min-w- p-2 mr-8 bg-white flex-shrink-0">
				<img :src="product.image" :alt="product.title" class="h-full w-full object-contain" />
			</div>
			<div class="flex flex-col justify-between w-full">
				<span>{{ product.description }}</span>
				<div class="flex justify-between">
					<UBadge size="sm" :label="product.category" variant="soft" color="orange" class="h-fit m-auto mx-0" />
					<div class="grid grid-cols-2 gap-4">
						<UButton size="xl" :to="`/products/${product.id}`" color="primary" label="Buy" block>
							<template #leading> <UIcon name="i-heroicons-shopping-cart" class="text-xl" /></template
						></UButton>
						<UButton size="xl" :to="`/products/${product.id}`" color="gray" label="View" block></UButton>
					</div>
				</div>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
import { Product } from '@/types';

const { product } = defineProps<{ product: Product }>();
</script>
