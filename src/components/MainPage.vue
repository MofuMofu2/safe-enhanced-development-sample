<template>
  <div id="main-page">
    <div>index.htmlとは別のページに同じ実装がある、みたいなシチュエーションを再現</div>
    <MessageAlert
      v-if="!displayAlert"
      :variant="'info'"
    />
    <div class="toggle-alert">
      <input
        id="toggle-message-alert"
        type="checkbox"
        v-model="test"
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
  test: boolean = true;
  
  // どうにかして!ifにしたいけどうまくいってない
}
</script>
