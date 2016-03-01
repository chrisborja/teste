// var body = document.body;
// body.style.color = "red";
var a = document.createElement('a');
var linkText = document.createTextNode("texto");
a.appendChild(linkText);
a.title = "link";
a.href = "http://example.com";
document.body.appendChild(a);