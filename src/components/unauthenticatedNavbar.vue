<template>
    <div>
        <ul id="pintext_navbar">
            <li id="pintext_navbar_title"><router-link to="/">Pintext</router-link></li>
            <li><router-link to="/about/">About</router-link></li>
            <li><router-link to="/contact/">Contact</router-link></li>
            <li><router-link to="/login-signup/">Sign up</router-link></li>
            <li><router-link to="/login-signup/">Login</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>
    ul {
        list-style-type: none;
        background-color: #F8F9FA;
        overflow: hidden;
        box-shadow: 2px 2px 2px #888888;
    }

    li {
        float: right;
        margin-right: 20px;
        padding: 10px;
        /* border: 12px, solid, blue; */
    }

    li a {
        display: inline-block;
        color: #50596c;
        /* text-align: center; */
        /* padding: 14px 10px; */
        padding: 5px;

        /* margin-top: 10%; */
        /* text-decoration: none; */
        /* font-weight: bold; */
        font-size: 1.15em;
        /* border: 12px, solid, blue; */
    }

    li a:hover {
        background-color: #ddd;
        text-decoration: none;
        border-radius: 4px;
        /* border: 12px, solid, blue; */
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
        /* padding: 5px; */
    }
</style>