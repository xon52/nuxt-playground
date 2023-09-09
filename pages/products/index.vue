<template>
	<MyProductsListItem v-for="p in products" :product="p" />
</template>

<script setup lang="ts">
import { Product } from '~/types';

// Fetch the products
const { data } = await useFetch('https://fakestoreapi.com/products');
const products = data as Ref<Product[]>;
</script>
