function mostraPreview(previewContent){

    var p = document.createElement('p');
    if (previewContent.length < 400) {
        p.setAttribute("class", "big");
    }

    var textdiv = document.createElement('div');
    textdiv.setAttribute("class", "text");

    var postdiv = document.createElement('div');
    postdiv.setAttribute("class", "post");

    var dash = document.createElement('div');
    dash.setAttribute("class", "dashboard");
    dash.setAttribute("style", "margin: 10px; width: 728px");

    dash.id = "content";

    var previewdiv = document.createElement('div');
    previewdiv.id = "preview";

    p.innerHTML = previewContent;
    textdiv.appendChild(p);
    postdiv.appendChild(textdiv);
    dash.appendChild(postdiv);
    previewdiv.appendChild(dash);

    pr = document.getElementById('preview');
    if (pr != null) {
        pr.parentNode.removeChild(pr);
    }

    var c = document.getElementById('add-1');
    c.appendChild(previewdiv);
}
$(document).ready(function () {
    $("#submit_text").val($("#submit_text").val() +" *preview on*");
    $("#add-1").keyup(function(){
        mostraPreview($('#input_text').val());
    });
});

