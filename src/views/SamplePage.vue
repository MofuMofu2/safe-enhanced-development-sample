<template>
  <div class="about">
    <h1>index.htmlとは別のページに同じ実装がある、みたいなシチュエーションを再現</h1>
    <MessageAlert
      v-if="displayAlert"
      :variant="'info'"
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
import MessageAlert from '../components/MessageAlert.vue';

@Component({
  components: {
    MessageAlert,
  },
})

export default class MainPage extends Vue {
  displayAlert: boolean = true;
}
</script>
