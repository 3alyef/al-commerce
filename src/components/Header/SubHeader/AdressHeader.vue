<template>
  <a class="adressHeader" href="#">
    <span>
      <v-icon name="pr-map-marker" scale="1.1"/>
    </span>
    <div class="adressContainer">
      <div class="pAdress">A entrega será feita em {{ city }} {{ cep }}</div>
      <div class="h3Adress">Atualizar CEP</div>
    </div>
  </a>
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
  text-decoration: none;
  width: 245px;
  max-width: 50%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .adressContainer {
    display: flex;
    flex-direction: column;
    min-height: 40px;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    gap: 5px;
    cursor: pointer;

    .pAdress {
      font-size: 12px;
      line-height: 14px;
      height: 14px;
      font-weight: 400;
      display: inline-table;
    }

    .h3Adress {
      font-size: 14px;
      line-height: 15px;
      font-weight: 700;
    }
  }
}

</style>
