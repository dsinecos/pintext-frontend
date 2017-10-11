<template>
  <div>
    <router-view v-if="isAuthenticated" name="authenticated-navbar"></router-view>
    <router-view v-if="!isAuthenticated" name="unauthenticated-navbar"></router-view>
    <router-view name="page-content"></router-view>>
  </div>

</template>

<script>
  export default {
    // data: function() {
    //   return {
    //     isAuthenticated: false
    //   }
    // },
    computed: {
      isAuthenticated: function () {
        return this.$store.state.authenticationStatus;
      }
    }
  }

</script>

<style>

</style>