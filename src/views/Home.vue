<template>
  <section>
    <div class="bgc-img">
      <div class="text-img">
        <h1>Way better than a rental car</h1>
        <h3>Book unforgettable cars from trusted hosts around the world</h3>
        <div class="book-bar">
          <input type="text" placeholder="enter a city" name id />
        </div>
      </div>
    </div>
    <h2>Browse by category</h2>
    <div class="browse-category flex space-around wrap">
      <router-link to="/car">
        <div>
          <img src="../assets/hero3.jpg" height="150" />
          <h3>Vintage</h3>
        </div>
      </router-link>
      <router-link to="/car">
        <div>
          <img src="../assets/hero3.jpg" height="150" />
          <h3>Luxury</h3>
        </div>
      </router-link>
      <router-link to="/car">
        <div>
          <img src="../assets/hero3.jpg" height="150" />
          <h3>Sports</h3>
        </div>
      </router-link>
    </div>

    <h2>you might like</h2>
    <div class="might-like-category flex space-around wrap">
      <div v-for="car in cars" :car="car" :key="car._id">
        <img src="../assets/hero3.jpg" height="300" />
        <h3>{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</h3>
        <h4>{{car.reviews[0].rating}}⭐ (50) {{car.owner.fullName}}</h4>
      </div>
    </div>
    <div>
      <h2 class="center">Discover the world’s largest car sharing marketplace</h2>
      <div class="flex about-info space-around">
        <div>
          <h4>Endless options</h4>Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it.
        </div>
        <div>
          <h4>24/7 customer support</h4>Rest easy knowing that everyone in the Turo community is screened, and 24/7 customer support and roadside assistance are just a click away.
        </div>
        <div>
          <h4>Drive confidently</h4>Drive confidently with your choice of protection plans — all plans include varying levels of liability insurance from Liberty Mutual provided through Turo Insurance Agency and physical damage protection.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { carService } from "../services/car-service.js";
import carPreview from "@/components/car-preview.cmp.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    carPreview
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadCars" });
  },
  computed: {
    cars() {
      return this.$store.getters.cars;
    }
  }
};
</script>
