import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/organisms/OHelloWorld/OHelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).not.toBeUndefined();
  });
});
