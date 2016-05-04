;(function ($, window, undefined) {
  'use strict';

  $.fn.foundationNavigation = function (options) {    
    var lockNavBar = false,
    headerOrig = 141,  
    newH = 259;
    // Windows Phone, sadly, does not register touch events :(
    if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
      // $(document).on('click.fndtn touchstart.fndtn', '.nav-bar a.flyout-toggle', function (e) {
      //   e.preventDefault();
      //   var flyout = $(this).siblings('.flyout').first();
      //   if (lockNavBar === false) {
      //     $('.nav-bar .flyout').not(flyout).slideUp(500);
      //     $('header')
      //       .stop()
      //       .animate({height: newH}, 'fast');
      //     flyout.slideToggle('fast', function () {
      //       lockNavBar = false;
      //     });
      //   }
      //   lockNavBar = true;
      // });
      $('.nav-bar>li.has-flyout>a').on('click.fndtn touchstart.fndtn', function (e) {
        e.preventDefault();
        var flyout = $(this).siblings('.flyout').first(),
        thisP = $(this).parent('.has-flyout');
        if (!$('.nav-bar').hasClass('open-nav')) {
          thisP
						.addClass('current')
						.css({
							'background': 'url(/assets/css/images/bg_subNav.jpg) center center no-repeat',
							'padding-bottom': 7
						});
          $('#header').css('height', newH);
					flyout.show();
          $('.nav-bar').addClass('open-nav');
        } else if ($('.nav-bar').hasClass('open-nav') && !thisP.hasClass('current')) {
          $('.has-flyout')
            .removeClass('current')
						.css({
							'background': 'none',
							'padding-bottom': 0
						});
					thisP
						.addClass('current')
						.css({
							'background': 'url(/assets/css/images/bg_subNav.jpg) center center no-repeat',
							'padding-bottom': 7
						});
          $('.flyout').hide();
          flyout.show();  
        } else if ($('.nav-bar').hasClass('open-nav') && thisP.hasClass('current')) {
          $('.has-flyout')
            .removeClass('current')
						.css({
							'background': 'none',
							'padding-bottom': 0
						});
					$('.flyout').hide();
          $('#header').css('height', headerOrig);
          $('.nav-bar').removeClass('open-nav');
        }
      });
      $('.nav-bar>li.has-flyout', this)
				.removeClass('no-touch')
				.addClass('is-touch');
    } else {
      $('#header .nav-bar>li.has-flyout', this).on('mouseenter mouseleave', function (e) {
         if (e.type == 'mouseenter') {
           $('.nav-bar').find('.flyout').hide();
           // original script
           // $(this).children('.flyout').show();
           // new script
           $('#header .search')
             .find('input')
             .blur();
           $('#header')
             .stop()
             .animate({height: newH}, 'fast');
           if($('#header').hasClass('open')) {
             $(this)
               .children('.flyout')
               .show();
           } else {
             $(this)
               .children('.flyout')
               .stop()
               .slideDown('fast', function() {
                 $('#header').addClass('open');
               });
           }
           $('#header').addClass('from-desktop')
         }
         if (e.type == 'mouseleave') {	

           var flyout = $(this).children('.flyout'),
               inputs = flyout.find('input'),
               hasFocus = function (inputs) {
                 var focus;
                 if (inputs.length > 0) {
                   inputs.each(function () {
                     if ($(this).is(":focus")) {
                       focus = true;
                     }
                   });
                   return focus;
                 }
                 return false;
               };

           if (!hasFocus(inputs)) {
             // original script :
             // $(this).children('.flyout').hide();
             // new script ::
             $('#header')
               .stop()
               .animate({
                 height: headerOrig
               }, 'fast', function() {
                 $('#header').removeClass('open');
               });
             $(this)
               .children('.flyout')
               .stop()
               .slideDown('fast').
               hide();
           }
         }
      });
     }
  };

})( jQuery, this );
