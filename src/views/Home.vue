<template>
  <section>
    <div class="bgc-img">
      <div class="text-img">
        <h1>Way better than a rental car</h1>
        <h3>Book unforgettable cars from trusted hosts around the world</h3>
        <input type="text" name id />
      </div>
    </div>
    <h2>Browse by category</h2>
    <div class="browse-category flex space-between">
      <div>
        <img src="../assets/hero3.jpg" height="120" />
        <h3>Vintage</h3>
      </div>
      <div>
        <img src="../assets/hero3.jpg" height="120" />
        <h3>Luxury</h3>
      </div>
      <div>
        <img src="../assets/hero3.jpg" height="120" />
        <h3>Sports</h3>
      </div>
    </div>

    <h2>you might like</h2>
    <div class="flex space-between">
      <div>
        <img src="../assets/hero3.jpg" height="300" />
        <h3>Vintage</h3>
      </div>
      <div>
        <img src="../assets/hero3.jpg" height="300" />
        <h3>Luxury</h3>
      </div>
      <div>
        <img src="../assets/hero3.jpg" height="300" />
        <h3>Sports</h3>
      </div>
    </div>

    <h3>Discover the world’s largest car sharing marketplace</h3>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
