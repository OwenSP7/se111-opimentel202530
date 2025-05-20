
// window.onload = function()
// {
    
// var div = document.querySelector("div");
// var p = document.querySelector("p");

// var textNode = document.createTextNode("This is the text i wanted to change it to.");


// p.innerHTML = textNode.textContent
// }
document.addEventListener("DOMContentLoaded", function()
{
loadCode()
})

function loadCode()
{
var div = document.querySelector("div");
var p = document.querySelector("p");

var textNode = document.createTextNode("This is the text i wanted to change it to.");


p.innerHTML = textNode.textContent
div.removeChild(p);
div.appendChild(p);

}
