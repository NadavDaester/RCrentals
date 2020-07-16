<template>
  <section>
    <h1 class="title">Cars</h1>

    <car-list @removeCar="removeCar" :cars="cars"></car-list>
  </section>
</template>

<script>
export default {
  name: "browse-cars",
  created() {
      this.$store.dispatch({ type: "loadCars" });
      console.log('car');
  },
  data() {
    return {
        
    };
  },
  methods: {
    removeCar(id) {
      this.$store.dispatch({ type: "removeCar", id });
    },
    
   
  },
  computed: {
    cars() {
      return this.$store.getters.cars;
    },
  
  },
  components: {
    carList,
    carFilter
  }
};

import carFilter from "../components/car-filter.cmp.vue";
import carList from "../components/car-list.cmp.vue";
</script>


