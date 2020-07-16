<template>
  <section class="app-header flex">
    <router-link class="flex" to="/">
      <img class="header-logo-img" src="@/assets/logo.png" />
      <span class="logo-name">RCRentals</span>
    </router-link>
    <div class="flex nav">
      <p>List your car+</p>
      <p>about</p>
      <p>Log in</p>
      <p>Sign up</p>
      <p>user img</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style>
</style>