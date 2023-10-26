<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="divider" :class="{ margins: text }">{{ text }}</div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-style: italic;
  color: #dedede;
  width: 100%;
}

.margins::after,
.margins::before {
  margin-left: 100px;
  margin-right: 100px;
}

.divider::before,
.divider::after {
  flex: 1;
  content: '';
  padding: 1px;
  background-color: #e9e9e9;
}

.test {
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
</style>
