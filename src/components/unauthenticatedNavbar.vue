<template>
    <div>
        <!-- <ul id="pintext_navbar">
            <li id="pintext_navbar_title"><router-link to="/">Pintext</router-link></li>
            <li><router-link to="/about/">About</router-link></li>
            <li><router-link to="/contact/">Contact</router-link></li>
            <li><router-link to="/login-signup/">Sign up</router-link></li>
            <li><router-link to="/login-signup/">Login</router-link></li>
        </ul> -->

        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#pintext-unauthenticated-navbar"
                        aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- <a class="navbar-brand" href="#">Pintext</a> -->
                    <router-link to="/" class="navbar-brand">Pintext</router-link>
                </div>
                <div class="collapse navbar-collapse" id="pintext-unauthenticated-navbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <!-- <a href="#">Login</a> -->
                            <router-link to="/login/">Login</router-link>
                        </li>
                        <li>
                            <!-- <a href="#">SignUp</a> -->
                            <router-link to="/signup/">Sign up</router-link>
                        </li>
                        <li>
                            <!-- <a href="#">About</a> -->
                            <router-link to="/about/">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>
    .navbar-default {
        background-color: #ecf0f1;
    }

    /* .navbar-default .navbar-brand {
        color: #16a085;
    }

    .navbar-default .navbar-nav li a {
        color: #16a085;
    } */

    /* ul {
        list-style-type: none;
        background-color: #F8F9FA;
        overflow: hidden;
        box-shadow: 2px 2px 2px #888888;
    }

    li {
        float: right;
        margin-right: 20px;
        padding: 10px;
        border: 12px, solid, blue;
    }

    li a {
        display: inline-block;
        color: #50596c;
        text-align: center;
        padding: 14px 10px;
        padding: 5px;

        font-size: 1.15em;
    }

    li a:hover {
        background-color: #ddd;
        text-decoration: none;
        border-radius: 4px;
    }

    li a,
    li a:hover,
    li a:active,
    li a:visited,
    li a:focus {
        text-decoration: none;
    }

    #pintext_navbar_title {
        float: left;
        font-weight: bold;
        font-size: 1.5em;
        margin-left: 2%;
        text-decoration: none;
    } */
</style>