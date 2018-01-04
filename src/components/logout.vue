<template>
    <div>
        <p> This is the logout page </p>
        <p> This is the response </p>
        <p> {{ serverResponse }} </p>
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

            axios.get('http://localhost:2348/user/logout/')
                .then(function (response) {
                    console.log(response);
                    self.serverResponse = response.data;
                    if (response.data.developmentMessage === 'Success') {
                        self.$store.state.authenticationStatus = false;
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