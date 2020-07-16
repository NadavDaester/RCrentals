<template>
  <section class="app-header flex" >


      <router-link to="/"> <img class="header-logo-img" src="@/assets/logo.png"> RCRentals</router-link>
      <div class="flex">
        <router-link to="/about">About</router-link>  
          <p>list your car</p>
          <p>learn more</p>
          <p>log in</p>
          <p>sign up</p>
          <p>user img || default img</p>
      </div>
  </section>
</template>

<script>
export default {
name:'appHeader',

}
</script>

<style>

</style>