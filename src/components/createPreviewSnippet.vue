<template>
    <div>
        <div class="container">
            <div class="row" id="generate_permalink">
                <div class="col-sm-6">
                    <form id="snippet_form" method="post" enctype="application/x-www-form-urlencoded" action="http://localhost:2347/getURL">
                        <h3>Generate Permalink for Text snippet</h3>
                        <input type="text" name="title" placeholder="Title (Optional)" v-model="pintextTitle">
                        <br>
                        <input type="text" name="source" placeholder="Reference (URL) (Optional)" v-model="pintextSource">
                        <br>
                        <textarea rows="12" name="textsnippet" placeholder="Paste your text snippet here (Required)" v-model="pintextSnippet" required></textarea>
                        <br>
                        <input type="submit" value="Generate Permalink">

                        <button type="button" class="btn btn-default" aria-label="Left Align" id="copy_permalink" onclick="copyToClipboard()"><span class="glyphicon glyphicon-copy" aria-hidden="true"></span> Copy Link</button>
                        <textarea id="permalink_clipboard"></textarea>
                    </form>
                </div>

                <div class="col-sm-6" id="preview">
                    <h4 style="color: #222; text-align: center">Snippet preview</h4>
                    <h3 id="pintext_title" v-if="pintextTitle === ''">Title</h3>
                    <h3 id="pintext_title" v-else>{{pintextTitle}}</h3>
                    <h7 id="pintext_source" v-if="pintextSource === ''">Reference</h7>
                    <h7 id="pintext_source" v-else>{{pintextSource}}</h7>
                    <p id="pintext_snippet" style="white-space: pre-wrap" v-if="pintextSnippet === ''">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.</p>
                    <p id="pintext_snippet" style="white-space: pre-wrap" v-else>{{pintextSnippet}}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    $(document).ready(function () {
        $("#snippet_form").submit(function (e) {

            e.preventDefault(); // Avoid to execute the actual submit of the form.

            //console.log("Inside the ajax thingy");

            var form = $(this);
            var url = form.attr('action');
            var method = form.attr('method');

            var permalinkURL = window.location.href;
            console.log("Host URL " + permalinkURL);
            console.log("Target URL " + url);

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function (data) {
                    //$("#permalink").append(JSON.stringify(data, null, "  "))
                    //alert(JSON.stringify(data, null, "  "));
                    console.log(JSON.stringify(data, null, "  "));
                    var completeURL = permalinkURL + JSON.stringify(data, null, "  ");
                    var editedCompleteURL = completeURL.replace(/"/g, "");
                    $("#permalink_clipboard").val(editedCompleteURL);

                },
                error: function (data) {
                    console.log('An error occurred.');
                    console.log(data);
                }
            });
        });


    });

    function copyToClipboard() {
        $('#permalink_clipboard').select();
        document.execCommand('copy');
    }

    export default {
        data: function () {
            return {
                pintextTitle: "",
                pintextSource: "",
                pintextSnippet: ""
            }
        }
    }

</script>

<style>
    #snippet_form {
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
    }
</style>