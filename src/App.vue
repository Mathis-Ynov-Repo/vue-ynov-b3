<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/users">
        Users
      </router-link>
    </div>
    <div
      v-if="notification"
      style="padding : 10px; color: white"
      :style="notification.type === 'success' ?
        'background: green' : 'background:red'"
    >
      {{ notification.message }} <button @click="notification = null">
        x
      </button>
    </div>
    <router-view @notification="notification = $event" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
