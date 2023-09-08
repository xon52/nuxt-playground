<template>
  <p>Product: {{ id }}</p>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'products',
});

const id = useRoute().params;
</script>
