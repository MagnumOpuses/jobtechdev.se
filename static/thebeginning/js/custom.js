/**
Core script to handle the entire theme and core functions
**/
var Rama = function(){
	/* Search Bar ============ */
	siteUrl = '';
	
	var screenWidth = $( window ).width();
	
	var homeSearch = function() {
		'use strict';
		/* Quik search in header on click function */
		var quikSearch = $("#quik-search-btn");
		var quikSearchRemove = $("#quik-search-remove");
		
		quikSearch.on('click',function() {
			$('.dez-quik-search').animate({'width': '100%' });
			$('.dez-quik-search').delay(500).css({'left': '0'  });
		});
		
		quikSearchRemove.on('click',function() {
			$('.dez-quik-search').animate({'width': '0%' ,  'right': '0'  });
			$('.dez-quik-search').css({'left': 'auto'  });
		});	
		/* Quik search in header on click function End*/
	}
	
	var cartButton = function(){
		$(".item-close").on('click',function(){
			$(this).closest(".cart-item").hide('500');
		});
		$('.cart-btn').unbind().on('click',function(){
			$(".cart-list").slideToggle('slow');
		})
		
	}  
	
	/* One Page Layout ============ */
	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt($('.onepage').css('height'), 10);
		$(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = $(hash).offset().top;
				var headerHeight =   parseInt($('.onepage').css('height'), 10);
				
				
				$('body').scrollspy({target: ".navbar", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight);
				
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		$('body').scrollspy({target: ".navbar", offset: headerHeight + 4});
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		$('.header').css('height','');
		var headerHeight = $('.header').height();
		$('.header').css('height', headerHeight);
	}
	
	/* Load File ============ */
	var dzTheme = function(){
		 'use strict';
		 var loadingImage = '<img src="images/loading.gif">';
		 jQuery('.dzload').each(function(){
		 var dzsrc =   siteUrl + $(this).attr('dzsrc');
		  //jQuery(this).html(loadingImage);
		 	jQuery(this).hide(function(){
				jQuery(this).load(dzsrc, function(){
					jQuery(this).fadeIn('slow');
				}); 
			})
			
		 });
		 //alert(screenWidth);
		 if(screenWidth < 991)
		{
			if($('.mo-left .header-nav').children('div').length == 0){
				var logoData = jQuery('<div>').append($('.mo-left .logo-header').clone()).html();
				jQuery('.mo-left .header-nav').prepend(logoData);
				jQuery('.mo-left .header-nav .logo-header > a > img').attr('src','images/logo.png');
				jQuery('.mo-left.lw .header-nav .logo-header > a > img').attr('src','images/logo-white.png');
				jQuery('.header-style-4.mo-left.style-1 .header-nav .logo-header > a > img').attr('src','images/logo-white.png');
			}
		}else{
			jQuery('.mo-left .header-nav div').empty();
			jQuery('.mo-left.lw .header-nav div').empty();
		}
				
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				//e.preventDefault();
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
	}
	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		'use strict';	
		/* magnificPopup function */
		$('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
		/* magnificPopup function end */
		
		/* magnificPopup for paly video function */		
		$('.video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});
		/* magnificPopup for paly video function end*/
		/* magnificPopup for paly video function end*/
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}
	
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		'use strict';
		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* handle Accordian ============ */
	var handleAccordian = function(){
		/* accodin open close icon change */	 	
		jQuery('#accordion').on('hidden.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		jQuery('#accordion').on('shown.bs.collapse', function(e){
			jQuery(e.target)
				.prev('.panel-heading')
				.find("i.indicator")
				.toggleClass('glyphicon-minus glyphicon-plus');
		});
		/* accodin open close icon change end */
	}
	
	/* handle Placeholder ============ */
	var handlePlaceholder = function(){
		/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").focus(function () {
				if (jQuery(this).val() == jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() == "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").submit(function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() == jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}
	
	/* Equal Height ============ */
	var equalHeight = function(container) {
		
		if(jQuery(container).length == 0)
		{
			return false
		}
			
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0;
			
		$(container).each(function() {
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
	
	/* Footer Align ============ */
	var footerAlign = function() {
		'use strict';
		jQuery('.site-footer').css('display', 'block');
		jQuery('.site-footer').css('height', 'auto');
		var footerHeight = jQuery('.site-footer').outerHeight();
		jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
		jQuery('.site-footer').css('height', footerHeight);
	}
	
	
	/* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			var menu = jQuery('.sticky-header');
			if ($(window).scrollTop() > menu.offset().top) {
				menu.addClass('is-fixed');
				$('.header-style-5 .container > .logo-header .logo').attr('src','images/logo.png');
			} else {
				menu.removeClass('is-fixed');
				$('.header-style-5 .container > .logo-header .logo').attr('src','images/logo-white.png')
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(){
		'use strict';
		/* masonry by  = bootstrap-select.min.js */ 
		var self = $("#masonry");
		self.imagesLoaded(function () {
			self.masonry({
				gutterWidth: 15,
				isAnimated: true,
				itemSelector: ".card-container"
			});
		});

		$(".filters").on('click','li',function(e) {
			e.preventDefault();
			var filter = $(this).attr("data-filter");
			self.masonryFilter({
				filter: function () {
					if (!filter) return true;
					return $(this).attr("data-filter") == filter;
				}
			});
		});
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	
		
	/* Set Div Height ============ */
	var setDivHeight = function(){	
		'use strict';
		var allHeights = [];
		jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){
			allHeights.push(jQuery(this).height());
		})

		jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){
			var maxHeight = Math.max.apply(Math,allHeights);
			jQuery(this).css('height',maxHeight);
		})
		
		allHeights = [];
		/* Removice */
		//var screenWidth = $( window ).width();
		if(screenWidth < 991)
		{
			jQuery('.dzseth > div, .dzseth .img-cover, .dzseth .seth').each(function(e){
				jQuery(this).css('height','');
			})
		}	
	}
	
	/* Counter Number ============ */
	var counter = function(){
		  if(jQuery('.counter').length > 0)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	/* handle Bootstrap Select ============ */
	var handleBootstrapSelect = function(){
		/* Bootstrap Select box function by  = bootstrap-select.min.js */ 
		if (jQuery('select').length) {
		    jQuery('select').selectpicker();
		}
		/* Bootstrap Select box function by  = bootstrap-select.min.js end*/
	}
	
	/* handle Bootstrap Touch Spin ============ */
	var handleBootstrapTouchSpin = function(){
		jQuery("input[name='demo_vertical2']").TouchSpin({
		  verticalbuttons: true,
		  verticalupclass: 'fa fa-plus',
		  verticaldownclass: 'fa fa-minus'
		});
		
	}
	/* Resizebanner ============ */
	var handleBannerResize = function(){
		$(".full-height").css("height", $(window).height());
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length > 0)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	/* Content Scroll ============ */
	var handleCustomScroll = function(){
		/* all available option parameters with their default values */
		if($(".content-scroll").length > 0)
		{ 
			$(".content-scroll").mCustomScrollbar({
				setWidth:false,
				setHeight:false,
				axis:"y"
			});	
		}
	}
	
	/* Left Menu ============ */
	var handleSideBarMenu = function(){
		$('.openbtn').on('click',function(e){
			e.preventDefault();
			//document.getElementById("mySidenav").style.width = "280px";
			//document.getElementById("main").style.marginLeft = "280px";
			if($('#mySidenav').length > 0)
			{
				document.getElementById("mySidenav").style.right = "0";
			}

			if($('#mySidenav1').length > 0)
			{
				document.getElementById("mySidenav1").style.right = "0";
			}
		})
		
		$('.closebtn').on('click',function(e){
			e.preventDefault();
			//document.getElementById("mySidenav").style.width = "0";
			//document.getElementById("main").style.marginLeft= "0";
			if($('#mySidenav').length > 0)
			{
				document.getElementById("mySidenav").style.right = "-300px";
			}
			
			if($('#mySidenav1').length > 0)
			{
				document.getElementById("mySidenav1").style.right = "-820px";
			}
		})
	}
	
	
	/* BGEFFECT ============ */
	var handleBGElements = function(){
		
		if(screenWidth > 1023)
		{
			if(jQuery('.bgeffect').length)
			{
				var s = skrollr.init({
					edgeStrategy: 'set',
					easing: {
						WTF: Math.random,
						inverted: function(p) {
							return 1-p;
						}
					}
				});			
			}		
		}
	}
	
	var boxHover = function(){
		'use strict';
		jQuery('.box-hover').on('mouseenter',function(){
			jQuery('.box-hover').removeClass('active');
			jQuery(this).addClass('active');
			
		})
	}
	
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	var handleResize = function (){
		'use strict';
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
			equalHeight('.equal-wraper .equal-col');
			footerAlign();
		});
	}
	
	var handleSetHeight = function (){
		windowHeight = jQuery(window).innerHeight();
		jQuery('.content-admin-wraper , .aon-custo-map-iner , .full-screen-content').css('min-height', windowHeight);
	}
	
	
	var wow_animation = function (){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       100,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}

	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear(); 
	/* Website Launch Date END */ 
	
	
	/* Function ============ */
	return {
		init:function(){
			boxHover();
			wow_animation();
			dzTheme();
			handleResizeElement();
			homeSearch();
			MagnificPopup();
			handleAccordian();
			scrollTop();
			handlePlaceholder();
			footerAlign();
			headerFix();
			setDivHeight();
			handleVideo();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handleCustomScroll();
			handleSideBarMenu();
			cartButton();
			handleBannerResize();
			handleResize();
			handleSetHeight();
			jQuery('.modal').on('show.bs.modal', reposition);
		},


		load:function(){
			handleBGElements();
			handleBootstrapSelect();
			handleBootstrapTouchSpin();
			onePageLayout();
			counter();
			masonryBox();
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();
			handleResizeElement();
			setDivHeight();
			handleSetHeight();
		}
	}
	
}();



/* Document.ready Start */	
jQuery(document).ready(function() {

	Rama.init();
	jQuery('.tp-bgimg').after("<div class='overlay-row'></div>");
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on("load", function (e) {
	Rama.load();
	 setTimeout(function(){
		jQuery('#loading-area').remove();
	}, 0);
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Rama.resize();
});
/*  Window Resize END */