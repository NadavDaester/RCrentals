<template>
  <section class="profile">
    <div class="profile-nav">
      <img src="../assets/default-user.jpg" width="150" />
      <h1>Welcome {{loggedInUser.fullName}}</h1>
      <h2>{{loggedInUser.email}}</h2>
      <!-- <h3>incoming msgs</h3> -->
      <router-link
        :to="'/profile/favoriteCar/'+loggedInUser.id"
        class="col profile-router"
      >My favorite cars</router-link>
      <router-link :to="'/profile/owncars/'+loggedInUser.id" class="col profile-router">My cars</router-link>
      <router-link :to="'/profile/reviews/'+loggedInUser.id" class="col profile-router">My reviews</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "profile",
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    }
  }
};
</script>
<style>
</style>