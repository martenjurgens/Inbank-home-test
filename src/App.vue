<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Inbank logo" class="logo" src="@/assets/inbank-logo.svg" width="47" height="47" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  place-items: center;
}

.logo {
  display: block;
}
</style>
