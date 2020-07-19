

<template>
  <section class="flex">
    <div class="car-preview">
      <div class="card-img">
        <img
          v-if="!isLiked&&loggedInUser"
          @click="toggleLike"
          class="like"
          src="@/assets/img/empty-heart.png"
        />
        <img
          v-else-if="isLiked&&loggedInUser"
          @click="toggleLike"
          class="like"
          src="@/assets/img/red-heart.png"
        />
        <div class="price">${{car.price}}/day</div>
        <router-link :to="'/car/details/'+car._id">
          <img class="front-img" :src="getImgUrl(car.primaryImgUrl)" />
        </router-link>
      </div>

      <div class="under-img flex">
        <div class="details flex">
          <div class="capi">{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</div>
          <div>
            {{car.reviews[0].rating}}
            <span class="star">★</span>
            <span class="capi">(50) {{car.owner.fullName}}</span>
            
          </div>
        </div>
        <button>For more details</button>
      </div>
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
      this.$emit("updateUserFavs", this.car, this.isLiked);
    },
    getImgUrl(imageName) {
      var images = require.context("../assets/cars/", false, /\.jpg$/);
      return images("./" + imageName + ".jpg");
    }
  },

  computed: {
    loggedInUser() {
      console.log(this.$store.getters.loggedInUser);
      return this.$store.getters.loggedInUser;
    }
  }
};
</script>

<style>
</style>