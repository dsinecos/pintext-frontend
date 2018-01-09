<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 signup">
                    <p>Sign Up</p>
                    <form v-on:submit.prevent="onSubmitSignup">
                        <div class="form-group">
                            <input v-model="signup.username" class="form-control" type="text" placeholder="Enter Username">
                        </div>

                        <div class="form-group">
                            <input v-model="signup.password" class="form-control" type="password" placeholder="Enter Password">
                        </div>

                        <div class="form-group">
                            <input v-model="signup.repeatPassword" class="form-control" type="password" placeholder="Repeat Password">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                signup: {
                    username: '',
                    password: '',
                    repeatPassword: ''
                }
            }
        },
        methods: {
            onSubmitSignup: function () {
                var postURL = this.$store.state.baseURL + "/user/signup";

                axios.post(postURL, {
                    username: this.signup.username,
                    password: this.signup.password
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

</script>

<style>
    .signup {
        margin-top: 100px;
        margin-bottom: 20px;
        padding: 30px;
        box-shadow: 0 0 2px #888888;
    }
</style>