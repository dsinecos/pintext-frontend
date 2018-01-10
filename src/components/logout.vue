<template>
    <div>
        <!-- <p> This is the logout page </p>
        <p> This is the response </p>
        <p> {{ serverResponse }} </p> -->
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                serverResponse: ''
            }
        },
        created: function () {
            var self = this;

            var getURL = this.$store.state.baseURL + "/user/logout";

            axios.get(getURL)
                .then(function (response) {
                    console.log(response);
                    self.serverResponse = response.data;
                    if (response.data.developmentMessage === 'Success') {
                        self.$store.state.authenticationStatus = false;
                        self.$store.state.snippetList.length = 0;
                        self.$store.state.viewSnippet = {};
                        
                        self.$router.push({ path: '/' })

                    }
                })
                .catch(function (error) {
                    console.log(error);
                    self.serverResponse = error;
                });
        }
    }

</script>

<style>
</style>