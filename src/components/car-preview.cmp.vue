

<template>
  <section>
    <div class="car-preview flex">
      <h3>car owner: {{car.owner.fullName}}</h3>
      <h3>Price: {{car.price}}$</h3>
      <h3> model:  {{car.model}}</h3>
      <h3>Type: {{car.type}}</h3>
      <!-- <img :src="require(`@/assets/img/${images[0]}.png`)" /> -->
      <div class="actions flex">
        <router-link :to="'/car/details/'+car._id">details</router-link>

     <button  @click.stop="removeCar(car._id)"> remove    </button>

        <button title="Edit car" @click.stop="edit">edit</button>
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
    return {};
  },
  methods: {
    removeCar(id) {
      this.$emit("removeCar", id);
    },
    edit() {
      this.$router.push("car/edit/" + this.car._id);
    }
  },
  computed: {}
};
</script>

<style>
</style>