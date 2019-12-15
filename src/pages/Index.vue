<template>
  <q-page>
    <div class="absolute-center flex flex-center">
      <quasar-logo id="logo" />
      <span class="text-h4">{{$route.name}}</span>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    "quasar-logo": require("src/assets/quasarLogo.vue").default
  }
};
</script>

<style>
</style>