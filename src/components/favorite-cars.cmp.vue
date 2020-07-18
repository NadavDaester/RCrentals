<template>
  <section class="profile-cars">
    <h1>Your favorite cars:</h1>
    <div v-for="car in favCars" :car="car" :key="car._id">
      <router-link :to="'/car/details/'+ car._id" class="col">
        <img :src="getImgUrl(car.primaryImgUrl)" height="200" />
        <h2>{{car.vendor.company}} {{car.vendor.series}} price:{{car.price}}</h2>
      </router-link>
    </div>
  </section>
</template>

<script>
import userService from "../services/user-service";
export default {
  name: "favorite-cars",
  data() {
    return {
      favCars: []
    };
  },
  methods: {
    getImgUrl(imageName) {
      var images = require.context("../assets/cars/", false, /\.jpg$/);
      return images("./" + imageName + ".jpg");
    }
  },
  created() {
    const userId = this.$route.params.id;
    userService.getById(userId).then(user => (this.favCars = user.favCars));
  }
};
</script>

<style>
</style>