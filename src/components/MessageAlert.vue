<template>
  <div id="message-alert">
    <p class="alert-text">
      message-alert
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MessageAlert extends Vue {
}
</script>

<style lang="scss">
#message-alert {
  background-color: #ffcdd2;
  height: 50px;
  margin: 1rem;
  text-align: left;
}
.alert-text {
  padding: .75rem 1.25rem;
}
</style>