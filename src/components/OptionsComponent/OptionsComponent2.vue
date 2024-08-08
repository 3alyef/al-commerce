<template>
  <div class="OptionsContainer-base">
    <div
      :class="['optionsContainer-main', isOnVar ? undefined : 'opt-small']"
      :style="topBottom"
    >
      <ul :style="isOnVar ? {maxHeight: '15em'} : {maxHeight: '0em', padding: '0'} ">
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
        <li>
          <div>
            <span>
              Eletrônicos
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'OptionsComponent',
  props: {
    isOn: {
      type: Boolean,
      required: true,
    },
    topBottomStyle: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isOnVar = computed(() => props.isOn);
    const topBottom = computed(() => props.topBottomStyle);

    return {
      isOnVar,
      topBottom,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/optionsComponent";

.opt-small {
  width: 55%;
}

.opt-full {
  width: 100%;
}

.optionsContainer-main-small {
  max-height: 0em;
}

.optionsContainer-main-full {
  max-height: 15em;
}
</style>
