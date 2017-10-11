<template>
    <div>
        <div class="container">

            <div class="form-container">
                <form class="signup-form" v-on:submit.prevent="onSubmitSignup">

                    <p style="font-weight: bold"> Create a new account
                        <p>

                            <input v-model="signup.username" type="text" placeholder="Enter Username" required>
                            <br>

                            <input v-model="signup.password" type="password" placeholder="Enter Password" required>
                            <br>

                            <input v-model="signup.repeatPassword" type="password" placeholder="Repeat Password" required>
                            <br>

                            <button type="submit">Sign Up</button>

                            <p style="font-size: 12px;">By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>


                </form>

                <form class="login-form" v-on:submit.prevent="onSubmitLogin">

                    <p style="font-weight: bold"> Login
                        <p>

                            <div class="username">
                                <input v-model="login.username" type="text" placeholder="Enter Username" required>
                                <br>
                            </div>

                            <div class="password">
                                <input v-model="login.password" type="password" placeholder="Enter Password" required>
                                <br>
                            </div>

                            <div class="form-buttons">

                                <button type="submit">Login</button>
                                <span><a href="#">Forgot password?</a></span>

                            </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    export default {
        data: function () {
            return {
                signup: {
                    username: '',
                    password: '',
                    repeatPassword: ''
                },
                login: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            onSubmitSignup: function () {
                axios.post('http://localhost:2348/users/', {
                    username: this.signup.username,
                    password: this.signup.password
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            onSubmitLogin: function () {
                var self = this;

                axios.post('http://localhost:2348/users/login/', {
                    username: this.login.username,
                    password: this.login.password
                })
                    .then(function (response) {
                        console.log(response.status);
                        console.log(response.data);

                        if (response.status === 200) {
                            self.$store.state.authenticationStatus = true;
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
    .container {
        /* border: 2px solid blue; */
        /* display: inline-block; */
        padding: 20px;
    }

    .form-container {
        display: inline-block;
        /* border: 2px solid green */
        /* border-left: 1px ridge #888888; */
        /* border-top: 1px ridge #888888; */
        /* border-left: 1px groove #888888; */
        /* border-top: 1px groove #888888; */
        /* border-left: 1px inset #888888; */
        /* border-top: 1px inset #888888; */
        border-left: 1px outset #888888;
        border-top: 1px outset #888888;
        box-shadow: 10px 10px 5px #888888;
    }

    .login-form,
    .signup-form {
        /* border: 1px solid black; */
        display: inline-block;
        padding: 20px;
        vertical-align: top;
        /* margin: auto; */
    }

    .signup-form {
        border-right: 7px inset #888888;
    }
    /* .username,
    .password {
        margin: 10px;
    } */

    .login-form input {
        margin: 10px;
    }

    .signup-form input {
        margin: 10px;
    }

    .form-buttons {
        margin: auto;
    }

    .form-buttons button {
        margin: 8px;
    }
    /* .form-buttons a {
        float: right;
    } */
</style>