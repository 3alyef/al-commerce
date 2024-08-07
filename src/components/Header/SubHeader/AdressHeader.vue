<template>
  <a class="adressHeader" href="#">
    <span class="localLogo" >
      <v-icon name="pr-map-marker" scale="1.1"/>
    </span>
    <div class="adressContainer"  v-if="Number(windowWidth) >= 630">
      <p class="pAdress">
        <span class="subData">
          A entrega será feita em
        </span>
        {{ ` ${city}` }} {{ cep }}
      </p>
      <p class="h3Adress">
        Atualizar CEP
      </p>
    </div>
  </a>
</template>

<script lang="ts">
import {
  defineComponent, onBeforeUnmount, onMounted, ref,
} from 'vue';

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
  setup() {
    const category = ref<string>('Livros');
    const windowWidth = ref<number>(window.innerWidth);

    function search() {
      console.log('On search');
    }

    const onResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', onResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize);
    });

    return {
      category,
      search,
      windowWidth,
    };
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

  .localLogo {
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

@media (max-width: 645px) {

}

@media (max-width: 780px) {
  .subData {
    display: none;
  }
}

</style>
