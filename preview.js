function mostraPreview(previewContent, type){
    
    pr = document.getElementById('preview');
    if (pr != null) {
        pr.parentNode.removeChild(pr);
    }
    
    var base = '<div id="preview">\
        <div id="content" class="dashboard" style="margin: 20px; width: 748px;">\
            <div class="post">\
                <div class="text">\
                    <p>'+previewContent+'</p>\
                </div>\
            </div>\
        </div>\
    </div>';

    $('#add-'+type).append(base);
    
    if (previewContent.length < 400 && type == '1') {
        $('#preview .text p').addClass("big");
    }
    
    
    
    if (type == '2' && $('#input_photo_link').val() != null) {
        //Photo specific
        var img = '<div class="image" style="float: left; line-height: 0px;">\
                    <img class="image_expand big" src="'+ $('#input_photo_link').val() +'"/>\
                    </div>\
                    <div style="clear:both"></div>';
        $('#preview .text').prepend(img); 
    }
    
    if (type == '3' && $('#input_video').val() != null) {
        //Video specific
        var v = $('#input_video').val();
        if (v.indexOf('youtube.com') > 0) {
           $('#preview .text').prepend('<object width="425" height="344"><param name="movie" value="' + v + '"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="' + v + '" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="425" height="344"></embed></object>');
           
        }
    }
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

