<template>
  <div class="header">
    <div class="header__logo header__item pointer">
      <img src="~/assets/svg/logo.svg" alt="logo" width="300">
    </div>

      <div v-if="deviceCookie === 'desktop'" class="header__item">
        <RegionPicker />
      </div>

    <TheNav class="header__item" :is-open="isOpen"/>
    <div v-if="deviceCookie === 'mobile'" class="header__item pointer" @click="toggleMobileMenu">
      <svg class="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: rgb(22, 33, 54);">
        <path class="" fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/appStore" ;
import {storeToRefs} from "pinia";
const { device } = storeToRefs(useAppStore())
const deviceCookie = useCookie('device');
const isOpen = ref(false)

watch(() => device.value, () => {
  deviceCookie.value = device.value
  if (deviceCookie.value === 'desktop') {
    isOpen.value = false
  }
  nextTick()
})

const openMenu = () => {
  isOpen.value = true
}
const closeMenu = () => {
  isOpen.value = false
}

const toggleMobileMenu = () => {
  if (isOpen.value === true) {
    closeMenu()
  } else {
    openMenu()
  }
}

</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(22,33,54,.16);
  //position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  color: #162136;
  font-size: 16px;
  justify-content: space-between;
  &__logo {
    width: 230px;
    min-width: 230px;
    max-width: 230px;
    img {
      width: 230px;
      min-width: 230px;
      max-width: 230px;
    }
  }
  &__item {
    padding: 5px;
  }
}
</style>