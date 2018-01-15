<template>
    <div>
        <!-- <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <div class="snippet">
                        <h1>{{ snippet_hash }}</h1>
                        <h3>{{ viewSnippet.snippet_title }}</h3>
                        <p class="style-for-url">{{ viewSnippet.snippet_reference }}</p>
                        <p>{{ viewSnippet.snippet_content }}</p>
                    </div>

                </div>
            </div>
        </div> -->

        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <div class="view_snippet">
                        <!-- <h1>Testing</h1> -->
                        <h1>{{ singleSnippet.snippet_title }}</h1>
                        <h6>{{ singleSnippet.snippet_reference }}</h6>
                        <p>{{ singleSnippet.snippet_content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                snippet_hash: this.$route.params.hash,
                singleSnippet: ""
            }
        },
        // computed: {
        //     viewSnippet: function () {
        //         var self = this;



        //         if (self.$store.state.snippetList.length) {

        //             for (var snippet of self.$store.state.snippetList) {

        //                 if (snippet.snippet_hash === this.snippet_hash) {
        //                     return snippet;
        //                 }
        //             }

        //         } else {
        //             // Make a get call to backend

        //             var getURL = this.$store.state.baseURL + "/snippet/" + self.snippet_hash;
        //             console.log("About to make axios call");

        //             axios.get(getURL)
        //                 .then(function (response) {
        //                     console.log(response.data);
        //                     return response.data;

        //                 })
        //                 .catch(function (err) {
        //                     console.log(err);
        //                 })
        //         }
        //     }
        // },
        methods: {
            viewSnippet: function () {



            }
        },
        watch: {
            singleSnippet: function(newValue) {
                // console.log(newValue);

            }
        },
        beforeMount: function () {
            var self = this;

            if (self.$store.state.snippetList.length) {

                for (var snippet of self.$store.state.snippetList) {

                    if (snippet.snippet_hash === this.snippet_hash) {
                        self.$store.state.viewSnippet = snippet;
                        self.singleSnippet = snippet;
                    }
                }

            } else {
                // Make a get call to backend

                var getURL = this.$store.state.baseURL + "/snippet/" + self.snippet_hash;
                // console.log("About to make axios call");

                axios.get(getURL)
                    .then(function (response) {
                        // console.log(response.data);
                        self.$store.state.viewSnippet = response.data;
                        self.singleSnippet = response.data;
                    })
                    .catch(function (err) {
                        // console.log(err);
                        self.$router.push({ path: '/notFound' });
                    })
            }

        }
        // beforeCreate: function () {

        // }
    }

</script>

<style>
    .view_snippet {
        margin-top: 40px;
        padding: 30px;
    }

    p {
        white-space: pre-wrap;
    }

    /* .container {
        max-width: 625px;
        margin: 0 auto;
    }

    .snippet {
        margin-top: 2%;
        box-shadow: 3px 3px 5px grey;
        padding: 10px;
    }

    h3 {
        margin-top: 4rem;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        color: #333;
        text-rendering: optimizeLegibility;
        font-family: 'Open Sans', serif;
        line-height: 1.2;
    }

    p {
        margin-top: 2rem;
        margin-bottom: 2.5rem;
        font: 16px/1.4 'Open Sans', sans-serif;
        white-space: pre-wrap;
        color: #333;
    }

    .style-for-url {
        color: #bbc1cd;
        font-size: 1.5rem;
        margin: 0;
    } */
</style>