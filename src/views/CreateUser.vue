<template>
  <form
    style="display: flex; flex-direction: column;
  align-items: center; height : 600px; justify-content : space-between"
    method="POST"
    @submit.prevent="postUser"
  >
    <label for="firstName">Prénom
      <input
        v-model="firstName"
        required
      >
    </label>
    <label for="lastName">Nom de famille
      <input
        v-model="lastName"
        required
      >
    </label>
    <label for="birthDate">Date de Naissance
      <input
        v-model="birthDate"
        type="date"
      >
    </label>
    <label for="email">Email
      <input
        v-model="email"
        type="email"
        required
      >
    </label>
    <label for="phone">Phone
      <input
        v-model="phone"
        name="phone"
        type="phone"
      >
    </label>
    <select
      v-model="gender"
    >
      <option value="male">
        Male
      </option>
      <option value="female">
        Female
      </option>
    </select>
    <label for="avatar">AvatarUrl
      <input
        v-model="avatar"
        name="avatar"
        required
      ></label>
    <label for="details">details
      <textarea v-model="details" />
    </label>
    <button
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      birthDate: new Date(),
      email: '',
      phone: '',
      gender: 'male',
      avatar: '',
      details: '',
    };
  },
  methods: {
    postUser() {
      // axios.post('https://ynov-front.herokuapp.com/api/users/', {
      //   birthDate: this.birthDate,
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   email: this.email,
      //   phone: this.phone,
      //   gender: this.gender,
      //   avatarUrl: this.avatar,
      //   details: this.details,
      // });
      if (this.email && this.firstName && this.lastName && this.birthDate && this.avatar) {
        console.log({
          birthDate: this.birthDate,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          avatarUrl: this.avatar,
          details: this.details,
        });
      }
    },
  },
};
</script>

<style>

</style>
