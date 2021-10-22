<template>
  <div class="stat-box">
    <ul v-if="stats">
      <li v-for="stat in stats.data.covid19Stats" :key="stat" class="stat">
        <p>
          <strong>Country:</strong>
          <span>{{ stat.country }}</span>
        </p>
        <p v-if="stat.city">
          <strong>City:</strong>
          <span>{{ stat.city }}</span>
        </p>
        <p>
          <strong>Confirmed:</strong>
          <span>{{ stat.confirmed }}</span>
        </p>
        <p>
          <strong>Death:</strong>
          <span>{{ stat.deaths }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "stats",
  computed: {
    stats() {
      return this.$store.state.stats
    }
  },
  mounted() {
    this.$store.dispatch("getAllStats");
  }
}
</script>

<style>
.stat-box {
  height: 100%;
  overflow-x: auto;
}

.stat-box ul {
  display: flex;
  flex-flow: wrap;
}

.stat-box .stat {
  list-style-type: none;
  width: 30%;
  border: 1px solid #4a9c95;
  border-radius: 3px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: left;
}

.stat-box .stat p {
  margin-bottom: 5px;
}

.stat-box .stat strong {
  margin-right: 5px;
}
</style>