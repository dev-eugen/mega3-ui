import { createApp } from 'vue';
import Dev from './serve.vue';
import "../src/assets/tailwind.css"
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import Mega3Ui from '@/entry.esm';

const app = createApp(Dev);
app.use(Mega3Ui);

app.mount('#app');
