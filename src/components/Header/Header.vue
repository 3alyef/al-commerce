<template>
  <header class="header">
    <SubHeader />
    <div>
      <!--Links-->
      <button>
        <v-icon name="co-hamburger-menu" />
        <h3>Todos</h3>
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SubHeader from './SubHeader/SubHeader.vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    SubHeader,
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";
.header {
  display: flex;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $tsl-1;
  flex-direction: column;

}

</style>
