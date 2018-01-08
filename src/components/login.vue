<template>
    <div>

        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 login">
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
                    password: '',
                }
            }
        },
        methods: {
            onSubmitLogin: function () {
                var self = this;

                axios.post('http://localhost:2348/user/login/', {
                    username: this.login.username,
                    password: this.login.password
                })
                    .then(function (response) {
                        console.log(response.status);
                        console.log(response.data);

                        if (response.status === 200) {
                            self.$store.state.authenticationStatus = true;
                            console.log(self.$store.state.authenticationStatus)
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
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