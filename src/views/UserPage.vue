<template>
  <div
    style="height: 600px; display: flex; align-items: center;
   flex-direction: column; justify-content: space-around"
  >
    <router-link :to="{name:'Users'}">
      Go back
    </router-link>
    <img
      :src="user.avatar"
      style="max-height : 400px"
    >
    <div><strong>Nom :</strong> {{ user.name }}</div>
    <div><strong>Email: </strong> {{ user.email }}</div>
    <div><strong>Phone :</strong> {{ user.phone }}</div>
    <div><strong>Gender :</strong> {{ user.gender }}</div>
    <div><strong>Age :</strong> {{ user.age }}</div>
    <div><strong>Info :</strong> {{ user.details }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      user: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.loading = true;
      axios(`https://ynov-front.herokuapp.com/api/users/${this.$route.params.id}`).then(({ data }) => {
        // this.user = data.data;
        this.loading = false;
        this.user = {
          id: data.data._id,
          age: this.getAge(data.data.birthDate),
          name: `${data.data.firstName} ${data.data.lastName.toUpperCase()}`,
          email: data.data.email,
          phone: data.data.phone,
          gender: data.data.gender,
          avatar: data.data.avatarUrl,
          details: data.data.details,
        };
      });
    },
    getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
      }
      return age;
    },
  },
};
</script>

<style>

</style>
