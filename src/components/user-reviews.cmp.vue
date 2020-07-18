<template>
  <section>
    <h1>your reviews:</h1>
    <div v-for="review in reviews" :review="review" :key="review._id">
        <!-- <h2>{{review}}</h2> -->
    </div>
  </section>
</template>

<script>
import userService from "../services/user-service.js";
import { carService } from '../services/car-service';
export default {
  name: "user-reviews",
  data() {
    return {
      reviews: []
    };
  },
  created() {
    const userId = this.$route.params.id;
    carService.getUserReviews(userId).then(reviews => (this.reviews = reviews));
  }
};
</script>
<style>
</style>