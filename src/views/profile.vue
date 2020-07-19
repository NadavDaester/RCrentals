<template>
  <section class="profile">
    <div class="profile-nav">
      <img src="../assets/default-user.jpg" width="150" />
      <!-- <h1>Welcome</h1> -->
      <h1>Welcome {{loggedInUser.fullName}}</h1>
      <h2>{{loggedInUser.email}}</h2>
      <!-- <h3>incoming msgs</h3> -->
      <router-link :to="'/profile/favoriteCar/'+loggedInUser._id" class="col profile-router">
        <div>
          <i class="el-icon-star-on"></i>
          My favorite cars
        </div>
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link :to="'/profile/owncars/'+loggedInUser._id" class="col profile-router">
        <div>
          <i class="el-icon-coordinate"></i>
          My cars
        </div>
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link :to="'/profile/reviews/'+loggedInUser._id" class="col profile-router">
        <div>
          <i class="el-icon-chat-line-round"></i>
          My reviews
        </div>
        <i class="el-icon-arrow-right"></i>
      </router-link>
      <router-link :to="'/profile/myOrder/'+loggedInUser._id" class="col profile-router">
        <div>
          <i class="el-icon-s-order"></i>
          My orders
        </div>
        <i class="el-icon-arrow-right"></i>
      </router-link>
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
  },
  created() {
    this.$store.dispatch({ type: "loadCars" });
  }
};
</script>
<style>
</style>