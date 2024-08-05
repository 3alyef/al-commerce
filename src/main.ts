import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { FaFlag, RiZhihuFill, CoHamburgerMenu } from 'oh-vue-icons/icons';
import router from './router';
import store from './store';
import App from './App.vue';

addIcons(FaFlag, RiZhihuFill, CoHamburgerMenu);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(store).use(router).mount('#app');
