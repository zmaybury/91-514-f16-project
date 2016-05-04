(function($){
  
  breakTablet = 800;
  breakMobile = 600;
  
  // For use within normal web clients
  var isiPad = navigator.userAgent.match(/iPad/i) != null;

  // For use within iPad developer UIWebView
  // Thanks to Andrew Hedges!
  var ua = navigator.userAgent;
  var isiPad = /iPad/i.test(ua) || /iPhone OS 3_1_2/i.test(ua) || /iPhone OS 3_2_2/i.test(ua);
  (function(doc) {
    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
    function fix() {
      meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
      doc.removeEventListener(type, fix, true);
    }
    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
      fix();
      scales = [0.25, 1.6];
      doc[addEvent](type, fix, true);
    }

  }(document));
  // usage: log('inside coolFunc', this, arguments);
  // paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
  window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; try { args.callee = f.caller } catch(e) {}; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

  // make it safe to use console.log always
  (function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
  (function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());
  
  // .moreInfo() is the script used to toggle the extra news/events in the home page buckets
  $.fn.moreInfo = function() {
    var toggler = $(this);
    toggler.on('click', function(evt) {
      evt.preventDefault();
      var self = $(this),
      myParent = self.parents('.bucket'),
      moreInfo = myParent.find('.bucket-info_more');
      if(myParent.attr('id') === 'bucket-news') {
        var specs = 'News';
      } else {
        var specs = 'Events';
      }
      if(!myParent.hasClass('open')) {
        moreInfo
          .stop()
          .slideDown('fast', function() {
            self.text('View Less ' + specs + ' X');
            myParent.addClass('open');
            moreInfo.mCustomScrollbar("update");
          });
      } else {
        moreInfo
          .stop()
          .slideUp('fast', function() {
            self.text('View More ' + specs);
            myParent.removeClass('open');
          });
      }
    });
  };
  
  // .removeEmergency() is the script used to hide the emergency bar at top of window
  $.fn.removeEmergency = function() {
    var self = $(this),
    toggler = self.find('.toggler');
    toggler.on('click', function(evt) {
      evt.preventDefault();
      self.slideUp('fast', function() {
        self.removeClass('open');
      });
    });
  };
  
  // .showSearch() is the script used to show/hide the search options on focus/blur. 
  $.fn.showSearch = function() {
    var self = $(this),
    toggler = self.find('input'),
    extras = $('#search-options');
    var pos = $("nav").offset();  
    width = toggler.width();

    extras.css( { "left": (pos.left + width) + "px", "top": "-64px" } );
    
    toggler
      .on('focus', function() {
        extras.slideDown('fast');
        $('.unosearch > #q').attr('temp', $('.unosearch > #q').attr('placeholder'));
        $('.unosearch > #q').attr('placeholder','');
        $('.unosearch > #q').css({'background-color':'#8f8f8f','color':'#222'});
      })
      .on('blur', function() {
        setTimeout(function() {
            extras.slideUp('fast');
	        $('.unosearch > #q').attr('placeholder',$('.unosearch > #q').attr('temp'));
	        $('.unosearch > #q').css({'background-color':'#454545','color':'#E6E6CF'});
    	}, 100);
      });

  };
  
  
  function placeInfo() {
    // PLACING THE HOME PAGE FLEXSLIDER INFO
    if($('#bucket-news').length) {
      var x = $('#bucket-news'),
      xPos = x.offset(),
      xLeft = xPos.left;
      //$('#bucket-news > #slide-info_container').css('left',xLeft);
      $('#slide-info_container').css('left',xLeft);
    }
    if($(window).width() < 600) {
      var breaker = 'break-mobile';
      $('html').removeClass('break-tab no-break');
    } else if ($(window).width() > 600 && $(window).width() < 800) {
      var breaker = 'break-tab';   
      $('html').removeClass('break-mobile no-break');
    } else {
      var breaker = 'no-break';
      $('html').removeClass('break-mobile break-tab');
    }
    $('html').addClass(breaker);
    // PLACING THE SEARCH BAR
    if($('#search-options').length)
	{   
		var s = $('#header .search'),
		sPos = s.offset(),
		sLeft = sPos.left;
		if($(window).width() < breakTablet) {
		  //sLeft = sLeft - 43;
          sLeft = sLeft - 0;
		} else if($(window).width() < breakMobile) {
		  $('#search-options').css('display', 'none');
		}
		$('#search-options').css('left',sLeft);
	}
  }
  
  function changeInfo() {
	     var nextH2 = $('#slide-main .flex-active-slide').find('h2').text(),
	     nextH3 = $('#slide-main .flex-active-slide').find('h3').text();
   
	     $('#slide-info_container')
	       .find('h2')
	       .text(nextH2)
	       .next('h3')
	       .text(nextH3);
    
    $('#slide-info_container h3').click(function(){
    	window.location.href=$('#slide-main .flex-active-slide').find('div.newslink').text();
    	
    }).css({'cursor':'pointer'});
   
  
    $('#slide-info_container').parent().find("figure,img").click(function(){
    	window.location.href=$('#slide-main .flex-active-slide').find('div.newslink').text();

    	
    }).css({'cursor':'pointer'});
  }

  


  // fires same as $(document).ready
  $(function() {
    $('.more-toggler').moreInfo();
    $('#uno-emergency').removeEmergency();
    $('#header .search').showSearch();
    $('figure.responsive').picture();
    $(window).resize(placeInfo);
    placeInfo();
    
    
  });
  
  // ON WINDOW LOAD SCRIPTS
  window.onload = function(){
    
	if($('#slide-main').length)
	{
		$('#slide-main').flexslider({
		  animation: 'slide',
		  directionNav: false,
		  controlsContainer: '#slide-controls',
		  slideshow: true,
		  animationLoop: true,
		  start: function(slider) {
	 		    changeInfo();
		    $('#slide-info_container').mouseover(function(){
		    		slider.pause()
		    }).mouseout(function(){
		    	slider.play()
		    	
		    });
		    
		    
	 		  },

		  after: function(slider) {
	 		    changeInfo();
	 		  }
	 		});
	 	}
    
    $('#bucket-news .bucket-info').flexslider({
      animation: 'slide',
      controlsContainer: '#bucket-news .bucket-nav',
      slideshow: false,
      animationLoop: true,
      start: function() {
        $('#bucket-news.bucket').css('left', 0);
        placeInfo();
      }     
    });
    
    $('#bucket-events .bucket-info').flexslider({
      animation: 'slide',
      controlsContainer: '#bucket-events .bucket-nav',
      slideshow: false,
      animationLoop: true,
      start: function() {
        $('#bucket-events.bucket').css('left', 0);
      }
    });
    
    $('.bucket-info_more').mCustomScrollbar();
  };

})(jQuery);

$(document).ready(function(){
    $('a.department').filter(function()
        { return $(this).text().length > 50; }
        ).addClass('shrink');
});

$(document).ready(function(){
    if (jQuery().dropdownHover) {    
        $('[data-toggle="dropdown"]').dropdownHover({delay:'100'});
    }
    
    /* remove primary class for shared templates */
    var pathArray = window.location.pathname.split( '/' );
    var rootPath = pathArray [ 1 ];
    if (rootPath != 'news' && rootPath != 'blogs') {
        //$( "#sup-navigation > form" ).wrap( "<div class='search'></div>" );
        $("#header").removeClass('primary');
    }
    
    if($('div.btn-item a,div.item a').length)
	{
	$("div.btn-item a,div.item a").bigTarget({
		hoverClass: 'bigover', // CSS class applied to the click zone onHover
		clickZone : 'div:eq(0)' // jQuery parent selector
	});
	}
    
    var customCx = getUrlParameters('cx', '', true);
    var cx = '';
    if(!customCx) {
        cx = '013054052462175277336:ppfgpjirxm4';
    } else {
        cx = customCx;
    }
    var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
});

function getUrlParameters(parameter, staticURL, decode){
    if (!window.location.search)
        return false;
        
    var currLocation = (staticURL.length)? staticURL : window.location.search,
       parArr = currLocation.split("?")[1].split("&"),
       returnBool = true;
   
    for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;            
        }
   }
   
   if(!returnBool) return false;
}

$(function() {
    if ($(".vimeo_img").length > 0) {
        $( ".vimeo_img" ).each(function( index ) {
            var vimeo_img_id = $( this ).html();
            if ( $.isNumeric( vimeo_img_id ) ) {
                var imgThis = $( this );
                $.get('//vimeo.com/api/oembed.xml?url=https%3A//vimeo.com/' + vimeo_img_id, function(d){
                    //console.log(d);
                    var thumbnail_url = $(d).find('thumbnail_url').text();
                    var img_src = '<img src="' + thumbnail_url + '" class="img-responsive"/>';
                    $( imgThis ).html( img_src ).show();
                });
            }
        });
    }
});

if($.fn.magnificPopup){
    $(document).ready(function() {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 400,
                type: 'iframe',
            	mainClass: 'mfp-fade',
        		removalDelay: 160,
        		preloader: false,
        		fixedContentPos: false
        	});
    });
}
