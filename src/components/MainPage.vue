<template>
<!-- テスト書きたいのでコンポーネントに検証用の物を描画 -->
  <div id="main-page">
    sample-app
    <MessageAlert
      :variant="'info'"
    ></MessageAlert>

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

export default class MainPage extends Vue {}
</script>
