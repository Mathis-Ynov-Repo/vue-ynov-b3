<template>
  <tr>
    <td>
      <img
        :src="user.avatar"
        style="max-height: 50px"
      >
    </td>
    <td>
      <span v-html="highlight" />
    </td>

    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.gender }}</td>
    <td>{{ user.age }}</td>
    <td>
      <router-link :to="{path:'/users/'+user.id, params: {user: user}}">
        <a>Voir les détails</a>
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
    search: {
      type: String,
      default() {
        return '';
      },
    },
  },
  computed: {
    searchWords() {
      if (!this.search.length) { return []; }

      return this.search.toLowerCase().split(' ');
    },
    highlight() {
      const nameFormated = this.searchWords.length
        ? this.user.name.replace(
          new RegExp(this.searchWords.join('|'), 'gi'),
          '<span class="highlight">$&</span>',
        )
        : this.user.name;

      return nameFormated;
    },
  },

};
</script>

<style>

</style>
