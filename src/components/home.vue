<template>
  <div style="font-size: 20px; font-weight: bold; font-style: italic">1s_live</div>
  <div style="display: flex; column-gap: 20px; padding: 20px">
    <router-link to="/lives"> 看直播</router-link>
    <router-link to="/live"> 开 播</router-link>
  </div>
</template>
<script setup lang="ts">

</script>
<style>
a {
  cursor: pointer;
  color: #6900ff;
  font-size: 12px;
}
a:hover {
  text-decoration: underline;
}
</style>
