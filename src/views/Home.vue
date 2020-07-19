<template>
  <section>
    <div class="bgc-img">
      <div class="text-img">
        <h1>Way better than a rental car</h1>
        <h3>Book unforgettable cars from trusted hosts around the world</h3>
        <div class="book-bar">
          <input type="text" id="search" placeholder="enter a city" />
        </div>
      </div>
    </div>
    <section class="flex home-section">
      <main class="home">
        <h2>Browse by category</h2>
        <div class="browse-category flex wrap space-around">
          <div v-for="category in categorys" :category="category" :key="category">
            <router-link class="col main-categories-container" :to="'/car/'+ category">
              <!-- <img src="../assets/hero3.jpg" height="180" /> -->
              <img class="main-categories-img" :src="getImgUrl(category)"/>
              <h3>{{category}}</h3>
            </router-link>
          </div>
        </div>
        <!-- <img :src="car.primaryImgUrl" height="250" /> -->

        <h2>you might like</h2>
        <div class="might-like-category">
          <carPreview v-for="car in cars.slice(cars.length-3)" :car="car" :key="car._id"></carPreview>
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
      </main>
    </section>
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
    return {
      categorys: ["sport", "vintage", "luxury", "convertible"]
    };
  },
  created() {
    this.$store.dispatch({ type: "loadCars" });
  },
  methods: {
    getImgUrl(imageName) {
      var images = require.context("../assets/cars/", false, /\.jpg$/);
      return images("./" + imageName + ".jpg");
    }
    // getUniqueList(arr) {
    //   return Array.from(new Set(arr));
    // }
  },
  computed: {
    cars() {
      return this.$store.getters.cars;
    }
    // categorys() {
    //   return this.getUniqueList(
    //     this.$store.getters.cars.map(c => c.tags).flat()
    //   );
    // }
  }
};
</script>
