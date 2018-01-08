<template>
    <div>

        <!-- <div class="container" id="displayAllSnippets">
            <div class="row">
                <div class="sm-col-12">
                    <div class="input-group" id="searchbar">
                        <span class="input-group-addon glyphicon glyphicon-search" aria-hidden="true" id="basic-addon1"></span>
                        <input type="text" v-model="searchQuery" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>

            <div class="row" v-for="textSnippet in filteredSnippets">
                <div class="sm-col-12 snippet-card">
                    <p>
                        <a v-bind:href="baseURL + textSnippet.snippet_hash" class="card-title">{{textSnippet.snippet_title}}</a>
                        <router-link :to="'/snippet/dummy/'+textSnippet.snippet_hash" class="card-title">{{ textSnippet.snippet_title }}</router-link>
                        <router-link :to="'/snippet/'+textSnippet.snippet_hash" class="card-title">{{ textSnippet.snippet_title }}</router-link>
                        <p>
                            <p class="card-url">{{textSnippet.snippet_reference}}</p>
                            <p class="card-snippet">{{textSnippet.snippet_content_brief}}</p>
                            <div class="card-saved-data">
                                <p>{{textSnippet.snippet_created_on}}</p>
                            </div>
                </div>
            </div>
        </div> -->

        <div class="container">

            <div class="row">
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <div class="search-bar">
                        <div class="input-group">
                            <span class="input-group-addon glyphicon glyphicon-search" aria-hidden="true" id="search-icon"></span>
                            <input type="text" v-model="searchQuery" class="form-control" placeholder="Search" aria-describedby="search-icon">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" v-for="textSnippet in filteredSnippets">
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 snippet_card">
                    <h1>
                        <router-link :to="'/snippet/'+textSnippet.snippet_hash" class="card-title">{{ textSnippet.snippet_title }}</router-link>
                    </h1>
                    <h6>{{textSnippet.snippet_reference}}</h6>
                    <p>{{textSnippet.snippet_content_brief}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    function shortenedSnippet(snippetCard_array) {

        // console.log("Inside shortened snippet");
        // console.log(snippetCard_array);

        snippetCard_array = snippetCard_array.map(function (item) {
            if (item.snippet_content.length > 200) {
                item.snippet_content_brief = item.snippet_content.slice(0, 200) + "...";
                return item;
            } else {
                item.snippet_content_brief = item.snippet_content;
            }

            return item;
        });

        // console.log("Inside shortened snippet");
        // console.log(snippetCard_array);

        return snippetCard_array;

    }

    export default {
        data: function () {
            return {
                baseURL: "http://localhost:8080/snippet/",
                searchQuery: "",
                snippetCard: this.$store.state.snippetList,
                dummyCount: 12
            }
        },
        computed: {
            filteredSnippets: function () {
                var snippetCard_array = this.$store.state.snippetList;
                var searchQuery = this.searchQuery;

                if (!searchQuery) {
                    // console.log("Inside no search query")
                    // console.log("This is the value of snippetCard_array :");
                    // console.log(snippetCard_array);

                    var shortenSnippet = shortenedSnippet(snippetCard_array);

                    // console.log(shortenSnippet[0].snippet_title);

                    return shortenedSnippet(snippetCard_array);
                }

                searchQuery = searchQuery.trim().toLowerCase();

                snippetCard_array = snippetCard_array.filter(function (item) {
                    if (item.snippet_title.toLowerCase().indexOf(searchQuery) !== -1 || item.snippet_content.toLowerCase().indexOf(searchQuery) !== -1 || item.snippet_reference.toLowerCase().indexOf(searchQuery) !== -1) {
                        return item;
                    }
                });

                // return snippetCard_array;
                return shortenedSnippet(snippetCard_array)
            },
        },
        beforeCreate: function () {
            var self = this;
            self.$store.state.snippetList.length = 0;

            axios.get("http://localhost:2348/snippet/")
                .then(function (response) {
                    // console.log("Is response an array or an object " + typeof response.data);
                    // console.log(response.data);


                    // var snippetData = self.$store.state.snippetList;

                    // How to parse an object and add to an array
                    for (var snippet in response.data) {
                        // console.log(response.data[snippet]);
                        self.$store.state.snippetList.push(response.data[snippet]);
                    }

                    // console.log(typeof snippetData);
                    // console.log("This is the value of store snippetList");
                    // console.log(self.$store.state.snippetList);
                })
                .catch(function (err) {
                    // console.log(err);
                    // alert("Could not retrieve snippets");
                })
        }
    }
</script>

<style>
    .search-bar {
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .snippet_card {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 30px;
        background-color: #f7f7f7;
        box-shadow: 0 0 2px #888888;
    }

    /* #searchbar {
        max-width: 500px;
        margin: auto;
        margin-top: 5%;
        margin-bottom: 1%;
        box-shadow: 2px 2px 2px #888888;
    }

    .snippet-card {
        max-width: 700px;
        margin: auto;
        margin-top: 1%;
        padding: 1%;
        padding-bottom: 1%;
        overflow: hidden;
    }

    .snippet-card:hover {
        box-shadow: 2px 2px 2px #888888;
    }

    .snippet-card a:hover {
        text-decoration: none;
    }

    .card-title {
        margin: 2%;
        font-family: "Sentinel SSm A", "Sentinel SSm B", Georgia, serif;
        font-weight: 400;
        font-size: 1.7em;
        line-height: 1.6;
        color: rgb(50, 50, 50);
    }

    .card-url {
        margin-left: 5%;
        font-family: "Whitney SSm SC A", "Whitney SSm SC B", sans-serif;
        color: rgb(179, 179, 179);
    }

    .card-snippet {
        max-width: 90%;
        margin-left: 3%;
        margin-bottom: 0;
        color: rgb(89, 89, 89);
        font-family: "Whitney SSm A", "Whitney SSm B", sans-serif;
    }

    .card-saved-data {
        margin: 0;
        float: right;
        font-family: "Whitney SSm A", "Whitney SSm B", sans-serif;
        color: rgb(179, 179, 179);
    } */
</style>