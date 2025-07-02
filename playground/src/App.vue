<template>
  <div class="calendar-app">
    <calendar :first-day-of-week="1" ref="calendar" :select-date="date">
    </calendar>
  </div>
</template>

<script setup>
const date = []
</script>

<style lang="scss" scoped>
</style>
