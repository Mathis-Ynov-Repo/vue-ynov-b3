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
      loading: false,
    };
  },
  methods: {
    fetchUsers() {
      this.loading = true;
      axios('https://randomuser.me/api/?results=20').then(({ data: { results } }) => {
        this.nonFilteredUsers = results.map((user) => ({
          age: user.dob.age,
          name: `${user.name.first} ${user.name.last.toUpperCase()}`,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          avatar: user.picture.thumbnail,
        }));
        this.loading = false;
      });
    },

  },
};
</script>
<style>

  </style>
