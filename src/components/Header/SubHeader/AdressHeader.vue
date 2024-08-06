<template>
  <div class="adressHeader">
    <span>
      <v-icon name="pr-map-marker" />
    </span>
    <div>
      <p>A entrega será feita em {{ city }} {{ cep }}</p>
      <h3>Atualizar CEP</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdressHeader',
  props: {
    city: {
      type: String,
      required: true,
    },
    cep: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";
.adressHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 5px;
  color: white;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    min-height: 40px;
    align-items: flex-start;
    font-size: 12px;
    gap: 5px;
    cursor: pointer;

    p {
      font-size: 11.9px;
      font-weight: 300;
    }

    h3 {
      font-weight: 600;
    }
  }
}

</style>
