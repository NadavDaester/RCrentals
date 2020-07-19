<template>
  <section  class="profile-cars">
    <h1>your reviews:</h1>
    <div v-for="review in userReviews" :review="review" :key="review._id">
      <h2>{{review.txt}}</h2>
    </div>
  </section>
</template>

<script>
import userService from "../services/user-service.js";
import { carService } from "../services/car-service";
export default {
  name: "user-reviews",
  data() {
    return {
      userId: null,
      //   cars: [],
      userReviews: []
    };
  },
  created() {
    // this.$store.dispatch({ type: "loadCars" });
    this.userId = this.$route.params.id;
    // console.log(userId);
    // carService.query().then(cars => {
    // //   console.log(cars.reviews);
    //   this.cars = cars;
    //   this.cars.map(car => {
    //       console.log(car.reviews);
    //       this.reviews = car.reviews
    //   });
    // });
  },
  computed: {
    cars() {
      return this.$store.getters.cars;
    },
    reviews() {
      return this.cars.map(car => {
        return car.reviews;
      });
    },
    review() {
      //   console.log(this.reviews);
      //   return this.reviews.foreach(review => review.id === this.userId);
      var currReviews = this.reviews.forEach(reviews => {
        reviews.filter(review => {
          if (review.byUser._id === this.userId) {
            this.userReviews.push(review);
          }
        });
      });
      console.log(this.userReviews);
    }
  }
};
</script>
<style>
</style>