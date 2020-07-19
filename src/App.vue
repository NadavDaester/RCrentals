<template>
  <div >
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>
<script>
  import Swal from 'sweetalert2'
  import appHeader from './components/header.cmp.vue'
  import appFooter from './components/footer.cmp.vue'
  import {eventBus} from './main-services/eventBus.js'
export default {


  components :{
    appHeader,
    appFooter
  },
  created(){

     eventBus.$on('sendSwal',this.swalMsg)

  },methods:{
    swalMsg(msg){
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
})
    }
  }
}
</script>>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
