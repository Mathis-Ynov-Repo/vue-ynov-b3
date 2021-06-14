<template>
  <div
    class="modal-backdrop"
    @click="close"
  >
    <div
      class="modal"
      @click.stop=""
    >
      <button
        class="modal-header"
        @click="close"
      >
        Close Modal
      </button>
      <user-form

        @submitUser="postUser($event)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UserForm from './UserForm.vue';

export default {
  components: { UserForm },
  methods: {
    close() {
      this.$emit('close');
    },
    refreshUsers() {
      this.$emit('rfrsh-users');
    },
    notify() {
      this.$emit('notify', { type: 'success', message: 'OmedetoWO' });
    },
    postUser(user) {
      console.log(user);
      axios.post('https://ynov-front.herokuapp.com/api/users', user)
        .then(() => {
          this.close();
          this.refreshUsers();
          this.notify();
        });
    },
  },
};
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    min-width: 500px;

    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 15px;
    display: flex;
    justify-content: right;
  }

  .user-form {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

</style>
