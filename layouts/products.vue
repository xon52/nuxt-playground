<template>
  <header>
    <nav><NuxtLink to="/products">Merch</NuxtLink></nav>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
}
</style>
