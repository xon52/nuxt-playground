<template>
  <Toolbar>
    <template #start>
      <NuxtLink to="/" tabindex="-1">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
          <img alt="logo" src="/images/logo.svg" class="h-2rem" />
        </Button>
      </NuxtLink>
    </template>

    <template #end>
      <template v-for="item in items">
        <NuxtLink :to="item.route" tabindex="-1" class="mx-2">
          <Button rounded plain>
            {{ item.label }}
          </Button>
        </NuxtLink>
      </template>
    </template>
  </Toolbar>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';

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
