<template>
  <section v-if="car">
    <div class="flex car-container">
      <div class="imgs-container grid">
        <img :class="{ small:false  ,big:true}" :src="car.primaryImgUrl" />
        <img
          v-for="(img,idx) in car.imgUrls"
          @click="switchImg(idx)"
          :class="{small:true, big:false}"
          :src="car.imgUrls[idx]"
          :key="idx"
        />
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

    <div class="book-modal" v-if="bookModal&&!loggedInUser">
      <div class="flex booking">
        <label>Full Name</label>
        <input v-model="guest.fullName" class="signup-form-group" type="text" />
        <label>Phone Number</label>
        <input type="tel" v-model="guest.phoneNumber" />
        <label>Email</label>
        <input v-model="guest.email" class="signup-form-group" type="email" />
        <label>Pick up date:</label>
        <input type="date" v-model="order.pickupDate" />
        <label>
          Days:
          <input class="number" type="number" v-model="order.daysCount" />
        </label>
        <div class="flex booking-button">
          <p>
            Total Price : ${{totalPrice}}
            <span>Only!</span>
          </p>
          <button @click="sendOrder">Book Now !</button>
        </div>
      </div>
    </div>
    <div v-else-if="bookModal&&loggedInUser" class="book-modal">
      <div class="flex booking">
        <label>your name:{{loggedInUser.fullName}}</label>
        <label>your email: {{loggedInUser.email}}</label>
        <label>
          pick up date:
          <input class="date" type="date" v-model="order.pickupDate" />
        </label>
        <label>
          days:
          <input class="number" type="number" min="1" v-model="order.daysCount" />
        </label>

        <div class="flex booking-button">
          <p>
            price: ${{totalPrice}}
            <span>Only!</span>
          </p>
          <button @click="sendOrder">Book Now !</button>
        </div>
      </div>
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
      guest: {
        email: "",
        fullName: "",
        phoneNumber: ""
      },
      order: {
        pickupDate: new Date().toLocaleDateString(),
        daysCount: "1"
      }
    };
  },
  created() {
    const carId = this.$route.params.id;
    carService.getById(carId).then(car => (this.car = car));
  },
  methods: {
    switchImg(idx) {
      var saveImg = this.car.primaryImgUrl;
      this.car.primaryImgUrl = this.car.imgUrls[idx];
      this.car.imgUrls[idx] = saveImg;
      console.log(this.car.imgUrls, this.car.primaryImgUrl);
    },
    openBookModal() {
      console.log("thia");
      this.bookModal = !this.bookModal;
    },

    sendOrder() {
      this.order.price = this.totalPrice;
      if (this.loggedInUser) {
        const user = {
          email: this.loggedInUser.email,
          fullName: this.loggedInUser.fullName,
          imgUrl: this.loggedInUser.imgUrl
        };
        this.$store.dispatch({
          type: "sendOrderToOwner",
          buyer: user,
          order: this.order,
          owner: this.car.owner
        });
      } else {
        this.$store.dispatch({
          type: "sendOrderToOwner",
          buyer: this.guest,
          order: this.order,
          owner: this.car.owner
        });
      }
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    totalPrice() {
      return this.car.price * this.order.daysCount;
    }
  },
  components: {}
};
</script>

<style>
</style>