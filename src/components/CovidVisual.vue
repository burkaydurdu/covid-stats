<template>
  <div class="covid">
    <h1>{{ msg }}</h1>
    <div class="img-box">
      <img src="../assets/doctor.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CovidVisual',
  props: {
    msg: String
  }
}
</script>

<style>
.covid {
  height: 100%;
  overflow: hidden;
}

.covid .img-box {
  height: 100%;
}

.covid .img-box img {
  height: 100%;
}
</style>> 