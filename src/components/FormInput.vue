<template>
  <label :for="data">{{ data.charAt(0).toUpperCase()+ data.substring(1) }}
    <input
      v-if="req"
      :value="value"
      :name="data"
      :type="type"
      required
      @input="$emit('input', $event.target.value)"
    >
    <input
      v-else
      :value="value"
      :name="data"
      :type="type"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  props: ['data', 'type', 'req', 'value'],

};
</script>

<style>

</style>
