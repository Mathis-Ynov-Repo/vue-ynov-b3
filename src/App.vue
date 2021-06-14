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
    <Notification
      v-if="notification"
      :notification="notification"
      @close-notification="notification = null"
    />
    <router-view @notification="assignAndWait($event)" />
  </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
  components: { Notification },
  data() {
    return {
      notification: null,
    };
  },
  methods: {
    assignAndWait(notif) {
      this.notification = notif;
      setTimeout(() => { this.notification = null; }, 3000);
    },
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
