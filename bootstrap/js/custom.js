$(function(){
  $('.carousel').carousel();

  $(document).on('click', '.lightbox' , function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
  });

  let theWindow = $(window),
  $bg = $("#background_slider img"),
  aspectRatio = $bg.width() / $bg.height();
  function resizeBg() {

    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg
          .removeClass()
          .addClass('bgheight');
    } else {
        $bg
          .removeClass()
          .addClass('bgwidth');
    }

  }

  theWindow.resize(resizeBg).trigger("resize");

  $("ul li ul.dropdown-menu").each(function () {
     let length = $(this).find($("div.div-nav")).length;
     $(this).css("width", (length * 13) + "em");
  });
});


/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

!function(window){
  let $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          let d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      };

    function loadImage (el, fn) {
    let img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    let rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    let images = []
      , query = $q('img.bgwidth')
      , processScroll = function(){
          for (let i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          }
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (let i = 0; i < query.length; i++) {
      images.push(query[i]);
    }

    processScroll();
    addEventListener('scroll',processScroll);

}(window);
