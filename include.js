// include.js
(function(){
  'use strict';
  document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("#header, #footer");

    includes.forEach(el => {
      const file = el.id + ".html";
      fetch(file, {cache: 'no-store'})
        .then(response => {
          if (response.ok) return response.text();
          throw new Error("Include file not found: " + file);
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          console.error("Include error:", err);
          // leave element empty but avoid throwing further
        });
    });
  });
})();
