<template>
  <section class="app-header flex">
    <router-link class="flex" to="/">
      <img class="header-logo-img" src="@/assets/logo.png" />
      <span class="logo-name">RCRentals</span>
    </router-link>
    <div class="flex nav">
      <p>List your car</p>
      <router-link to="/about">About</router-link>
      <router-link to="/login">Log In</router-link>
      <router-link to="/signUp">Sign Up</router-link>
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