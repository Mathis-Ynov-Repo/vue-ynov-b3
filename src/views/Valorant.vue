<template>
  <div>
    <h1>Valou </h1>
    <h2>name: {{ val.name }}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      val: null,
    };
  },
  mounted() {
    console.log('yo');
    axios.get('/api/valorant', {
      headers: {
        Accept: 'application/json',
      },
    }).then((r) => { this.val = r.data; }).catch((err) => console.error(err));
  },
};
</script>

<style>

</style>
