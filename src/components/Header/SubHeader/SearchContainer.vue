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
    </div>
    <label for="search-input" class="search-input-container">
      <input
      id="search-input"
      name="search-input"
      type="text"
      v-model="searchContent"
      placeholder="Pesquisar al.commerce.com"
      />
    </label>
    <span class="searchBtn">
      <button @click="handleSearch">
        <v-icon name="md-search-round" scale="1.25"/>
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchContainer',
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

    function handleSearch() {
      if (props.search) {
        props.search();
      }
    }

    function openCategory() {
      isOpen.value = !isOpen.value;
    }

    return {
      searchContent,
      handleSearch,
      categoryName: props.category,
      openCategory,
      isOpen,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";

.searchContainer {
  display: flex;
  align-items: center;

  .openCategoryBtn {
    display: flex;
    padding: 6px 11px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 5px 0px 0px 5px;
    background-color: $tsl-4;
    align-self: stretch;
    cursor: pointer;

    h2 {
      color: $black-transparent;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .search-input-container {
    display: flex;
    width: 300px;
    align-items: center;
    gap: 10px;
    background-color: $white;
    align-self: stretch;

    input {
      width: 100%;
      align-self: stretch;
      color: $inputColor;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 5px;
    }
  }

  .searchBtn {
    display: flex;
    width: 40px;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0px 5px 5px 0px;
    background-color: $tsl-4;

    button {
      display:flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;

    }
  }
}

.invertObj {
  transform: rotate(180deg);
}

</style>
