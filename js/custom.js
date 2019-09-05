//Navigation
!function(i){i.fn.menumaker=function(n){var e=i(this),s=i.extend({title:"Menu",format:"language-changer",sticky:!1},n);return this.each(function(){return e.find("li ul, li .mega-dropdown").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){i(this).toggleClass("submenu-opened"),i(this).siblings("ul,.mega-dropdown").hasClass("open")?i(this).siblings("ul,.mega-dropdown").removeClass("open").hide():i(this).siblings("ul,.mega-dropdown").addClass("open").show()})},"multitoggle"===s.format?multiTg():e.addClass("language-changer"),s.sticky===!0&&e.css("position","fixed"),resizeFix=function(){i(window).width()>1024&&e.find("ul,.mega-dropdown").show(),i(window).width()<=1024&&e.find("ul,.mega-dropdown").hide().removeClass("open")},function(){$(window).width()>1024?(resizeFix("resize"),i(window).on(resizeFix)):(resizeFix(),i(window).on(resizeFix))}})}}($),function(i){i(document).ready(function(){$(".mega-dropdown").parent().addClass("has-mega"),i("#push_sidebar").menumaker({title:"",format:"multitoggle"})})}(jQuery);
// For small screen Nav
jQuery(document).mouseup(function(a){	
var f=jQuery(a.target).closest(".nav-trigger"),g=jQuery(a.target).closest("#push_sidebar");f.length?(a.preventDefault(),jQuery("html").toggleClass('sidebar_active'),jQuery(".nav-trigger").toggleClass("closemenu")):g.length||(jQuery("html").removeClass('sidebar_active'),jQuery(".nav-trigger").removeClass("closemenu"));});
// For menu position
function isTouchDevice(){return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);}if(isTouchDevice()===true){}else{jQuery(window).on('load', function(){setTimeout(function() {jQuery("ul.nav > li.has-sub").hover(function(){var s=jQuery("header").offset(),t=jQuery("header").width(),e=s.left+t,i=jQuery(this).find(".submenu-button").siblings("ul").offset(),n=jQuery(this).find(".submenu-button").siblings("ul").width();e<i.left+n&&jQuery(this).addClass("align-left-menu")},function(){jQuery(this).removeClass("align-left-menu")}),jQuery("ul.nav ul li.has-sub").hover(function(){var s=jQuery("header").offset(),t=jQuery("header").width(),e=s.left,i=e+t,n=jQuery(this).find(".submenu-button").siblings("ul").offset(),l=jQuery(this).find(".submenu-button").siblings("ul").width(),u=n.left;i<u+l&&(jQuery(this).addClass("align-left-menu")),e>u&&jQuery(this).addClass("align-right-menu")},function(){jQuery(this).removeClass("align-left-menu"),jQuery(this).removeClass("align-right-menu")}),jQuery(".nav-wrap nav ul.nav ul .has-sub").each(function(iz) {jQuery(this).css("z-index","500"-iz);});},200);});}
//Navigation End

// Header Shrink
$(function(){function b(){return window.pageYOffset||document.documentElement.scrollTop}$(window).scroll(function(){b()>=1?($("html").addClass("head-fix")):($("html").removeClass("head-fix"))})});
// Header Shrink End

// Background set
$(".bg img").each(function(da){var db=$(this).attr("src");$(this).parent().css("background-image","url("+db+")")});

// scroll up
jQuery(window).scroll(function(){jQuery(this).scrollTop()>0?jQuery(".scrollup").addClass("show"):jQuery(".scrollup").removeClass("show")}),jQuery(".scrollup").click(function(){return jQuery("html, body").animate({scrollTop:0},500),!1});	


// footer heading
jQuery('footer [class*="col-"]:nth-child(1) .mobile-collapse').css('display','block');
jQuery('footer [class*="col-"]:nth-child(1) h3').addClass('active');
jQuery('footer [class*="col-"]:nth-child(1) .mobile-collapse').addClass('active');
jQuery('footer h3').click(function(){
jQuery('footer h3').removeClass('active');
jQuery('footer .mobile-collapse').slideUp('slow');
jQuery('footer .mobile-collapse').removeClass('active');
jQuery(this).addClass('active');
jQuery(this).next().slideDown('100').addClass('active');
});


// class adding in image
$(".alignright,.alignleft").closest("p").addClass("pn")

// Table wrap
$("table").wrap("<div class='table-responsive'></div>");

// Lazy load
$(function(a){var b=function(){a("[data-image]").each(function(){var b=a(this).offset().top,c=a(window).scrollTop(),d=a(window).height(),e=b-c<d;e&&(a(this).attr("src",a(this).attr("data-image")).removeClass("lazy"),a(this).attr("src",a(this).attr("data-image")).addClass("lazyFade"),$(".bg-photo img").each(function(da){var db=$(this).attr("src");$(this).parent().css("background-image","url("+db+")")}))})};a(function(){b(),a(window).scroll(function(){b()}),a(window).on("load", function () {b()})})});
//All Function

// Equal Height	
equalheight = function(equalRow){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
   $(equalRow).each(function() {	 
   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;
   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
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
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
var all_elemnt1 = $(".latest-articles-wrap .allBox .box");
var all_elemnt2 = $(".related-articles-wrap .box");
$(window).load(function() {
equalheight(all_elemnt1);
equalheight(all_elemnt2);
setTimeout(function() {
equalheight(all_elemnt1);
equalheight(all_elemnt2);

},300 );

});
$(window).resize(function(){
equalheight(all_elemnt1);
equalheight(all_elemnt2);

setTimeout(function() {
equalheight(all_elemnt1);
equalheight(all_elemnt2);

},300 );
});

// Margin top
$(window).load(function() {
var setMargin=$("header").outerHeight();jQuery(".margin-top").css("margin-top",setMargin);
setTimeout(function() {
var setMargin=$("header").outerHeight();jQuery(".margin-top").css("margin-top",setMargin);
},300 );
});
$(window).resize(function(){
var setMargin=$("header").outerHeight();jQuery(".margin-top").css("margin-top",setMargin);
setTimeout(function() {
var setMargin=$("header").outerHeight();jQuery(".margin-top").css("margin-top",setMargin);
},300 );
});


//Effect Add Jquery
//Effect Name
var hinge = $("");
var swing = $("");
var fadeInLeft = $("");
var fadeInRight = $("");
var fadeInUp = $(" footer .row ul li , footer .row p , .communication .box:nth-child(2), .content-sec h1, .content-sec h2, .content-sec h3, .content-sec h4,.content-sec h5, .content-sec h6 , .content-sec p , .content-sec ul li, .consultation.in .form-field , .inner-banner .heading, .inner-banner p");
var fadeInDown = $("");
var fadeIn = $("");
var slideInUp = $("");
var zoomIn = $("");
//Effect Name End
$(function() {
$(hinge).addClass("animateblock hinge");
$(swing).addClass("animateblock swing");
$(fadeInLeft).addClass("animateblock fadeInLeft");
$(fadeInRight).addClass("animateblock fadeInRight");
$(fadeInUp).addClass("animateblock fadeInUp");
$(fadeInDown).addClass("animateblock fadeInDown");
$(fadeIn).addClass("animateblock fadeIn");
$(slideInUp).addClass("animateblock slideInUp");
$(zoomIn).addClass("animateblock zoomIn");	
function getCurrentScroll() {
return window.pageYOffset || document.documentElement.scrollTop;
}
var $elems = $('.animateblock');
var winheight = $(window).height();
var fullheight = $(document).height();
animate_elems();
$(window).scroll(function(){animate_elems();});
function animate_elems() {
wintop = $(window).scrollTop();
$elems.each(function() {
$elm = $(this);
if ($elm.hasClass('animated')) {
return true;
}
topcoords = $elm.offset().top;
if (wintop > (topcoords - (winheight * .9))) {
$elm.addClass('animated');
}
});
}});


//youtube video play
var i,c,y,v,s,n;var im=new Array();v=document.getElementsByClassName("youtube");for(n=0;n<v.length;n++){im[n]=v[n].hasAttribute("src")?v[n].getAttribute("src"):"http://i.ytimg.com/vi/"+ v[n].id+"/hqdefault.jpg";}
if(v.length>0){s=document.createElement("style");s.type="text/css";s.innerHTML='.youtube{}';document.body.appendChild(s);}
for(n=0;n<v.length;n++){y=v[n];i=document.createElement("img");i.setAttribute("src",im[n]);i.setAttribute("class","thumb");c=document.createElement("div");c.setAttribute("class","play");y.appendChild(i);y.appendChild(c);y.onclick=function(){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+ this.id+ param(this));t.style.width=this.style.width;t.style.height=this.style.height;this.parentNode.replaceChild(t,this);}};function param(x){if(x.getAttribute("data-params")!==null){return x.getAttribute("data-params");}else{return"?rel=0&amp;autoplay=1";}}



//bodyheight
dochei = function(){
var doc = $(document).height();
$('body').height(doc);
}
$(window).load(function() {	
setTimeout(function() {
dochei();
},300 );
});
$(window).resize(function(){
dochei();
setTimeout(function() {
dochei();
},300 );
});


$('header .search-country i').click(function(){
	$('.search-Box').toggleClass('open');
	$(this).parent().toggleClass('icon');
	return false;
	
})
