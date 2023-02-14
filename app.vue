<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/appStore" ;
const {setDeviceDesktop, setDeviceMobile} = useAppStore()

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
