import { shallowMount } from '@vue/test-utils'
import MainPage from '@/components/MainPage.vue'

describe('MainPage.vue', ()=> {
  it('displayAlertがtrueの場合、MessageAlertを表示しない', () => {
    const wrapper = shallowMount(MainPage);
    wrapper.setData({displayAlert: true});
    expect(wrapper.find(MainPage).attributes('message-alert')).toBe(false);
  });
});