var e=document.querySelectorAll(".tree li"),t=document.querySelector(".tree");e.forEach(function(e){if(e.children.length){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.replaceChild(t,e.firstChild)}}),t.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextElementSibling;t.hasAttribute("hidden")?t.removeAttribute("hidden"):t.setAttribute("hidden","")}});
//# sourceMappingURL=index.27d11836.js.map
