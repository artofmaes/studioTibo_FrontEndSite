//SLIDER https://www.jqueryscript.net/demo/Simple-jQuery-Background-Image-Slideshow-with-Fade-Transitions-Background-Cycle

$(document).ready(function() {
    $(".header1").backgroundCycle({
        imageUrls: [
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/strip30.jpg'
        ],
        fadeSpeed: 1000,
        duration: 3000,
        backgroundSize: SCALING_MODE_COVER
    });
});


// Scroll to top : Paulund : https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-button-with-jquery
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

});

//hamburger v2 https://codepen.io/scanfcode/pen/KqVXmM

function openNav() {
    document.getElementById("mySidenav_sc").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav_sc").style.width = "0";
}

$(window).scroll(function(){
        document.getElementById("mySidenav_sc").style.width="0";

    });

// Smooth scroll to named anchor : Chris Coyier : https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Animated pijl : https://css-tricks.com/snippets/jquery/addingremoving-class-on-hover/
$('.pijl').hover( function(){ 
    $(this).toggleClass('animated') 
});


//COOKIES

/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    // When clicking on the agree button, create a 1 year
    // cookie to remember user's choice and close the banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    // Cookie functions from w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();


/*GRIDDER codepen.io/Fatal7x/pen/aNvLXZ */
jQuery(document).ready(function($) {

  // Call Gridder
  $(".gridder").gridderExpander({
    scrollOffset: 60,
    scrollTo: "panel", // "panel" or "listitem"
    animationSpeed: 400,
    animationEasing: "easeInOutExpo",
    onStart: function() {
      console.log("Gridder Inititialized");
    },
    onExpanded: function(object) {
      console.log("Gridder Expanded");
      $(".carousel").carousel();
    },
    onChanged: function(object) {
      console.log("Gridder Changed");
    },
    onClosed: function() {
      console.log("Gridder Closed");
    }
  });
});

/*
 *  Gridder - v1.4.1
 *  A jQuery plugin that displays a thumbnail grid expanding preview similar to the effect seen on Google Images.
 *  http://www.oriongunning.com/
 *
 *  Made by Orion Gunning
 *  Under MIT License
 */
;
(function($) {

  //Ensures there will be no 'console is undefined' errors in IE
  window.console = window.console || (function() {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {};
    return c;
  })();

  /* Custom Easing */
  $.fn.extend($.easing, {
    def: "easeInOutExpo",
    easeInOutExpo: function(e, f, a, h, g) {
      if (f === 0) {
        return a;
      }
      if (f === g) {
        return a + h;
      }
      if ((f /= g / 2) < 1) {
        return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
      }
      return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
    }
  });

  /* KEYPRESS LEFT & RIGHT ARROW */
  /* This will work only if a current gridder is opened. */
  $(document).keydown(function(e) {
    var keycode = e.keyCode;
    var $current_gridder = $(".currentGridder");
    var $current_target = $current_gridder.find(".gridder-show");
    if ($current_gridder.length) {
      if (keycode === 37) {
        console.log("Pressed Left Arrow");
        $current_target.prev().prev().trigger("click");
        e.preventDefault();
      }
      if (keycode === 39) {
        console.log("Pressed Right Arrow");
        $current_target.next().trigger("click");
        e.preventDefault();
      }
    } else {
      console.log("No active gridder.");
    }
  });

  $.fn.gridderExpander = function(options) {

    /* GET DEFAULT OPTIONS OR USE THE ONE PASSED IN THE FUNCTION  */
    var settings = $.extend({}, $.fn.gridderExpander.defaults, options);

    return this.each(function() {

      var mybloc;
      var _this = $(this);
      var visible = false;

      // START CALLBACK
      settings.onStart(_this);

      // CLOSE FUNCTION
      function closeExpander(base) {

        // SCROLL TO CORRECT POSITION FIRST
        if (settings.scroll) {
          $("html, body").animate({
            scrollTop: base.find(".selectedItem").offset().top - settings.scrollOffset
          }, {
            duration: 200,
            easing: settings.animationEasing
          });
        }

        _this.removeClass("hasSelectedItem");

        // REMOVES GRIDDER EXPAND AREA
        visible = false;
        base.find(".selectedItem").removeClass("selectedItem");

        base.find(".gridder-show").slideUp(settings.animationSpeed, settings.animationEasing, function() {
          base.find(".gridder-show").remove();
          settings.onClosed(base);
        });

        /* REMOVE CURRENT ACTIVE GRIDDER */
        $(".currentGridder").removeClass("currentGridder");
      }

      // OPEN EXPANDER
      function openExpander(myself) {

        /* CURRENT ACTIVE GRIDDER */
        $(".currentGridder").removeClass("currentGridder");
        _this.addClass("currentGridder");

        /* ENSURES THE CORRECT BLOC IS ACTIVE */
        if (!myself.hasClass("selectedItem")) {
          _this.find(".selectedItem").removeClass("selectedItem");
          myself.addClass("selectedItem");
        } else {
          // THE SAME IS ALREADY OPEN, LET"S CLOSE IT
          closeExpander(_this, settings);
          return;
        }

        /* REMOVES PREVIOUS BLOC */
        _this.find(".gridder-show").remove();

        /* ADD CLASS TO THE GRIDDER CONTAINER
         * So you can apply global style when item selected. 
         */
        if (!_this.hasClass("hasSelectedItem")) {
          _this.addClass("hasSelectedItem");
        }

        /* ADD LOADING BLOC */
        var $htmlcontent = $("<div class=\"gridder-show loading\"></div>");
        mybloc = $htmlcontent.insertAfter(myself);

        /* GET CONTENT VIA AJAX OR #ID*/
        var thecontent = "";

        if (myself.data("griddercontent").indexOf("#") === 0) {

          // Load #ID Content
          thecontent = $(myself.data("griddercontent")).html();
          processContent(myself, thecontent);
        } else {

          // Load AJAX Content
          $.ajax({
            type: "POST",
            url: myself.data("griddercontent"),
            success: function(data) {
              thecontent = data;
              processContent(myself, thecontent);
            },
            error: function(request) {
              thecontent = request.responseText;
              processContent(myself, thecontent);
            }
          });
        }
      }

      // PROCESS CONTENT
      function processContent(myself, thecontent) {

        /* FORMAT OUTPUT */
        var htmlcontent = "<div class=\"gridder-padding\">";

        if (settings.showNav) {

          /* CHECK IF PREV AND NEXT BUTTON HAVE ITEMS */
          var prevItem = ($(".selectedItem").prev());
          var nextItem = ($(".selectedItem").next().next());

          htmlcontent += "<div class=\"gridder-navigation\">";
          htmlcontent += "<a href=\"#\" class=\"gridder-nav prev " + (!prevItem.length ? "disabled" : "") + "\">" + settings.prevText + "</a>";
          htmlcontent += "<a href=\"#\" class=\"gridder-close\">" + settings.closeText + "</a>";
          htmlcontent += "<a href=\"#\" class=\"gridder-nav next " + (!nextItem.length ? "disabled" : "") + "\">" + settings.nextText + "</a>";
          htmlcontent += "</div>";
        }

        htmlcontent += "<div class=\"gridder-expanded-content\">";
        htmlcontent += thecontent;
        htmlcontent += "</div>";
        htmlcontent += "</div>";

        // IF EXPANDER IS ALREADY EXPANDED 
        if (!visible) {
          mybloc.hide().append(htmlcontent).slideDown(settings.animationSpeed, settings.animationEasing, function() {
            visible = true;
            /* AFTER EXPAND CALLBACK */
            if ($.isFunction(settings.onContent)) {
              settings.onContent(mybloc);
            }
          });
        } else {
          mybloc.html(htmlcontent);
          mybloc.find(".gridder-padding").fadeIn(settings.animationSpeed, settings.animationEasing, function() {
            visible = true;
            /* CHANGED CALLBACK */
            if ($.isFunction(settings.onContent)) {
              settings.onContent(mybloc);
            }
          });
        }

        /* SCROLL TO CORRECT POSITION AFTER */
        if (settings.scroll) {
          var offset = (settings.scrollTo === "panel" ? myself.offset().top + myself.height() - settings.scrollOffset : myself.offset().top - settings.scrollOffset);
          $("html, body").animate({
            scrollTop: offset
          }, {
            duration: settings.animationSpeed,
            easing: settings.animationEasing
          });
        }

        /* REMOVE LOADING CLASS */
        mybloc.removeClass("loading");
      }

      /* CLICK EVENT */
      _this.find(".gridder-list").on("click", function(e) {
        e.preventDefault();
        var myself = $(this);
        openExpander(myself);
      });

      /* NEXT BUTTON */
      _this.on("click", ".gridder-nav.next", function(e) {
        e.preventDefault();
        $(this).parents(".gridder-show").next().trigger("click");
      });

      /* PREVIOUS BUTTON */
      _this.on("click", ".gridder-nav.prev", function(e) {
        e.preventDefault();
        $(this).parents(".gridder-show").prev().prev().trigger("click");
      });

      /* CLOSE BUTTON */
      _this.on("click", ".gridder-close", function(e) {
        e.preventDefault();
        closeExpander(_this);
      });
    });
  };

  // Default Options
  $.fn.gridderExpander.defaults = {
    scroll: true,
    scrollOffset: 30,
    scrollTo: "panel", // panel or listitem
    animationSpeed: 400,
    animationEasing: "easeInOutExpo",
    showNav: true,
    nextText: " ",
    prevText: " ",
    closeText: " ",
    onStart: function() {},
    onContent: function() {},
    onClosed: function() {}
  };

})(jQuery);


