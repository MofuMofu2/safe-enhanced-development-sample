<template>
  <div id="main-page">
    <div>index.htmlとは別のページに同じ実装がある、みたいなシチュエーションを再現</div>
    <MessageAlert
      v-if="displayAlert"
      :variant="'info'"
      :text="'sample info'"
    />
    <div class="toggle-alert">
      <input
        id="toggle-message-alert"
        type="checkbox"
        v-model="displayAlert"
      >
      <label for="checkbox">Toggle MessageAlert</label>
    </div>
    <MessageAlert
      v-if="isCheckEnabled"
      :variant="'warning'"
      :text="'sample warning'"
    />
    <div class="toggle-alert">
      <input
        id="toggle-message-alert"
        type="checkbox"
        v-model="displayAlert"
      >
      <label for="checkbox">Toggle MessageAlert</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MessageAlert from './MessageAlert.vue';

@Component({
  components: {
    MessageAlert,
  },
})

export default class MainPage extends Vue {
  displayAlert: boolean = false;
  
  get isCheckEnabled(): boolean {
    return this.displayAlert;
  }
}
</script>
