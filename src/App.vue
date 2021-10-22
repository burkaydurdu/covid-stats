<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span>|</span>
    <router-link to="/stats">Stats</router-link>
    <span>|</span>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  color: #2c3e50;
  background-color: #fefee2;
  height: 100vh;
  width: 100%;
}

#nav {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav span {
  margin-right: 5px;
  margin-left: 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
