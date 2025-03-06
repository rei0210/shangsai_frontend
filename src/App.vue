<script setup>

</script>

<template>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->
<!--    </div>-->
<!--  </header>-->

<!--  <main>-->
<!--&lt;!&ndash;    <TheWelcome />&ndash;&gt;-->
<!--      <MainPage/>-->
<!--  </main>-->
<!--  <main>-->
      <router-view/>
<!--  </main>-->

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
#app{
    max-width: 1024px;
    margin: 0 auto;
}

@media (max-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
<!--<script setup lang="ts">-->
<!--import MainPage from "@/components/page/MainPage.vue";-->
<!--</script>-->