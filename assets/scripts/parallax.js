function mr_parallax(){"use strict";function e(){var e,t=0;return s()?(t=jQuery(".viu").find("nav:first").outerHeight(!0),("absolute"===(e=jQuery(".viu").find("nav:first").css("position"))||"fixed"===e)&&(t=0)):t=jQuery(document).find("nav:first").outerHeight(!0),t}function t(e,t,n,o){var r=e-1;return r/=o,e/=o,r--,e--,n*(e*e*e*e*e+1)+t-(n*(r*r*r*r*r+1)+t)}function n(){if(P){for(var e=d.length,l=r();e--;)o(d[e],l,c,h);P=!1}g&&(((M+=-y*t(v,0,j,D))>b||-b>M)&&(Q.scrollBy(0,M),M=0),++v>D&&(v=0,g=!1,p=!0,y=0,x=0,T=0,M=0)),u(n)}function o(e,t,n,o){s()?t+f-w>e.elemTop&&t-w<e.elemBottom&&(e.isFirstSection?e.imageHolder.style[m]=n+t/2+o:e.imageHolder.style[m]=n+(t-e.elemTop-w)/2+o):t+f>e.elemTop&&t<e.elemBottom&&(e.isFirstSection?e.imageHolder.style[m]=n+t/2+o:e.imageHolder.style[m]=n+(t+f-e.elemTop)/2+o)}function r(){return Q!=window?Q.scrollTop:0===document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop}function l(){P=!0}function a(e){!0===_.mr_scrollAssist&&(e.preventDefault&&e.preventDefault(),y=e.notRealWheel?-e.deltaY/4:1==e.deltaMode?-e.deltaY/3:100===Math.abs(e.deltaY)?-e.deltaY/120:-e.deltaY/40,y=-E>y?-E:y,y=y>E?E:y,g=!0,v=H)}function i(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function s(){return void 0!==window.mr_variant}var d,u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,m=function(e){for(var t=0;t<e.length;t++)if(void 0!==document.body.style[e[t]])return e[t];return null}(["transform","msTransform","webkitTransform","mozTransform","oTransform"]),c="translate3d(0,",h="px,0)",f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=0,g=!1,p=!0,v=0,y=0,x=0,T=0,E=2.2,H=2,j=350,b=1,D=35,M=0,Q=window,P=(s(),!1),_=this;this.mr_scrollAssist=!!$("body").hasClass("scroll-assist"),jQuery(document).ready(function(){_.documentReady()}),jQuery(window).load(function(){_.windowLoad()}),this.getScrollingState=function(){return v>0},this.documentReady=function(e){return f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),jQuery("body").hasClass("parallax-2d")&&(c="translate(0,",h="px)"),/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)?jQuery(".parallax").removeClass("parallax"):u&&(_.profileParallaxElements(),_.setupParallax()),i(e)?void e():void 0},this.windowLoad=function(){f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=e(),window.mr_parallax.profileParallaxElements()},this.setupParallax=function(){s()&&void 0!==(Q=jQuery(".viu").get(0))&&(Q.scrollBy=function(e,t){this.scrollTop+=t,this.scrollLeft+=e}),void 0!==Q&&(Q.addEventListener("scroll",l,!1),window.addWheelListener(Q,a,!1),window.addEventListener("resize",function(){f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=e(),_.profileParallaxElements()},!1),n())},this.profileParallaxElements=function(){d=[],w=e();var t=s(),n=".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";t&&(n=".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"),jQuery(n).each(function(e){var n=jQuery(this).closest(".parallax"),o=t?n.position().top:n.offset().top;d.push({section:n.get(0),outerHeight:n.outerHeight(),elemTop:o,elemBottom:o+n.outerHeight(),isFirstSection:!!n.is(":nth-of-type(1)"),imageHolder:jQuery(this).get(0)}),t?t&&(n.is(":nth-of-type(1)")?_.mr_setTranslate3DTransform(jQuery(this).get(0),0===r()?0:r()/2):_.mr_setTranslate3DTransform(jQuery(this).get(0),(r()-o-w)/2)):n.is(":nth-of-type(1)")?_.mr_setTranslate3DTransform(jQuery(this).get(0),0===r()?0:r()/2):_.mr_setTranslate3DTransform(jQuery(this).get(0),(r()+f-o)/2)})},this.mr_setTranslate3DTransform=function(e,t){e.style[m]=c+t+h}}window.mr_parallax=new mr_parallax,function(e,t){function n(t,n,a,i){t[o](l+n,"wheel"==r?a:function(t){!t&&(t=e.event);var n={originalEvent:t,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==r?(n.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(n.deltaX=-.025*t.wheelDeltaX)):n.deltaY=t.detail/3,a(n)},i||!1)}var o,r,l="";e.addEventListener?o="addEventListener":(o="attachEvent",l="on"),r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",e.addWheelListener=function(e,t,o){n(e,r,t,o),"DOMMouseScroll"==r&&n(e,"MozMousePixelScroll",t,o)}}(window,document);