import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  CoHamburgerMenu,
  PrMapMarker,
  MdSearchRound,
  BiCaretUpFill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  GiHamburgerMenu,
} from 'oh-vue-icons/icons';
import router from './router';
import store from './store';
import App from './App.vue';

addIcons(
  CoHamburgerMenu,
  PrMapMarker,
  MdSearchRound,
  BiCaretUpFill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  GiHamburgerMenu,
);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(store).use(router).mount('#app');
