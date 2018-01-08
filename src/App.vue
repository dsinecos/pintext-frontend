<template>
  <div>
    <router-view v-if="isAuthenticated" name="authenticated-navbar"></router-view>
    <router-view v-if="!isAuthenticated" name="unauthenticated-navbar"></router-view>
    <router-view name="page-content"></router-view>>
  </div>

</template>

<script>
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
  body {
    background-color: #F8F8F8;
  }
</style>