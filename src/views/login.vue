<template>
  <section class="flex signup-section">
<form  class="flex signup-form">
  <label>Email</label>
          <input v-model="email"  class="signup-form-group" type="email">
        <div>
          <label>Password</label>
          <input v-model="password" class="signup-form-group" type="password">
          <button class="signin-button">Sign Up</button>
        </div>
</form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>