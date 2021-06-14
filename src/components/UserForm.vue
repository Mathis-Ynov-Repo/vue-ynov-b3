<template>
  <form
    v-if="!edit"
    class="user-form"
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
        required
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
    <label for="avatarUrl">AvatarUrl
      <input
        v-model="avatarUrl"
        name="avatarUrl"
        required
      ></label>
    <label for="details">details
      <textarea v-model="details" />
    </label>
    <h2 v-if="error">
      {{ error }}
    </h2>
    <button
      type="submit"
    >
      Submit
    </button>
  </form>
  <form
    v-else
    style="display: flex; flex-direction: column;
  align-items: center; height : 600px; justify-content : space-between"
    method="POST"
    @submit.prevent="putUser"
  >
    <label for="firstName">Prénom
      <input
        v-model="editUser.firstName"
        required
      >
    </label>
    <label for="lastName">Nom de famille
      <input
        v-model="editUser.lastName"
        required
      >
    </label>
    <label for="birthDate">Date de Naissance
      ( {{ new Date(editUser.birthDate).toLocaleDateString('fr-FR') }} )
      <input
        v-model="editUser.birthDate"
        type="date"
      >
    </label>
    <label for="email">Email
      <input
        v-model="editUser.email"
        type="email"
        required
      >
    </label>
    <label for="phone">Phone
      <input
        v-model="editUser.phone"
        name="phone"
        type="phone"
        required
      >
    </label>
    <select
      v-model="editUser.gender"
    >
      <option value="male">
        Male
      </option>
      <option value="female">
        Female
      </option>
    </select>
    <label for="avatarUrl">AvatarUrl
      <input
        v-model="editUser.avatarUrl"
        name="avatarUrl"
        required
      ></label>
    <label for="details">details
      <textarea v-model="editUser.details" />
    </label>
    <button
      type="submit"
    >
      Submit
    </button>
    <button
      @click.prevent="$emit('un-edit')"
    >
      Stop editing
    </button>
  </form>
</template>

<script>
export default {
  props: ['user', 'edit'],
  data() {
    return {
      firstName: '',
      editUser: this.user,
      lastName: '',
      birthDate: new Date(),
      email: '',
      phone: '',
      gender: 'male',
      avatarUrl: '',
      details: '',
      error: '',
    };
  },
  methods: {
    postUser() {
      if (this.email && this.firstName && this.lastName
      && this.birthDate && this.avatarUrl && this.phone) {
        this.error = '';
        const user = {
          birthDate: this.birthDate,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          avatarUrl: this.avatarUrl,
          details: this.details,
        };
        this.$emit('submitUser', user);
      } else {
        this.error = 'il manque des champs';
      }
    },
    putUser() {
      this.$emit('submitUser', this.editUser);
    },
  },
};
</script>

<style>

</style>
