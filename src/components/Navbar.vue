<template>
  <div style="display: flex; flex-direction: row;">
    <button
      id="fetch-users"
      class="btn btn-primary"
      @click="$emit('get-users')"
    >
      Fetch users
    </button>
    <select
      id="genders"
      name="genders"
      @change="$emit('filter-genre', $event.target.value)"
    >
      <option value="">
        All
      </option>

      <option value="male">
        Male
      </option>

      <option value="female">
        Female
      </option>
    </select>
    <span
      v-if="gender != ''"
      class="counter"
    >{{ filteredListCount }} {{ gender }} /
      {{ nonFilteredUsers }} users</span>
    <span
      v-else
      class="counter"
    >{{ filteredListCount }} / {{ nonFilteredUsers }} users</span>
    <input
      placeholder="search"
      style="margin-left: auto;"
      @input="$emit('filter-search', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: 'gender',
    event: 'filter-genre',
  },
  props: {
    filteredListCount: { type: Number, default: 0 },
    nonFilteredUsers: { type: Number, default: 0 },
    gender: { type: String, default: '' },
  },
};
</script>

<style>
.asc:after {
  content: "\25B2"
}
.desc:after {
  content: "\25BC"
}
.highlight {
  font-weight: bold;
}
</style>
