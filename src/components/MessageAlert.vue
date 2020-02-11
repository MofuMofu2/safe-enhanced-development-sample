<template>
  <div
    id="message-alert"
    :class="variant"
  >
    <p class="alert-text">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MessageAlert extends Vue {
  @Prop() variant!: string;
  @Prop() text!: string;
}
</script>

<style lang="scss">
#message-alert {
  height: 50px;
  margin: 1rem;
  text-align: left;
}
.info{
  background-color: #b2dfdb;
}
.warning{
  background-color: #fff9c4;
}
.error{
  background-color: #ffcdd2;
}
.alert-text {
  padding: .75rem 1.25rem;
}
</style>