<template>
  <div class="brands-row">

    <div class="brands-widget widget">
      <span class="row-label">Бренды</span>
      <div class="brands-wrapper">
        <div v-for="brand in brandObjects" class="brand">
          <nuxt-link :href="`/${current_region.slug}/brand/${brand.slug}`">
            <div class="brand-wrapper" v-if="brand.hasImage">
              <img :src="`/img/brand/${brand.name}.svg`" width="50">
            </div>
            <div v-else class="brand-wrapper">
              {{brand.name}}
            </div>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useBrandStore} from "~/store/brandStore";
import {useLocationStore} from "~/store/locationStore";

const { brands, brandsWithImage, brandObjects } = useBrandStore()
const { current_region } = useLocationStore()

</script>

<style scoped lang="scss">
  .brands-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .brands-row {
    align-items: center;
  }
  .brands-widget {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .brand {
      padding: .4rem;
    }
    .brand-wrapper {
      border: 1px solid #162136;
      border-radius: 4px;
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      justify-content: space-around;
    }
  }
</style>