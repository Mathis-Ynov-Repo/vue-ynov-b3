<template>
  <table
    id="tbl-users"
    class="table table-hover"
  >
    <thead>
      <tr>
        <th />
        <th @click="sort('name')">
          <div v-if="sortBy === 'name'">
            <i
              v-if="sortDirection === 'asc'"
              class="fa fa-arrow-down asc"
              aria-hidden="true"
            />
            <i
              v-else-if="sortDirection === 'desc'"
              class="fa fa-arrow-up desc"
              aria-hidden="true"
            />
            <i v-else />
          </div>
          Nom
        </th>
        <th>Email</th>
        <th>Tel</th>
        <th>Gender</th>
        <th @click="sort('age')">
          <div v-if="sortBy === 'age'">
            <i
              v-if="sortDirection === 'asc'"
              class="fa fa-arrow-down asc"
              aria-hidden="true"
            />
            <i
              v-else-if="sortDirection === 'desc'"
              class="fa fa-arrow-up desc"
              aria-hidden="true"
            />
            <i v-else />
          </div>
          Age
        </th>
      </tr>
    </thead>
    <tbody>
      <user-line
        v-for="user in filteredList"
        :key="user.email"
        :user="user"
        :search="searchString"
      />
    </tbody>
  </table>
</template>

<script>
import userLine from './UserLine.vue';

export default {
  components: { userLine },
  props: {
    gender: { type: String, default: '' },
    nonFilteredUsers: { type: Array, default() { return []; } },
    searchString: { type: String, default: '' },
  },
  data() {
    return {
      sortBy: '',
      sortDirection: '',
    };
  },
  computed: {
    filteredList() {
      const list = this.nonFilteredUsers.filter((user) => {
        if (this.gender === '') {
          return true;
        }
        return user.gender === this.gender;
      }).filter((element) => {
        if (this.searchString !== '') {
          const splitQuery = this.searchString.toLowerCase().split(' ');

          const result = splitQuery.every((i) => element.name.toLowerCase().includes(i));
          if (result === true) {
            return element;
          }
          return null;
        } return element;
      });
      let sortedList = [];
      if (this.sortDirection === 'desc') {
        sortedList = list.sort((a, b) => a.age - b.age);
        return sortedList;
      } if (this.sortDirection === 'asc') {
        sortedList = list.sort((a, b) => b.age - a.age);
        return sortedList;
      }
      sortedList = list;
      return sortedList;
    },
  },
  watch: {
    filteredList(val) {
      this.$emit('update-count', val.length);
    },
  },
  methods: {
    sort(sortBy) {
      if (sortBy === this.sortBy) {
        if (this.sortDirection === 'desc') {
          this.sortDirection = 'asc';
        } else if (this.sortDirection === 'asc') {
          this.sortDirection = '';
        } else {
          this.sortDirection = 'desc';
        }
      }
      this.sortBy = sortBy;
    },
  },
};
</script>

<style>

</style>
