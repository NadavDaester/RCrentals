<template>
  <section class="home">
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
    <div class="browse-category flex wrap space-around">
      <div v-for="category in categorys" :category="category" :key="category">
        <router-link class="col" :to="'/car/'+ category">
          <img src="../assets/hero3.jpg" height="180" />
          <h3>{{category}}</h3>
        </router-link>
      </div>
    </div>

    <h2>you might like</h2>
    <div class="might-like-category">
      <div v-for="car in cars" :car="car" :key="car._id">
        <router-link :to="'/car/details/'+ car._id" class="col">
          <!-- <img :src="car.primaryImgUrl" height="250" /> -->
          <img  :src="getImgUrl(car.primaryImgUrl)" height="250" />
          <h3>{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</h3>
          <h4>{{car.reviews[0].rating}}⭐(50) {{car.owner.fullName}}</h4>
        </router-link>
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
    return {
      categorys: ['sport','vintage','luxury']
    };
  },
  created() {
    this.$store.dispatch({ type: "loadCars" });
  },
  methods: {
      getImgUrl(imageName) {
         var images = require.context('../assets/cars/', false, /\.jpg$/)
         return images('./' + imageName + ".jpg")
     }
    // getUniqueList(arr) {
    //   return Array.from(new Set(arr));
    // }
  },
  computed: {
    cars() {
      return this.$store.getters.cars;
    },
    // categorys() {
    //   return this.getUniqueList(
    //     this.$store.getters.cars.map(c => c.tags).flat()
    //   );
    // }
  }
};
</script>
