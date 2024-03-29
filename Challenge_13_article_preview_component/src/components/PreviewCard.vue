<script setup>
import drawer from "../assets/images/drawers.jpg"
</script>

<template>
  <article class="preview-card">
    <figure>
      <img :src="drawer" alt="drawer" />
    </figure>
  </article>
</template>

<style scoped>
.preview-card {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
  width: 100%;
}
</style>