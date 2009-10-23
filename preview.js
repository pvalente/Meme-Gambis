function mostraPreview(previewContent, type){

    var p = document.createElement('p');
    if (previewContent.length < 400 && type == '1') {
        p.setAttribute("class", "big");
    }

    var textdiv = document.createElement('div');
    textdiv.setAttribute("class", "text");

    var postdiv = document.createElement('div');
    postdiv.setAttribute("class", "post");

    var dash = document.createElement('div');
    dash.setAttribute("class", "dashboard");
    dash.setAttribute("style", "margin: 20px; width: 748px");

    dash.id = "content";

    var previewdiv = document.createElement('div');
    previewdiv.id = "preview";
    
    if (type == '2' and $('input_photo_link').val()) {
        previewContent = "<div class='image'><img src='"+$('input_photo_link').val()+"' class='image_expand big'></div>" + previewContent;
    }

    p.innerHTML = previewContent;
    textdiv.appendChild(p);
    postdiv.appendChild(textdiv);
    dash.appendChild(postdiv);
    previewdiv.appendChild(dash);

    pr = document.getElementById('preview');
    if (pr != null) {
        pr.parentNode.removeChild(pr);
    }

    var c = document.getElementById('add-'+type);
    c.appendChild(previewdiv);
}

$(document).ready(function () {
    $("#submit_text").val($("#submit_text").val() +" *preview on*");
    $("#submit_photo").val($("#submit_photo").val() +" *preview on*");
    $("#submit_video").val($("#submit_video").val() +" *preview on*");
    $("#submit_music").val($("#submit_music").val() +" *preview on*");
    $("#add-1").keyup(function(){
        //Text
        mostraPreview($('#input_text').val().replace(/\n/g,'<br>'), '1');
    });
    $("#add-2").keyup(function(){
        //Photo
        mostraPreview($('#input_text_photo').val().replace(/\n/g,'<br>'), '2');
    });
    $("#add-3").keyup(function(){
        //Video
        mostraPreview($('#input_text_video').val().replace(/\n/g,'<br>'), '3');
    });
    $("#add-4").keyup(function(){
        //Audio
        mostraPreview($('#input_text_music').val().replace(/\n/g,'<br>'), '4');
    });
    
});

