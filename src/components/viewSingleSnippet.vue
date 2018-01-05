<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <div class="snippet">
                        <!-- <h1>{{ snippet_hash }}</h1> -->
                        <h3>{{ viewSnippet.snippet_title }}</h3>
                        <p class="style-for-url">{{ viewSnippet.snippet_reference }}</p>
                        <p>{{ viewSnippet.snippet_content }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function() {
            return {
                snippet_hash: this.$route.params.hash,
            }
        },
        computed: {
            viewSnippet: function() {
                var self = this;

                for(var snippet of self.$store.state.snippetList) {
                    if(snippet.snippet_hash === this.snippet_hash) {
                        return snippet;
                    }
                }
            }
        }
    }

</script>

<style>
    .container {
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
    }
</style>