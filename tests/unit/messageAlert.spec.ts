import { shallowMount } from '@vue/test-utils'
import MessageAlert from '@/components/MessageAlert.vue'

describe('MessageAlert.vue', ()=> {
  it('variantがinfoで渡ってきたときは背景を#b2dfdbにする', () => {
    const variant = 'info'
    const wrapper = shallowMount(MessageAlert, {
      propsData: { variant }
    });
    expect(wrapper.find(MessageAlert).attributes().style).toBe('background-color: #b2dfdb;');
  });
  it('variantがwarningで渡ってきたときは背景を#fff9c4にする', () => {
    const variant = 'warning'
    const wrapper = shallowMount(MessageAlert, {
      propsData: { variant }
    });
    expect(wrapper.find(MessageAlert).attributes().style).toBe('background-color: #fff9c4;');
  });
  it('variantがerrorで渡ってきたときは背景を#ffcdd2にする', () => {
    const variant = 'warning'
    const wrapper = shallowMount(MessageAlert, {
      propsData: { variant }
    });
    expect(wrapper.find(MessageAlert).attributes().style).toBe('background-color: #ffcdd2;');  });
})