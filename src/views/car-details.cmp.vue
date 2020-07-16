<template>
  <section v-if="currCar">
    <div class="flex car-container">
      <h1 class="title">Car Details</h1>

      <div class="imgs-container grid">
        <img class="big-img" src="@/assets/hero3.jpg" />
        <img class="small-img" src="@/assets/hero3.jpg" />
        <img class="small-img" src="@/assets/hero3.jpg" />
        <img class="small-img" src="@/assets/hero3.jpg" />
        <img class="small-img" src="@/assets/hero3.jpg" />
      </div>

      <div class="details">
        <p>The Car</p>
        <div>
          <h1>{{currCar.vendor.company}} {{currCar.vendor.series}} {{currCar.model}}</h1>
          <div>{{currCar.reviews[0].rating}}⭐ (50) {{currCar.owner.fullName}}</div>
          <div class="features">
            <span>
              <img src="@/assets/img/seat.png" />
              {{currCar.features.seatsCount}}
            </span>
            <span>
              <img src="@/assets/img/door.png" />
              {{currCar.features.doorsCount}}
            </span>
          </div>
        </div>
        {{currCar.owner.fulName}}
      </div>
    </div>
  </section>
</template>

<script>
import { carService } from "../services/car-service.js";

export default {
  name: "toy-details",
  data() {
    return {
      currCar: null
    };
  },
  created() {
    const carId = this.$route.params.id;
    carService.getById(carId).then(currCar => (this.currCar = currCar));
  },
  computed: {},
  components: {}
};
</script>

<style>
</style>