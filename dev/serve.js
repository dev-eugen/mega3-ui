import { createApp } from 'vue';
import Dev from './serve.vue';
import "../src/assets/tailwind.css"
import Mega3Ui from '@/entry.esm';
import * as icons from '@heroicons/vue/solid'


const app = createApp(Dev)


app.directive('click-outside', {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
})

app.use(Mega3Ui)
Object.entries(icons).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    app.component(String(componentName), component)
  }
})
app.mount('#app');
