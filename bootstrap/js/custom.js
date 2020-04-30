$(document).ready(function(){
  $('.carousel').carousel();

  var src = 1;
  $('div#content-wrapper div.ce-gallery a img').each(function(){
    var header = "";
    var alt = $(this).attr("alt");
    if(alt!="") {
      header = '<div class="modal-header"><h4 class="modal-title" id="myModalLabel">' + alt + '</h4></div>';
    }
    $(this).addClass('enlarge');
    $(this).parent().attr("data-toggle", "modal");
    $(this).parent().attr("data-target", ".imageEnlarge" + src);
    $(this).parent().removeAttr("onclick");
    $(this).parent().after('<div class="modal imageEnlarge' + src + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class="modal-dialog modal-lg" role="document"><div class="modal-content">' + header + '</div></div></div>');
    src += 1;
  });

  var theWindow = $(window),
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
});


/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
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
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
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
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.bgwidth')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);
hljs.initHighlightingOnLoad();