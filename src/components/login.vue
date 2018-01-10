<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 login">
                    <p>{{ message }}</p>
                    <p>Login</p>
                    <form v-on:submit.prevent="onSubmitLogin">
                        <div class="form-group">
                            <input v-model="login.username" class="form-control" type="text" placeholder="Enter Username">
                        </div>

                        <div class="form-group">
                            <input v-model="login.password" class="form-control" type="password" placeholder="Enter Password">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Login</button>
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
                login: {
                    username: '',
                    password: ''
                },
                message: this.$route.query.message,
                messageType: this.$route.query.type
            }
        },
        methods: {
            onSubmitLogin: function () {
                var self = this;

                var postURL = this.$store.state.baseURL + "/user/login/";

                axios.post(postURL, {
                    username: this.login.username,
                    password: this.login.password
                })
                    .then(function (response) {
                        console.log(response.status);
                        console.log(response.data);

                        if (response.status === 200) {
                            self.$store.state.authenticationStatus = true;
                            console.log(self.$store.state.authenticationStatus)
                            self.$router.push({ path: '/' });
                        } else if (response.status === 401) {

                            // self.$router.push({ path: '/login/', query: { type: 'error', message: 'Login Failed, please try again' } });

                            self.message = "Login failed, please try again";

                        }

                    })
                    .catch(function (error) {
                        console.log(error);

                        // self.$router.push({ path: '/login/', query: { type: 'error', message: 'Login Failed, please try again' } })

                        self.message = "Login failed, please try again";

                    });
            }
        }
    }

</script>

<style>
    .login {
        margin-top: 100px;
        margin-bottom: 20px;
        padding: 30px;
        box-shadow: 0 0 2px #888888;
    }
</style>