<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/appStore" ;
import { useLocationStore } from "~/store/locationStore";
import { useCountInfoStore } from "~/store/countInfoStore";
import { useBrandStore } from "~/store/brandStore"

const {setDeviceDesktop, setDeviceMobile} = useAppStore()
const {fetchRegions} = useLocationStore()
const {fetchCountInfo} = useCountInfoStore()
const {fetchBrands} = useBrandStore()

await fetchRegions();
await fetchCountInfo();
await fetchBrands();


onMounted(async () => {
  if (innerWidth > 576) {
    await setDeviceDesktop()
  }
  if (innerWidth <= 576) {
    await setDeviceMobile()
  }
  window.addEventListener('resize', async () => {
    if (innerWidth > 576) {
      await setDeviceDesktop()
      await nextTick()
    }
    if (innerWidth <= 576) {
      await setDeviceMobile()
      await nextTick()
    }
  })
})
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
