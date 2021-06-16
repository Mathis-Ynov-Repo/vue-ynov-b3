<template>
  <form
    v-if="!edit"
    class="user-form"
    style="display: flex; flex-direction: column;
  align-items: center; height : 600px; justify-content : space-between"
    method="POST"
    @submit.prevent="postUser"
  >
    <form-input
      :value="firstName"
      :data="'firstName'"
      :type="'text'"
      :req="true"
      @input="firstName = $event"
    />
    <form-input
      :value="lastName"
      :data="'lastName'"
      :type="'text'"
      :req="true"
      @input="lastName = $event"
    />
    <form-input
      :value="birthDate"
      :data="'birthDate'"
      :type="'date'"
      :req="true"
      @input="birthDate = $event"
    />
    <form-input
      :value="email"
      :data="'email'"
      :type="'email'"
      :req="true"
      @input="email = $event"
    />
    <form-input
      :value="phone"
      :data="'phone'"
      :type="'phone'"
      :req="true"
      @input="phone = $event"
    />

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
    <form-input
      :value="avatarUrl"
      :data="'avatarUrl'"
      :type="'text'"
      :req="true"
      @input="avatarUrl = $event"
    />

    <label for="details">Details
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
    style="display: flex; flex-direction: column; padding: 10px;
  align-items: center; height : 600px; justify-content : space-between"
    method="POST"
    @submit.prevent="putUser"
  >
    <form-input
      :value="editUser.firstName"
      :data="'firstName'"
      :type="'text'"
      :req="true"
      @input="editUser.firstName = $event"
    />
    <form-input
      :value="editUser.lastName"
      :data="'lastName'"
      :type="'text'"
      :req="true"
      @input="editUser.lastName = $event"
    />

    <label for="birthDate">Date de Naissance
      ( {{ new Date(editUser.birthDate).toLocaleDateString('fr-FR') }} )
      <input
        v-model="editUser.birthDate"
        type="date"
      >
    </label>
    <form-input
      :value="editUser.email"
      :data="'email'"
      :type="'email'"
      :req="true"
      @input="editUser.email = $event"
    />

    <form-input
      :value="editUser.phone"
      :data="'phone'"
      :type="'phone'"
      :req="true"
      @input="editUser.phone = $event"
    />
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
    <form-input
      :value="editUser.avatarUrl"
      :data="'avatarUrl'"
      :type="'text'"
      :req="true"
      @input="editUser.avatarUrl = $event"
    />

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
import FormInput from './FormInput.vue';

export default {
  components: { FormInput },
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
