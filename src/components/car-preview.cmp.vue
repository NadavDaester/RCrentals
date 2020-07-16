

<template>
  <section>
    <div class="car-preview">

      <div class="card-img">
        <button class="like-btn"> 🤍 </button>
        <div class="price"> ${{car.price}}/day </div>
        <router-link :to="'/car/details/'+car._id">
          <img src="@/assets/hero2.jpg" />
        </router-link>
      </div>

      <div class="details flex">
        <div>{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</div>
         <div>  {{car.reviews[0].rating}}⭐ (50) {{car.owner.fullName}}  </div> 
        <button>book instantly</button>
      </div>
      <!-- <img :src="require(`@/assets/img/${images[0]}.png`)" /> -->
      <div class="actions flex"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "car-preview",
  props: {
    car: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
</style>