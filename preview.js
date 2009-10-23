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
    
    p.innerHTML = previewContent;
    
    if (type == '2' && $('#input_photo_link').val() != null) {
        //Phoso specific
        var imgdiv = document.createElement('div');
        imgdiv.setAttribute("class", "image");
        imgdiv.setAttribute("width", "500px");
        
        var img = document.createElement('img');
        img.src = $('#input_photo_link').val();
        img.setAttribute("class", "image_expand big");
        
        imgdiv.appendChild(img);
        textdiv.appendChild(imgdiv);
    }
    if (type == '3' && $('#input_photo_link').val() != null) {
        //Video specific
        var v = $('#input_photo_link').val();
        if (v.indexOf('youtube.com') > 0) {
            var embed = '<object width="425" height="344"><param name="movie" value="' + v + '"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="' + v + '" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="425" height="344"></embed></object>';
            textdiv.innerHTML = embed;
        }
    }
    
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

