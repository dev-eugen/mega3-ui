import { createApp } from 'vue';
import Dev from './serve.vue';
import "../src/assets/tailwind.css"
import Mega3Ui from '@/entry.esm';
import * as icons from '@heroicons/vue/solid'


const app = createApp(Dev)


app.directive('click-outside', {
    beforeMount(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event, el);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      }
  })

app.use(Mega3Ui)
Object.entries(icons).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    app.component(String(componentName), component)
  }
})
app.mount('#app');
