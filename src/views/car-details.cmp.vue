<template>
  <section v-if="car">
    <div class="flex car-container">
      <div class="imgs-container grid">
        <img class="big-img" src="@/assets/hero3.jpg" />
        <img @click="switchImg" class="small-img" src="@/assets/hero3.jpg" />
        <img @click="switchImg" class="small-img" src="@/assets/hero3.jpg" />
        <img @click="switchImg" class="small-img" src="@/assets/hero3.jpg" />
        <img @click="switchImg" class="small-img" src="@/assets/hero3.jpg" />
      </div>

      <div class="rest-page flex">
        <div class="car-info flex">
          <div class="details">
            <div>
              <h1>{{car.vendor.company}} {{car.vendor.series}} {{car.model}}</h1>
              <h3>{{car.reviews[0].rating}}⭐ (50) {{car.owner.fullName}}</h3>
              <div class="features grid">
                <span>
                  <img src="@/assets/img/seat.png" />
                  {{car.features.seatsCount}} seats
                </span>
                <span>
                  <img src="@/assets/img/door.png" />
                  {{car.features.doorsCount}} doors
                </span>
                <span>
                  <img src="@/assets/img/gas.png" />
                  Gas
                </span>
                <span>
                  <img src="@/assets/img/kpl.png" />
                  {{car.features.kpl}} kpl
                </span>
              </div>
              <p>{{car.desc}}</p>
            </div>
          </div>
          <div class="payment-details flex">
            <h1>price: $ {{car.price}} /day</h1>
            <span>rent start: 12/07/20</span>
            <span>rent end: 21/08/2020</span>
            <button @click="openBookModal">book</button>
            <span class="free-cancellation">
              <img src="@/assets/img/like.png" /> Free cancellation
            </span>
          </div>
          {{car.owner.fulName}}
        </div>

        <div class="Reviews">
          <h4>Reviews</h4>
          <div class="review flex">
            <img src alt="userImg " />
            <div class="review-details flex">
              <span>⭐⭐⭐⭐⭐</span>
              <span class="reviwer-name">userName</span>
              <span class="reviwe-time">datepublished</span>
              <p>Sweet car and a pleasant experience! Couldn't have had a better first host!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{bookModal}} {{!!loggedInUser}}
    <div class="book-modal" v-if="bookModal&&!loggedInUser">
      <form @submit.prevent="onBook" class="flex booking">
        <label>Full Name</label>
        <input v-model="fullName" class="signup-form-group" type="text" />
        <label>Phone Number</label>
        <input type="tel" v-model="phoneNumber" />
        <label>Email</label>
        <input v-model="email" class="signup-form-group" type="email" />
        <div class="flex booking-button">
          <!-- change fake price !! -->
          <p>
            Total Price : {{fakePrice}}
            <span>Only!</span>
          </p>
          <button>Book Now !</button>
        </div>
      </form>
    </div>
    <div v-else-if="bookModal&&loggedInUser" class="book-modal">
      {{loggedInUser}}
      <form @submit.prevent="onBook" class="flex booking">
        <label>your name:{{loggedInUser.fullName}}</label>
        <label>your email: {{loggedInUser.email}}</label>
        <label>pick up date: <input type="date" v-model="pickupDate"></label>
        <label>
          days:
          <input type="number" v-model="daysCount" />
        </label>

        <div class="flex booking-button">
          <p>
            price: ${{totalPrice}}
            <span>Only!</span>
          </p>
          <button>Book Now !</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { carService } from "../services/car-service.js";

export default {
  name: "car-details",
  data() {
    return {
      car: null,
      bookModal: false,
      fakePrice: 15,
      email: "",
      fullName: "",
      phoneNumber: "",
      pickupDate: "",
      daysCount: ""
    };
  },
  created() {
    const carId = this.$route.params.id;
    carService.getById(carId).then(car => (this.car = car));
  },
  methods: {
    switchImg() {},
    openBookModal() {
      console.log("thia");
      this.bookModal = !this.bookModal;
    },
    onBook() {
      var orderCred = {
        email: this.email,
        fullName: this.fullName,
        phoneNumber: this.phoneNumber
      };
      this.email = "";
      this.fullName = "";
      this.phoneNumber = "";
      this.$store.dispatch({ type: "bookCar", orderCred: orderCred });
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    totalPrice() {
      console.log(this.daysCount);
      return this.carPrice * this.daysCount;
    }
  },
  components: {}
};
</script>

<style>
</style>