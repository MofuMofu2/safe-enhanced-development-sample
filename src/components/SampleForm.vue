<template>
  <div id="sample-form">
    <div class="form-block">
      <label for="name">ユーザー名</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="inputName"
      >
    </div>
    <div class="form-block">
      <label for="email">メールアドレス</label>
      <input
        type="text"
        id="email"
        name="email"
        v-model="inputEmail"
      >
    </div>
    <div class="form-block">
      <label for="contact">お問い合わせ内容</label>
      <input
        type="textarea"
        id="contact"
        name="contact"
        v-model="inputContactDetail"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class SampleForm extends Vue {
  inputName: string = '';
  inputEmail: string = '';
  inputContactDetail: string = '';
}
</script>
<style scoped>
#sample-form {
  margin: 5rem;
}
.form-block {
  text-align: left;
}
label {
  display: block;
}
</style>