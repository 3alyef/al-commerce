<template>
  <div class="loginBtn">
    <span v-if="isLogado">
      Logado
    </span>
    <span v-else>
      Login
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginComponent',
  setup() {
    const isLogado = ref<boolean>(false);

    return {
      isLogado,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";

.loginBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  background-color: $white;
}

@media (max-width: 995px) {
  .loginBtn {
    padding: 8px;
  }
}
</style>
