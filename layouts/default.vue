<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <section class="content">
        <slot />
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  width: 100%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  .main {
    flex-grow: 1;
  }
}
</style>