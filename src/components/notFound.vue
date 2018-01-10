<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-4 notFound">
                    <h1>Not Found !</h1>
                    <!-- <button @click="clickMe">Redirect</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // methods: {
        //     clickMe: function() {
        //         this.$router.push({ path: '/login/' });
        //     }
        // }
    }
</script>

<style>
    .notFound {
        margin-top: 100px;
        margin-bottom: 20px;
        padding: 30px;
    }
</style>