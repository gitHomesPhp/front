<template>
  <div class="wrapper">
    <nav class="nav">
      <div class="nav__item">Устройства</div>
      <div class="nav__item">Бренды</div>
      <div class="nav__item">Сервисные центры</div>
    </nav>
    <nav class="nav-mobile" v-if="isOpen">
      <div class="nav-mobile__item">
        <svg data-v-4491dd8e="" class="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path class="" fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
          </path>
        </svg>
        Санкт-Петербург
      </div>
      <div class="nav-mobile__item">
        <nuxt-link to="/device">
          Устройства
        </nuxt-link>

      </div>
      <div class="nav-mobile__item">
        <nuxt-link to="/brand">
          Бренды
        </nuxt-link>
      </div>
      <div class="nav-mobile__item">
        <nuxt-link to="/service-center">
          Сервисные центры
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
})

</script>

<style scoped lang="scss">
  .wrapper {
    //position: relative;
    .nav-mobile {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 43px;
      left: 0;
      width: 100vw;
      max-width: 100vw;
      background-color: #fff;
      box-shadow: 0 8px 16px 0 rgb(22 33 54 / 8%), 0 4px 16px 0 rgb(22 33 54 / 8%), 0 8px 16px 0 rgb(22 33 54 / 8%);
      z-index: 1000;
      &__item {
        padding: 5px;
        cursor: pointer;
        font-size: 20px;
        a {
          text-decoration: none;
          color: #2c4a80;
          font-weight: 500;
          display:inline-block;
          &:after {
            background-color:
                #ff6000;
            display: block;
            content: "";
            height: 3px;
            width: 0;
            -webkit-transition: width .3s ease-in-out;
            -moz-transition: width .3s ease-in-out;
            transition: width .3s ease-in-out;
          }
          &:hover:after,  {
            width: 100%;
          }
        }
      }
    }
  }
  .nav {
    @media (max-width: 576px) {
      display: none;
    }
    display: flex;
    &__item {
      padding: 5px;
      cursor: pointer;
      &:after {
        background-color:
            #ff6000;
        display: block;
        content: "";
        height: 3px;
        width: 0;
        -webkit-transition: width .3s ease-in-out;
        -moz-transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
      }
      &:hover:after, &:hover:focus {
        width: 100%;
      }
    }
  }
</style>