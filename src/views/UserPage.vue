<template>
  <div
    style="display: flex; align-items: center;
   flex-direction: column; justify-content: space-around"
  >
    <router-link
      :to="{name:'Users'}"
      style="padding : 10px"
    >
      Go back
    </router-link>
    <img
      :src="user.avatarUrl"
      style="max-height : 400px"
    >
    <div
      v-if="!editing"
      style="display: flex; align-items: center;height: 400px;
   flex-direction: column; justify-content: space-around"
    >
      <div><strong>Nom :</strong> {{ user.name }}</div>
      <div><strong>Email: </strong> {{ user.email }}</div>
      <div><strong>Phone :</strong> {{ user.phone }}</div>
      <div><strong>Gender :</strong> {{ user.gender }}</div>
      <div><strong>Age :</strong> {{ user.age }}</div>
      <div>
        <strong>Info :</strong><span v-html="parsedDetails" />
      </div>
      <button @click="editing = true">
        Edit User
      </button>
    </div>
    <user-form
      v-else
      :user="user"
      :edit="true"
      @un-edit="editing = false"
      @submitUser="putUser($event)"
    />
  </div>
</template>

<script>
import axios from 'axios';
import UserForm from '../components/UserForm.vue';

export default {
  components: { UserForm },
  data() {
    return {
      loading: true,
      user: {},
      editing: false,
      name: '',
      email: '',
      phone: '',
      info: '',
    };
  },
  computed: {
    parsedDetails() {
      return this.user.details?.replace(
        new RegExp('\\n', 'gi'), '<br>',
      );
    },
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.loading = true;
      axios(`https://ynov-front.herokuapp.com/api/users/${this.$route.params.id}`).then(({ data }) => {
        this.loading = false;
        this.user = {
          id: data.data._id,
          age: this.getAge(data.data.birthDate),
          birthDate: data.data.birthDate,
          name: `${data.data.firstName} ${data.data.lastName.toUpperCase()}`,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          phone: data.data.phone,
          gender: data.data.gender,
          avatarUrl: data.data.avatarUrl,
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
    async putUser(user) {
      try {
        await axios.put(`https://ynov-front.herokuapp.com/api/users/${user.id}`, user);
        this.$router.push({ name: 'Users' });
        this.$emit('notification', { type: 'success', message: 'Bien Modifié chef' });
      } catch {
        this.$emit('notification', { type: 'fail', message: 'Awa' });
      }
    },
  },
};
</script>

<style>

</style>
