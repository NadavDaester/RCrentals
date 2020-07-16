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
      <div class="car-info flex">
        <div class="details">
          <div>
            <h1>{{currCar.vendor.company}} {{currCar.vendor.series}} {{currCar.model}}</h1>
            <div>{{currCar.reviews[0].rating}}⭐ (50) {{currCar.owner.fullName}}</div>
            <div class="features grid">
              <span>
                <img src="@/assets/img/seat.png" />
                {{currCar.features.seatsCount}}
              </span>
              <span>
                <img src="@/assets/img/door.png" />
                {{currCar.features.doorsCount}}
              </span>
              <span>
                <img src="@/assets/img/gas.png" />
                gas
              </span>
              <span>
                <img src="@/assets/img/kpl.png" />
                kpl: {{currCar.features.kpl}}
              </span>
            </div>
          </div>
        </div>

        <div class="payment-details flex">
          <h3>price: $ {{currCar.price}} /day</h3>
          <span>rent start: 12/07/20</span>
          <span>rent end: 21/08/2020</span>
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