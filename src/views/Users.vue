<template>
  <div class="container-fluid">
    <div id="app">
      <div>
        <h1>Vue</h1>
        <hr>
        <navbar
          v-model="gender"
          :filtered-list-count="filteredLength"
          :non-filtered-users="nonFilteredUsers.length"
          @get-users="fetchUsers"
          @filter-search="searchString = $event"
        />
      </div>
      <user-list
        :gender="gender"
        :non-filtered-users="nonFilteredUsers"
        :search-string="searchString"
        :loading="loading"
        @update-count="filteredLength = $event"
      />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';
import userList from '../components/UserList.vue';

export default {
  name: 'Users',
  components: {
    Navbar,
    userList,
  },
  data() {
    return {
      gender: '',
      nonFilteredUsers: [],
      searchString: '',
      filteredLength: 0,
      loading: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.loading = true;
      axios('https://ynov-front.herokuapp.com/api/users').then(({ data }) => {
        this.nonFilteredUsers = data.data.map((user) => ({
          id: user._id,
          age: this.getAge(user.birthDate),
          name: `${user.firstName} ${user.lastName.toUpperCase()}`,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          avatar: user.avatarUrl,
        }));
        this.loading = false;
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
