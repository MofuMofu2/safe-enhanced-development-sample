import { shallowMount } from '@vue/test-utils'
import MessageAlert from '@/components/MessageAlert.vue'

describe('MessageAlert.vue', ()=> {
  it('variantがinfoで渡ってきたときはクラス名もinfoにする', () => {
    const variant = 'info'
    const wrapper = shallowMount(MessageAlert, {
      propsData: { variant }
    });
    expect(wrapper.find(MessageAlert).classes('info')).toBe(true);
  });
});