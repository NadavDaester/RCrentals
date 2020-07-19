<template>
  <section class="profile-cars">
      <h1>Your orders:</h1>
      <!-- <div v-for="order in orders" :order="order" :order="order._id">
          <h1>{{order}}</h1>
      </div> -->
  </section>
</template>

<script>
import orderService from '../services/order-service.js'
export default {
name:"user-order",
data(){
    return{
        orders:[]
    }
},
 created() {
      const userId = this.$route.params.id;
      orderService.getOrdersByBuyerId(userId).then(orders => this.orders = orders)
 }

}
</script>

<style>

</style>