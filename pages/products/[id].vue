<template>
	<MyProductsListItem :product="product" />
</template>

<script setup lang="ts">
import { Product } from '~/types';

const { id } = useRoute().params;

// Fetch the products
const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`);
const product = data as Ref<Product>;

// Catch errors
if (!product.value) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
</script>
