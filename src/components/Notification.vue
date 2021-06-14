<template>
  <div
    style="padding : 10px; color: white"
    :style="notification.type === 'success' ?
      'background: green' : 'background:red'"
  >
    {{ notification.message }} <button @click="$emit('close-notification')">
      x
    </button>
  </div>
</template>

<script>
export default {
  props: ['notification'],
};
</script>

<style>

</style>
