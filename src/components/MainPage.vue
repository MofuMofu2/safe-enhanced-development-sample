<template>
<!-- テスト書きたいのでコンポーネントに検証用の物を描画 -->
  <div id="main-page">
    sample-app
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
      <label for="checkbox">MessageAlert status is {{ displayAlert }} .</label>
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
  displayAlert: boolean = true;
}
</script>
