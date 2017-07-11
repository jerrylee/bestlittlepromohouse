$( document ).ready(function() {
  var images = $('.cartOptionImage');
  for (var i = 0; i < images.length; i++) {
      if (images[i].src.match(/^(.*\.((eps|ai|tiff|tif|doc)$))?[^.]*$/ig)) {
          images[i].style.display="none";
          }
        }
});
