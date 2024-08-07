<template>
  <div class="searchContainer">
    <div
    @click="openCategory"
    @keydown.enter="openCategory"
    tabindex="0"
    role="button"
    class="openCategoryBtn">
      <h2>
        {{ categoryName }} <v-icon
        id="categoryOpen"
        name="bi-caret-up-fill"
        :class="isOpen ? undefined : 'invertObj'" />
      </h2>
      <span class="optSubContainer">
        <OptionsComponent :isOn="isOpen" :whatOneSelected="selected"
        :topBottomStyle="{top: '2.5px'}"/>
      </span>
    </div>
    <form @submit.prevent="handleSearch" method="GET" role="search" class="formSearch">
      <label for="search-input" class="search-input-container">
        <input
        id="search-input"
        name="search-input"
        type="text"
        v-model="searchContent"
        :placeholder="Number(windowWidth) > 750 ? 'Pesquisar al.commerce.com' : 'Pesquisar'"
        />
      </label>
      <span class="searchBtn">
        <button type="submit">
          <v-icon name="md-search-round" scale="1.25"/>
        </button>
      </span>
    </form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onBeforeUnmount, onMounted, ref,
} from 'vue';
import OptionsComponent from '@/components/OptionsComponent/OptionsComponent.vue';

export default defineComponent({
  name: 'SearchContainer',
  components: {
    OptionsComponent,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    search: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const searchContent = ref<string>('');
    const isOpen = ref<boolean>(false);
    const selected = ref<string>('Livro');
    const windowWidth = ref<number>(window.innerWidth);

    function handleSearch() {
      if (props.search) {
        console.log('submit');
        props.search();
      }
    }

    function openCategory() {
      isOpen.value = !isOpen.value;
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
      searchContent,
      handleSearch,
      categoryName: props.category,
      openCategory,
      isOpen,
      selected,
      windowWidth,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";

.searchContainer {
  width: 100%;
  display: grid;
  grid-template-columns: auto 72.5%;

  .openCategoryBtn {
    display: flex;
    padding: 6px 11px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
    background-color: $tsl-4;
    align-self: stretch;
    cursor: pointer;
    position: relative;

    h2 {
      color: $black-transparent;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .optSubContainer {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  .search-input-container {
    display: flex;
    width: 300px;
    align-items: center;
    gap: 10px;
    background-color: $white;
    align-self: stretch;
    cursor: pointer;

    input {
      width: 100%;
      align-self: stretch;
      color: $inputColor;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 5px;
      font-size: 18px;
    }
  }

  .searchBtn {
    display: flex;
    width: 50px;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    border-radius: 0px 5px 5px 0px;
    background-color: $tsl-4;

    button {
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;

    }
  }

  .formSearch {
    min-height: 100%;
    display: flex;
  }
}

.invertObj {
  transform: rotate(180deg);
}

</style>
