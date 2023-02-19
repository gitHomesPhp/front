<template>
  <div class="wrapper">
    <nav class="nav">
      <div class="nav__item">Устройства</div>
      <div class="nav__item">Бренды</div>
      <div class="nav__item">Сервисные центры</div>
    </nav>
    <Transition name="slide-fade">
      <nav class="nav-mobile" v-if="isOpen">
        <div class="nav-mobile__item">
          <RegionPicker />
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
    </Transition>
  </div>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
})

</script>

<style scoped lang="scss">
  .wrapper {
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
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-50px);
    opacity: 0;
  }
</style>