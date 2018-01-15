<template>
    <div>
        <!-- <div class="container">
            <div class="row" id="generate_permalink">
                <div class="col-sm-6">
                    <form id="snippet_form" v-on:submit.prevent="getSnippetURL">
                        <h3>Generate Permalink for Text snippet</h3>
                        <input type="text" name="snippet_title" placeholder="Title (Optional)" v-model="snippet_title">
                        <br>
                        <input type="text" name="snippet_reference" placeholder="Reference (URL) (Optional)" v-model="snippet_reference">
                        <br>
                        <textarea rows="12" name="snippet_content" placeholder="Paste your text snippet here (Required)" v-model="snippet_content"
                            required></textarea>
                        <br>
                        <input type="hidden" name="snippet_created_on" v-model="snippet_created_on">
                        <input type="submit" value="Generate Permalink">

                        <button type="button" class="btn btn-default" aria-label="Left Align" id="copy_permalink" onclick="copyToClipboard()">
                            <span class="glyphicon glyphicon-copy" aria-hidden="true"></span> Copy Link</button>
                        <textarea id="permalink_clipboard"></textarea>
                    </form>
                </div>

                <div class="col-sm-6" id="preview">
                    <h4 style="color: #222; text-align: center">Snippet preview</h4>
                    <h3 id="pintext_title" v-if="snippet_title === ''">Title</h3>
                    <h3 id="pintext_title" v-else>{{snippet_title}}</h3>
                    <h6 id="pintext_source" v-if="snippet_reference === ''">Reference</h6>
                    <h6 id="pintext_source" v-else>{{snippet_reference}}</h6>
                    <p id="pintext_snippet" style="white-space: pre-wrap" v-if="snippet_content === ''">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.</p>
                    <p id="pintext_snippet" style="white-space: pre-wrap" v-else>{{snippet_content}}</p>
                </div>

            </div>
        </div> -->

        <div class="container">
            <div class="row">

                <div class="col-12 snippet_container">
                    <div class="row">

                        <div class="col-sm-5 col-sm-offset-1 create_snippet">
                            <h3 class="snippet_title">Create Snippet</h3>

                            <div class="snippet_form">
                                <!-- <form v-on:submit.prevent="getSnippetURL"> -->
                                <form v-on:submit.prevent="">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="title" placeholder="Title (Optional)" v-model="snippet_title">
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" type="text" name="source" placeholder="Reference (URL) (Optional)" v-model="snippet_reference">
                                    </div>

                                    <div class="form-group">
                                        <textarea class="form-control" rows="12" name="textsnippet" placeholder="Paste your text snippet here (Required)" v-model="snippet_content"
                                            required></textarea>
                                    </div>

                                    <div class="form-group">
                                        <input class="form-control" type="hidden" name="snippet_created_on" v-model="snippet_created_on">
                                    </div>

                                    <div class="form-group">
                                        <button class="btn btn-success btn-block btn-justify" type="submit" value="Generate Permalink" @click="getSnippetURL">Generate Permalink</button>
                                    </div>

                                    <div class="form-group">
                                        <div class="input-group">
                                            <input ref="permalink" type="text" class="form-control" placeholder="Permalink" v-model="snippet_permalinkURL">
                                            <span class="input-group-btn">
                                                <button class="btn btn-primary" type="button" @click="copyPermalink">Copy</button>
                                            </span>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>

                        <div class="col-sm-5 preview_snippet">
                            <h3>Preview Snippet</h3>
                            <!-- Insert Preview -->
                            <h1 v-if="snippet_title === ''">Title</h1>
                            <h1 v-else>{{snippet_title}}</h1>
                            <h6 v-if="snippet_reference === ''">Reference</h6>
                            <h6 v-else>{{snippet_reference}}</h6>
                            <p v-if="snippet_content === ''">Snippet Content</p>
                            <p v-else>{{snippet_content}}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // $(document).ready(function () {
    //     $("#snippet_form").submit(function (e) {

    //         e.preventDefault(); // Avoid to execute the actual submit of the form.

    //         //console.log("Inside the ajax thingy");

    //         var form = $(this);
    //         var url = form.attr('action');
    //         var method = form.attr('method');

    //         var permalinkURL = window.location.href;
    //         console.log("Host URL " + permalinkURL);
    //         console.log("Target URL " + url);

    //         $.ajax({
    //             type: "POST",
    //             url: url,
    //             data: form.serialize(),
    //             success: function (data) {
    //                 //$("#permalink").append(JSON.stringify(data, null, "  "))
    //                 //alert(JSON.stringify(data, null, "  "));
    //                 console.log(JSON.stringify(data, null, "  "));
    //                 var completeURL = permalinkURL + JSON.stringify(data, null, "  ");
    //                 var editedCompleteURL = completeURL.replace(/"/g, "");
    //                 console.log(editedCompleteURL);
    //                 $("#permalink_clipboard").val(editedCompleteURL);

    //             },
    //             error: function (data) {
    //                 console.log('An error occurred.');
    //                 console.log(data);
    //             }
    //         });
    //     });


    // });

    // function copyToClipboard() {
    //     $('#permalink_clipboard').select();
    //     document.execCommand('copy');
    // }

    export default {
        data: function () {
            return {
                snippet_title: "",
                snippet_reference: "",
                snippet_content: "",
                snippet_created_on: '05/05/2017',
                snippet_permalinkURL: ""
            }
        },
        methods: {
            getSnippetURL: function () {
                var self = this;

                var postURL = this.$store.state.baseURL + "/snippet/"

                axios.post(postURL, {
                    snippet_title: this.snippet_title,
                    snippet_reference: this.snippet_reference,
                    snippet_content: this.snippet_content,
                    snippet_created_on: this.snippet_created_on
                })
                    .then(function (response) {
                        // console.log(response.data);

                        var permalink = response.data.permalink;
                        var hostURL = window.location.href;
                        var permalinkURL = hostURL + "snippet/" + permalink;

                        self.snippet_permalinkURL = permalinkURL;

                        // console.log("Host URL " + permalinkURL);
                    })
                    .catch(function (error) {
                        // console.log(error);
                    });
            },
            copyPermalink: function () {
                this.$refs.permalink.select();
                document.execCommand('copy');
            }
        }
    }

</script>

<style>
    p {
        white-space: pre-wrap;
    }

    .snippet_container {
        margin: 20px;
        padding: 30px;
        /* border: solid 1px; */
    }

    .create_snippet {
        padding: 30px;
        /* border: solid 1px; */
    }

    .snippet_form {
        margin-top: 18.76px;
    }

    .preview_snippet {
        padding: 30px;
        padding-left: 50px;
        /* border: solid 1px; */
    }

    /* #snippet_form {
        padding: 20px;
        margin: 10px;
        border: 2px solid #F1F1F1;
        box-shadow: 3px 3px 5px grey;
    }

    input {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    textarea {
        width: 100%;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    #preview {
        padding: 20px;
        margin-top: 10px;
        color: lightgray;
        box-shadow: 3px 3px 5px grey;
    }

    #pintext_title {
        margin-top: 4rem;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        color: #333;
        text-rendering: optimizeLegibility;
        font-family: 'Open Sans', serif;
        line-height: 1.2;
    }

    #pintext_source {
        color: #bbc1cd;
        font-size: 1.5rem;
        margin: 0;
    }

    #pintext_snippet {
        margin-top: 2rem;
        margin-bottom: 2.5rem;
        color: #333;
        font: 16px/1.4 'Open Sans', sans-serif;
    } */
</style>