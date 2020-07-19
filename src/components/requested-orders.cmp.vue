<template>
   <section class="profile-cars">
    <h1>Requests:</h1>
    <!-- <div v-for="order in orders" :order="order" :key="order._id" class="order-list">
        <router-link :to="'/car/details/'+order.carId" class="col">
          <h2>owner: {{order.owner.fullName}}</h2>
          <h2>Pickup date: {{order.pickupDate}}</h2>
          <h2>Total price: {{order.price}}</h2>
        </router-link>
    </div> -->
  </section>
</template>

<script>
import orderService from "../services/order-service.js";
export default {
//  created() {
//     const userId = this.$route.params.id;
//     orderService
//       .getOrdersByOwnerId(userId)
//       .then(orders => (this.orders = orders));  
//   },
}
</script>

<style>

</style>