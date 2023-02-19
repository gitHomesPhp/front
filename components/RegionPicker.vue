<template>
  <div class="pointer region-picker">
    <div @click="toggle">
      <svg data-v-4491dd8e="" class="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path class="" fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
        </path>
      </svg>
      {{current_region.name}}
    </div>
    <div class="region-picker__menu" v-if="isOpen">
      <div v-for="region in regions" @click="select(region)" class="region-picker__region">
        <span>{{region.name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocationStore } from "~/store/locationStore";
import {storeToRefs} from "pinia";

const locationStore = useLocationStore()

const { regions, current_region } = storeToRefs(locationStore)
const { setCurrentRegion } = useLocationStore()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
const select = async (region) => {
  await setCurrentRegion(region)
  isOpen.value = false
}

</script>

<style scoped lang="scss">
.region-picker {
  position: relative;
  &__menu {
    padding: .4rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgb(22 33 54 / 8%), 0 4px 16px 0 rgb(22 33 54 / 8%), 0 8px 16px 0 rgb(22 33 54 / 8%);
    z-index: 1000;

  }
  &__region {
    padding: 5px 10px;
    &:hover {
      background: #f4f5f8;
    }
  }
}
</style>