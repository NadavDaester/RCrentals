

<template>
  <section class="flex">
    <div class="car-preview">
      <div class="card-img">
       <!-- <img v-if="!isLiked"  @click="toggleLike" class="like" src="@/assets/img/empty-heart.png" >
         <img v-else  @click="toggleLike"  class="like" src="@/assets/img/red-heart.png" > -->
          <span v-if="!isLiked" @click="toggleLike" class="like">🤍</span>
        <span v-else @click="toggleLike" class="like">❤️</span>
        <div class="price">${{car.price}}/day</div>
        <router-link :to="'/car/details/'+car._id">
          <img class="front-img" src="@/assets/hero2.jpg" />
        </router-link>
      </div>

      <div class="under-img flex">
        <div class="details flex">
          <div>{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</div>
          <div>{{car.reviews[0].rating}}⭐ (50) {{car.owner.fullName}}</div>
        </div>
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
    return {
      isLiked: false
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
    }
  },
  computed: {}
};
</script>

<style>
</style>