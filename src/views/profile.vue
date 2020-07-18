<template>
  <section class="profile">
    <div class="profile-nav">
      <h1>Welcome {{loggedInUser.fullName}}</h1>
      <h2>{{loggedInUser.email}}</h2>
      <h3>incoming msgs</h3>
      <h3 @click="showFevCars">favorite cars</h3>
      <h3 @click="showOwnedCars">owned cars</h3>
      <h3>my reviews</h3>
    </div>
    <div v-if="isShownCars" class="owned-cars">
      <h1>Owned cars:</h1>
      <div v-for="car in cars" :car="car" :key="car._id">
        <img :src="getImgUrl(car.primaryImgUrl)" height="200" />
        <h2>{{car.vendor.company}} {{car.vendor.series}}</h2>
        <h2>{{car.location.city}}</h2>
      </div>
    </div>
    <div v-if="isShownFavCars" class="owned-cars">
      <h1>Your favorite cars:</h1>
      <div v-for="car in favCars" :car="car" :key="car._id">
        <router-link :to="'/car/details/'+ car._id" class="col">
          <img :src="getImgUrl(car.primaryImgUrl)" height="200" />
          <h2>{{car.vendor.company}} {{car.vendor.series}} price:{{car.price}}</h2>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { carService } from "../services/car-service.js";
import userService from "../services/user-service.js";
export default {
  name: "profile",
  data() {
    return {
      cars: [],
      user: null,
      favCars: [],
      isShownCars: false,
      isShownFavCars: false
    };
  },
  created() {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    }
  },
  methods: {
    getImgUrl(imageName) {
      var images = require.context("../assets/cars/", false, /\.jpg$/);
      return images("./" + imageName + ".jpg");
    },
    showOwnedCars() {
      const userId = this.$route.params.id;
      carService.getByOwnerId(userId).then(cars => (this.cars = cars));
      this.isShownCars = true;
      this.isShownFavCars = false;
    },
    showFevCars() {
      const userId = this.$route.params.id;
      userService.getById(userId).then(user => {
        this.favCars = user.favCars;
        this.isShownCars = false;
        this.isShownFavCars = true;
      });
    }
  }
  //check about
};
</script>
<style>
</style>