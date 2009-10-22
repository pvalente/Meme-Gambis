var previewContent = document.getElementById('input_text').value;

var p = document.createElement('p');
p.setAttribute("class", "big");

var textdiv = document.createElement('div');
textdiv.setAttribute("class", "text");

var postdiv = document.createElement('div');
postdiv.setAttribute("class", "post");

var dash = document.createElement('div');
dash.setAttribute("class", "dashboard");
dash.setAttribute("style", "margin: 10px; width: 600px");

dash.id = "content";

var previewdiv = document.createElement('div');
previewdiv.id = "preview";

p.innerHTML = previewContent;
textdiv.appendChild(p);
postdiv.appendChild(textdiv);
dash.appendChild(postdiv);
previewdiv.appendChild(dash);


var c = document.getElementById('add-1');

c.appendChild(dash);

