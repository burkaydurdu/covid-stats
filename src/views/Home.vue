<template>
  <div class="home">
    <CovidVisual msg="Covid 19"/>
  </div>
</template>

<script>
import CovidVisual from '@/components/CovidVisual.vue'

export default {
  name: 'Home',
  components: {
    CovidVisual
  }
}
</script>

<style>
.home {
  width: 100%;
  height: calc(100% - 60px);
}
</style>