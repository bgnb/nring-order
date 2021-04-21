(function($){

       
        /*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});

   function calcHSSliderLine() {
       if($('.hss-s-nav__item').length) {
            var hssNavW = $('.hss-s-nav__item_active').width();
            var hssNavPos = $('.hss-s-nav__item_active').position();
            var hssNavLeftReal = ($('.section_hard .section__wrap').width() - $('.hhs-s-nav').width()) / 2 + hssNavPos.left;
             $('.hhs-s-nav__line span').css({'width': hssNavW + 'px',
                'left': hssNavLeftReal + 'px'
             });  
       }
    }

    window.onload = function() {
       calcHSSliderLine();
    }
    
    $(window).resize(function() {
         calcHSSliderLine();
    });
  


    $( document ).ready(function() {
        
        
       
        function preventScrollOnThisEl(selector) {
  $(selector)
    .bind("mousewheel DOMMouseScroll", function(e) {
    basicTimeline.play();
      var scrollTo = null;

      if (e.type == "mousewheel") {
        scrollTo = e.originalEvent.wheelDelta * -1;
      } else if (e.type == "DOMMouseScroll") {
        scrollTo = 40 * e.originalEvent.detail;
      }

      if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
      }
    })
    .on("touchmove", function(e) {
      e.stopPropagation();
      e.preventDefault();
    });
}

preventScrollOnThisEl('.header__main');
        
        
        
        
        
        
        if($(window).outerWidth() > 1023) {
             $(".hhs-b-block").mousemove(function(e) {
          let screenWidth = $(window).width();
          let screenHeight = $(window).height();

           $(".hhs-b-slider__slide-footer").css({
             transform:
               "translate(" + e.pageX/screenWidth * 35 + "px, -" +
              (e.pageY / screenHeight) * 35 +
              "px)"
           });

          $(".hhs-b-slider__slide-title").css({
            transform:
              "translate(" +
              (e.pageX / screenWidth) * 35 +
              "px, -" +
              (e.pageY / screenHeight) * 35 +
              "px)"
          });
        });
        }
        
        
     
     $('.hss-s-nav__item').click(function() {
        $('.hss-s-nav__item').removeClass('hss-s-nav__item_active');
        $(this).addClass('hss-s-nav__item_active');
        calcHSSliderLine();
        $('.hss-s-slider').removeClass('hss-s-slider_active');
        $('.hhs-b-slider').removeClass('hhs-b-slider_active');
        findById($(this).attr('id'), 'hss-s-slider', 'hss-s-slider_active')
        findById($(this).attr('id'), 'hhs-b-slider', 'hhs-b-slider_active')
     });
     
     function findById(attrId, targetClass, activeClass) {
         $('.' + targetClass + '[data-hss=' + attrId + ']').addClass(activeClass);
     }
        
        if($(window).outerWidth() < 640) {
            var hsbSlider = new Swiper('.hhs-b-slider__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 15,
                allowTouchMove: true,
                effect: 'slide',
                speed: 1000,
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false
                },
                initialSlide: 1,
            });
        } else {
             var hsbSlider = new Swiper('.hhs-b-slider__swiper', {
                speed: 1000,
                spaceBetween: 0,
                slidesPerView: 1,
                effect: 'fade',
                allowTouchMove: false,
                loop: true,
                loopedSlides: 6,
            });
            
        }
        
        
        
        var hssSlider = new Swiper('.hss-s-slider__swiper', {
            speed: 1000,
            spaceBetween: 25,
            slidesPerView: 'auto',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            loop: true,
            loopedSlides: 6,
            slideToClickedSlide: true,
            // slidesOffsetBefore: 114,
             breakpoints: {
                 639: {
                  autoplay: false
                },
            },
        });
        
        for(var i = 0; i < hsbSlider.length; i++) {
            hsbSlider[i].controller.control = hssSlider[i];
            hssSlider[i].controller.control = hsbSlider[i];
        }
        
        
       
          
            
        
      function initMap(){
        var myMap = new ymaps.Map("map", {
          center: [56.121290,43.602147],
          controls: ['zoomControl'],
          zoom: 12,
          
        });

        var myPlacemark = new ymaps.Placemark([56.121290, 43.602147], {
        }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: 'template/img/icons/mapPointer.svg',
          iconImageSize: [22, 22],
          iconImageOffset: [-11, -11],
        });

        myMap.geoObjects
          .add(myPlacemark);

        myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
        
         myMap.behaviors.disable('scrollZoom'); 
         
    var multiRoute = new ymaps.multiRouter.MultiRoute({
       
        referencePoints: [
            $('.p-contacts__block-map-footer-nav_active').attr('data-roadpoint').split(', ').map(function(item) {
              return +item;
            }),
            [56.121290, 43.602147]
        ],
        params: {
            results: 1
        }
    }, {
        boundsAutoApply: true,
        mapStateAutoApply: true,
        
         wayPointFinishIconLayout: "default#image",
        wayPointFinishIconImageHref: 'template/img/icons/mapPointer.svg',
        wayPointFinishIconImageSize: [22, 22],
        wayPointFinishIconImageOffset: [-11, -11],
        wayPointStartIconLayout: "default#image",
        wayPointStartIconImageHref: 'template/img/icons/mapPointer.svg',
        wayPointStartIconImageSize: [22, 22],
        wayPointStartIconImageOffset: [-11, -11],
        
        routeActiveStrokeColor: "#ff0000",
    });

myMap.geoObjects.add(multiRoute);


    $('.p-contacts__block-map-footer-nav > div').click(function() {
            $(this).addClass('p-contacts__block-map-footer-nav_active')
                    .siblings()
                    .removeClass('p-contacts__block-map-footer-nav_active');
                    
                    $('.p-contacts__block-map-footer-slider').removeClass('p-contacts__block-map-footer-slider_active');
            $('#' + $(this).attr('data-route')).addClass('p-contacts__block-map-footer-slider_active');
            
            
            
            var coordArr = $(this).attr('data-roadpoint').split(', ').map(function(item) {
              return +item;
            });
            
           
            
              multiRoute.model.setReferencePoints([coordArr, [56.121290, 43.602147]], []);
              
         
            setTimeout(function() {
                    myMap.setBounds(multiRoute.getBounds());
            }, 500);
        
          });
      }

      if($('#map').length) {
          ymaps.ready(initMap);
     }
        
        
        
        
        
        // timer
        function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


function with_leading_zeros(dt) 
{ 
  return (dt < 10 ? '0' : '') + dt;
}
        

// var NRcountDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
var NRcountDownDate = new Date($('.header__countdown').attr('data-nrtimer')).getTime();


var NRx = setInterval(function() {


  var NRnow = new Date().getTime();


  var NRdistance = NRcountDownDate - NRnow;

 
  var NRdays = Math.floor(NRdistance / (1000 * 60 * 60 * 24));
  var NRhours = Math.floor((NRdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var NRminutes = Math.floor((NRdistance % (1000 * 60 * 60)) / (1000 * 60));
  var NRseconds = Math.floor((NRdistance % (1000 * 60)) / 1000);


    document.querySelector('.header__countdown-days').innerHTML = with_leading_zeros(NRdays);
    document.querySelector('.header__countdown-hours').innerHTML = with_leading_zeros(NRhours);
    document.querySelector('.header__countdown-minute').innerHTML = with_leading_zeros(NRminutes);
    document.querySelector('.header__countdown-sec').innerHTML = with_leading_zeros(NRseconds);
    
    document.querySelector('.header__countdown-t-days').innerHTML = declOfNum(NRdays, ['день', 'дня', 'дней']);
    document.querySelector('.header__countdown-t-hours').innerHTML = declOfNum(NRhours, ['час', 'часа', 'часов']);
    document.querySelector('.header__countdown-t-minute').innerHTML = declOfNum(NRminutes, ['минута', 'минуты', 'минут']);
    document.querySelector('.header__countdown-t-sec').innerHTML = declOfNum(NRseconds, ['секунда', 'секунды', 'секунд']);
    
  
  if (NRdistance < 0) {
    clearInterval(NRx);
        document.querySelector('.header__countdown-days').innerHTML = "0";
        document.querySelector('.header__countdown-hours').innerHTML = "0";
        document.querySelector('.header__countdown-minute').innerHTML = "0";
        document.querySelector('.header__countdown-sec').innerHTML = "0";
        
        document.querySelector('.header__countdown-t-days').innerHTML = declOfNum(0, ['день', 'дня', 'дней']);;
        document.querySelector('.header__countdown-t-hours').innerHTML = declOfNum(0, ['час', 'часа', 'часов']);;
        document.querySelector('.header__countdown-t-minute').innerHTML = declOfNum(0, ['минута', 'минуты', 'минут']);;
        document.querySelector('.header__countdown-t-sec').innerHTML = declOfNum(0, ['секунда', 'секунды', 'секунд']);;
  }
}, 1000);



        
          var mySwiper = new Swiper ('.p-contacts__block-map-footer-slider .swiper-container', {
            // spaceBetween: '70'
            slideToClickedSlide: true
            
          });
          
          $('.p-contacts__block-map-footer-nav > div').click(function() {
            $(this).addClass('p-contacts__block-map-footer-nav_active')
                    .siblings()
                    .removeClass('p-contacts__block-map-footer-nav_active');
                    
                    $('.p-contacts__block-map-footer-slider').removeClass('p-contacts__block-map-footer-slider_active');
            $('#' + $(this).attr('data-route')).addClass('p-contacts__block-map-footer-slider_active')        
          });
        
        $(document).on('click','.p-contacts__block_inactive', function() {
            $(this).removeClass('p-contacts__block_inactive')
            .addClass('p-contacts__block_active')
                    .siblings()
                    .removeClass('p-contacts__block_active')
                    .addClass('p-contacts__block_inactive');
                    
        });

    $('.header__i-search a, .btn_s-search a').click(function(e) {
        e.preventDefault();
        $('.search-popup').addClass('search-popup_active');
        disableBodyScroll();
    });
    
    $('.search-popup__close').click(function() {
         $('.search-popup').removeClass('search-popup_active');
         enableBodyScroll();
    });


    // general

        function disableBodyScroll() {
            $('html').css('overflow','hidden');
        }

        function enableBodyScroll() {
            $('html').css('overflow','auto');
        }

        // polyfill for object-fit property (ie, edge)

        objectFitImages('img.o-fit-polyfill');


    //   main page

        //    hover for footer:after,:before


        $( ".footer__column:first-child" ).hover(
            function() {
                $('.footer__top-wrapper').addClass('footer__top-wrapper_before');
            }, function() {
                $('.footer__top-wrapper').removeClass('footer__top-wrapper_before');
            }
        );

        $( ".footer__column:nth-last-child(2)" ).hover(
            function() {
                $('.footer__top-wrapper').addClass('footer__top-wrapper_after');
            }, function() {
                $('.footer__top-wrapper').removeClass('footer__top-wrapper_after');
            }
        );

    // header

        $('.header__burger').click(function () {

           $('.header__burger').toggleClass('header__burger_open');
           if($('.burger__block').hasClass('burger__block_active')) {

               $('.burger__block').removeClass('burger__block_active');
               enableBodyScroll();

           } else {
               $('.burger__block').addClass('burger__block_active');
               disableBodyScroll();
           }

        });


        $('.header__link-refs > a').hover(
            function() {
                $(this).siblings('').addClass('header__link-refs_inactive');
            }, function() {
                $('.header__link-refs > a').removeClass('header__link-refs_inactive');
            }
        );

        // slider
        var swiperAutoplay = 4000;
        var swiperHeader = new Swiper ('.swiper_header', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            speed: 300,
            effect: 'fade',
            watchSlidesProgress: true,
            // on: {
            //     progress: function () {
            //         var elem = document.getElementById("header__timeline-line");
            //         var width = 1;
            //         var autoplayTime = swiperAutoplay / 100;
            //         var id = setInterval(frame, autoplayTime);

            //         function frame() {
            //             if (width >= 100) {
            //                 clearInterval(id);
            //             } else {
            //                 width++;
            //                 elem.style.width = width + '%';
            //             }
            //         }
            //     }
            // }
        });





        var swiperVideo = new Swiper ('.swiper_pop-video', {
            loop: false,
            speed: 500,
            spaceBetween: 10,
            simulateTouch : false,
            allowSwipeToNext: false,
            allowSwipeToPrev: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });


        // VIDEO PLAYER

        $('.pop-video__nav .swiper-button-next, .pop-video__nav .swiper-button-prev').click(function () {

                if($('.swiper-slide__pop-video:last-child').hasClass('swiper-slide-active')) {
                    lastVideoSlide();
                } else {
                    $('.pop-video__nav').animate({
                        width: '100%'
                    }, 300, function() {

                    });
                }

        });

        function lastVideoSlide () {

            var lastVideoLength = $('.swiper-slide__pop-video:last-child .pop-video__element').length;

            if (lastVideoLength == 2) {
                $('.pop-video__nav').animate({
                    width: '83%'
                }, 300, function() {

                });
            } else if (lastVideoLength == 1) {
                $('.pop-video__nav').animate({
                    width: '66%'
                }, 300, function() {

                });

            }

        }


        function findVCapture() {
            var loadVCapture = $('.swiper-slide__pop-video.swiper-slide-active .pop-video__element_active .pop-video__element-text span').text();
            $('.pop-video__capture span').text('' + loadVCapture);
        }

        findVCapture();

        var dataSrc, vpWidth, vpHeight, iFrame;

        $(document).on('click','.pop-video__element_click',function(){
            dataSrc = $(this).attr('data-src');
            vpWidth = $(this).outerWidth();
            vpHeight = $(this).outerHeight();
            $(this).find('.pop-video__element-overlay').hide();
            $(this).find('.pop-video__element-text').hide();
            iFrame = '<iframe width="" height="" src="" frameborder="0" allowfullscreen></iframe>';
            $(this).append(iFrame);
            $(this).find('iframe').attr('src', dataSrc).attr('width', vpWidth).attr('height', vpHeight);
        });

        $('.pop-video__element').click(function () {


                $('.pop-video__element_active iframe').remove();
                $('.pop-video__element_active .pop-video__element-overlay').show();
                $('.pop-video__element_active .pop-video__element-text').show();

                var vCapture = $(this).find('.pop-video__element-text span').text();
                $('.pop-video__capture span').text('' + vCapture);

           $(this).addClass('pop-video__element_active')
               .siblings('').removeClass('pop-video__element_active pop-video__element_click');
            $(this).removeClass('pop-video__element_hover')
                .siblings('.pop-video__element:not(.pop-video__element_active)')
                .removeClass('pop-video__element_hover-sibl');

            var thisIs = $(this);

            setTimeout(function () {
                thisIs.addClass('pop-video__element_click');
            }, 300);


        });

        $('.pop-video__element').hover(
            function() {
                if(!$(this).hasClass('pop-video__element_active')) {
                    $(this).addClass('pop-video__element_hover')
                        .siblings('.pop-video__element:not(.pop-video__element_active)')
                        .addClass('pop-video__element_hover-sibl');
                }

            }, function() {
                $(this).removeClass('pop-video__element_hover')
                    .siblings('.pop-video__element:not(.pop-video__element_active)')
                    .removeClass('pop-video__element_hover-sibl');
            }
        );

        $('.pop-video__nav .swiper-button-next, .pop-video__nav .swiper-button-prev').click(function () {

            setTimeout(function () {
                var arrowVCapture = $('.swiper-slide__pop-video.swiper-slide-active .pop-video__element_active .pop-video__element-text span').text();
                $('.pop-video__capture span').text('' + arrowVCapture);
            }, 300);

        });
        
 

var basicTimeline = anime.timeline({
    autoplay: false
});

basicTimeline
  .add({
    targets: '.header_main-page .header__logo',
    top: 8,
    marginTop: 0,
    scale: 0.65,
    easing: 'easeOutExpo',
    duration: 700,
    offset: 0,
  })
  .add({
    targets: '.header_main-page .header__top',
     marginTop: 0,
     backgroundColor: 'rgba(0, 0, 0, 1)',
    easing: 'easeOutExpo',
     duration: 700,
     offset: 0,
  })
  .add({
    targets: '.header_main-page .header__main',
    height: 0,
    easing: 'easeOutExpo',
     duration: 700,
     offset: 0,
  })
  .add({
    targets: '.header_main-page .header__extra',
    height: 50,
    top: 80,
    borderTop: '1px solid #303030',
    borderBottom: '1px solid #303030',
    easing: 'easeOutExpo',
     duration: 700,
     offset: 0,
  });
basicTimeline.complete = function() { $('.header_main-page').addClass('header_completed') 
    
};

        // if($('.header_main-page').length != 0) {

        //     function initScrollmagic() {

        //         var controller = new ScrollMagic.Controller();

        //         // var blockTween = new TweenMax.to('.header_main-page .header__logo', 0.1, {
        //         //     top: '8px',
        //         //     marginTop: '0',
        //         //     transform: 'scale(0.65)'
        //         // });

        //         // var headerLogoScene = new ScrollMagic.Scene({
        //         //     duration: 100
        //         // })
        //         //     .setTween(blockTween)
        //         //     .addTo(controller);


        //         // var blockTween1 = new TweenMax.to('.header_main-page .header__top', 0.15, {
        //         //     margin: '0px',
        //         //     backgroundColor: 'rgba(0, 0, 0, 1)'
        //         // });
        //         // var headerTopScene = new ScrollMagic.Scene({
        //         //     duration: 150
        //         // })
        //         //     .setTween(blockTween1)
        //         //     .addTo(controller);


        //         // var blockTween2 = new TweenMax.to('.header_main-page .header__main', 0.15, {
        //         //     height: '0px'
        //         // });
        //         // var headerBlockScene = new ScrollMagic.Scene({
        //         //     duration: 150
        //         // })
        //         //     .setTween(blockTween2)
        //         //     .addTo(controller);


        //         // var blockTween3 = new TweenMax.to('.header_main-page .header__extra', 0.1, {
        //         //     height: '50px',
        //         //     top: '80px',
        //         //     borderTop: '1px solid #303030',
        //         //     borderBottom: '1px solid #303030'
        //         // });
        //         // var headerExtraScene = new ScrollMagic.Scene({
        //         //     duration: 100
        //         // })
        //         //     .setTween(blockTween3)
        //         //     .addTo(controller);
        //     }


        //     initScrollmagic();


            // window.wasScrolled = false;
            $(window).bind('scroll',function(e){
                // if (!window.wasScrolled){
                    // $('.header').removeClass('header_main-page')
                    //     .addClass('header_inner-page');

                    // $('.header__main').hide();
                //     console.dir(e);
                //   if($(window).scrollTop() < 100) {
                //      e.deltaFactor = 0;
                //   };
                     basicTimeline.play();
                 
                
                // }
                // else if($(window).scrollTop() == 0 && window.wasScrolled) {
                //      basicTimeline.reverse();
                //      basicTimeline.play();
                //  }
                // window.wasScrolled = true;
                
                
                //  if($(window).scrollTop() == 0 && window.wasScrolled) {
                //     // basicTimeline.play();
                //     // $('.header').removeClass('header_main-page')
                //     //     .addClass('header_inner-page');
    
                //     // $('.header__main').hide();
                //      basicTimeline.reverse();
                //      basicTimeline.play();
                // }

            });

         
            $('.header__arrow').click(function () {
                // $('html, body').animate({scrollTop: 80}, 300);
                // if (!window.wasScrolled) {
                       basicTimeline.play();
                // } else {
                //     basicTimeline.reverse();
                //      basicTimeline.play();
                // }
                 
               
            });


        // }



    //    skew slider
//         $('.hard__skew-element').click(function () {
//             $(this).addClass('hard__skew-element_active')
//                 .siblings().removeClass('hard__skew-element_active');

//             var skewId = $(this).attr('id');

//             changeSkewBlock(skewId);
//         });

//         function changeSkewBlock(skewId) {
//             $('.hard__skew-info-block[data-id=' + "" + skewId +']')
//                 .addClass('hard__skew-info-block_active')
//                 .siblings().removeClass('hard__skew-info-block_active');

//         }
        
        
//             var hsDirection = true; 
      

//         function hsAutoPlay(hsItem) {
//                 hsItem.addClass('hard__skew-element_active')
//                         .siblings('')
//                         .removeClass('hard__skew-element_active');
//         }

// var timerSkew1 = 0;
// function recursSetInt1 () {
//         clearTimeout(timerSkew1);
//         timerSkew1 = 0;
//         timerSkew1 = setTimeout(function tick() {

//             if ($('.hard__content-item_active .hard__skew-element_active').prev().length && hsDirection)  {

//                             changeSkewBlock($('.hard__content-item_active .hard__skew-element_active').prev().attr('id'));
//                               hsAutoPlay($('.hard__content-item_active .hard__skew-element_active').prev());
                        
            

//                         if (!$('.hard__content-item_active .hard__skew-element_active').prev().length) {
//                             hsDirection = !hsDirection;
//                         }

//             } else if ( $('.hard__content-item_active .hard__skew-element_active').next().length && !hsDirection) {

//                  changeSkewBlock($('.hard__content-item_active .hard__skew-element_active').next().attr('id'));
//                 hsAutoPlay($('.hard__content-item_active .hard__skew-element_active').next());
            

//                         if(!$('.hard__content-item_active .hard__skew-element_active').next().length) {
//                             hsDirection = !hsDirection;
//                         }
//             }
            
//               timerSkew1 = setTimeout(tick, 10000);
//         }, 10000);
// }
    
// recursSetInt1 () ;


// $('.hard__skew-arrows-next').click(function() {

//       var thisNext = $(this).closest('.hard__skew-arrows')
//                     .siblings('.hard__skew-slider')
//                     .find('.hard__skew-element_active')
//                     .next();

//                     if (thisNext.length) {
//                          $(this).css('opacity', '')
//                                     .siblings()
//                                     .css('opacity', '');
//                     } else {
//                         $(this).css('opacity', '0.4');
//                     }

//                     changeSkewBlock(thisNext.attr('id'));

//                     thisNext.addClass('hard__skew-element_active')
//                     .siblings()
//                     .removeClass('hard__skew-element_active');

// });

// $('.hard__skew-arrows-prev').click(function() {
//         var thisPrev = $(this).closest('.hard__skew-arrows')
//                     .siblings('.hard__skew-slider')
//                     .find('.hard__skew-element_active')
//                     .prev();

//                     if (thisPrev.length) {
//                         $(this).css('opacity', '')
//                                     .siblings()
//                                     .css('opacity', '');
//                     } else {
//                         $(this).css('opacity', '0.4');
//                     }

//                     changeSkewBlock(thisPrev.attr('id'));

//                     thisPrev.addClass('hard__skew-element_active')
//                     .siblings()
//                     .removeClass('hard__skew-element_active');
// });



//         if ( $('.hard__skew-nav-element:first-child').length != 0 ) {
//             setTimeout(function () {
//                 var hardElemFirst = $('.hard__skew-nav-element:first-child');
//                 $('.hard__skew-nav hr').css({
//                     'width': hardElemFirst.width() + 'px',
//                     'left': hardElemFirst.position().left + 'px'
//                 });
//             }, 300);
//         }

//         $('.hard__skew-nav-element').click(function () {
//             var hardElemW = $(this).width();
//             var hardElemPos = $(this).position();
//             $('.hard__skew-nav hr').css({ 'width': hardElemW + 'px',
//                                             'left': hardElemPos.left + 'px'});

//             $(this).addClass('hard__skew-nav-element_active')
//                 .siblings()
//                 .removeClass('hard__skew-nav-element_active');

//             $('.hard__skew-info-block').removeClass('hard__skew-info-block_active');

//             var changeId = $(this).attr('id');

//             changeHardBlock(changeId);
            
//                   recursSetInt1() ;
//         });

//         function changeHardBlock(changeId) {
//             $('.hard__content-item[data-change=' + "" + changeId +'] .hard__skew-info-block:first-child')
//                 .addClass('hard__skew-info-block_active');
//             $('.hard__content-item[data-change=' + "" + changeId +'] .hard__skew-element:last-child')
//                 .addClass('hard__skew-element_active')
//                 .siblings().removeClass('hard__skew-element_active');
//             $('.hard__content-item[data-change=' + "" + changeId +']')
//                 .addClass('hard__content-item_active')
//                 .siblings().removeClass('hard__content-item_active');

//         }



        $('.for-guest__block-element').click(function () {
            $(this).addClass('for-guest__block-element_active')
                .siblings().removeClass('for-guest__block-element_active');
        });


        if ( $('.for-guest__nav-element:first-child').length != 0 ) {
            setTimeout(function () {
                var guestElemFirst = $('.for-guest__nav-element:first-child');
                $('.for-guest__nav hr').css({
                    'width': guestElemFirst.width() + 'px',
                    'left': guestElemFirst.position().left + 'px'
                });
            }, 300);
        }


        $('.for-guest__nav-element').click(function () {
            var guestElemW = $(this).width();
            var guestElemPos = $(this).position();
            $('.for-guest__nav hr').css({ 'width': guestElemW + 'px',
                'left': guestElemPos.left + 'px'});

            $(this).addClass('for-guest__nav-element_active')
                .siblings()
                .removeClass('for-guest__nav-element_active');

            var changeGuest = $(this).attr('id');

            changeGuestBlock(changeGuest);
        });

        function changeGuestBlock(changeGuest) {
            $('.for-guest__block[data-guest=' + "" + changeGuest +']')
                .addClass('for-guest__block_active')
                .siblings().removeClass('for-guest__block_active');

        }


        $('.btn-share').click(function () {
           $(this).toggleClass('btn-share_active');
        });



        $('.track__nav-element_svg').click(function () {
           $(this).addClass('track__nav-element_active')
               .siblings().removeClass('track__nav-element_active');

            $('.track__offroad').removeClass('track__map_active');
            $('.track__others').addClass('track__map_active');


           var trackId = $(this).attr('id');

           findSvg(trackId);
        });

        $('.track__nav-element_offroad').click(function () {
           $(this).addClass('track__nav-element_active')
               .siblings().removeClass('track__nav-element_active');

           $('.track__others').removeClass('track__map_active');
           $('.track__offroad').addClass('track__map_active');
        });




        function findSvg(trackId){
            $('.' + trackId).detach().appendTo('.track__others svg');

            $('.track__others-map').removeClass('track__others-map_active');
            $('.' + trackId).addClass('track__others-map_active');
        }


        $('.track__build_tribuneA').hover(
            function() {

                $(this).addClass('track__build_hover')
                    .siblings('.track__build_tribune').addClass('track__build_hover');
                $('.track__tribune-hover').addClass('track__tribune-hover_active');


            }, function() {

                $(this).removeClass('track__build_hover')
                .siblings('.track__build_tribune').removeClass('track__build_hover');
                $('.track__tribune-hover').removeClass('track__tribune-hover_active');

            }
        );


        $('.our-session__block-map a').click( function(){
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 60 }, 500);
            }
            return false;
        });


        $('.our-session__block-map a').click(function () {
            var dataMap = $(this).attr('data-map');

            $('.track__offroad').removeClass('track__map_active');
            $('.track__others').addClass('track__map_active');

            findSvg(dataMap);
            findMapNav(dataMap);
        });

        function findMapNav(dataMap) {
            $('.track__nav-element').removeClass('track__nav-element_active');
            $('#' + dataMap).addClass('track__nav-element_active');
        }


        $(".social-sticky_stick").stick_in_parent({
            offset_top: 200
        });



        $( ".footer__subscribe-input input" ).keydown(function() {

            if($(this).val() !== '' && $(this).val().length > 2) {
                $(this).parent().next('.footer__subscribe-btn')
                    .addClass('footer__subscribe-btn_active');
            } else if($(this).val().length <= 2) {
                $(this).parent().next('.footer__subscribe-btn')
                    .removeClass('footer__subscribe-btn_active');
            }

        });

        $('.footer__subscribe-error, .footer__subscribe-input input').click(function () {
           $('.footer__subscribe-error').removeClass('footer__subscribe-error_active');
        });


        moment.locale('ru');
        moment().calendar();

        if ( $('#burger__calendar').length != 0 ) {
            $('#burger__calendar').clndr({
                startWithMonth:  moment(),
                moment: moment,
                weekOffset: 0,
                daysOfTheWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                selectedDate: true,
                clickEvents: {
                    click: function(target) {
                        if(target.element.classList.contains('event')) {
                            var eventsLength = target.events.length;
                            // console.log(target);


                            var eventDate = moment(target.date).format('DD MMMM');
                            $('.burger-clndr__date span').text('' + eventDate);

                            for (var i = 0; i < eventsLength; i++) {

                                if (target.events[i].btn == 2) {

                                    var eventBtns = '<div class="burger-clndr__btns">\n' +
                                        '<div class="btn btn_red btn_clndr-live">\n' +
                                        '<a href="#" target="_blank">On-line трансляция</a>\n' +
                                        '</div>\n' +
                                        '<div class="btn btn_red btn_clndr-ticket">\n' +
                                        '<a href="'+target.events[i].uri+'">Купить билет</a>\n' +
                                        '</div>\n' +
                                        '</div>';

                                } else if (target.events[i].btn == 1) {

                                    var eventBtns = '<div class="burger-clndr__btns">\n' +
                                        '<div class="btn btn_red btn_clndr-ticket">\n' +
                                        '<a href="'+target.events[i].uri+'">Купить билет</a>\n' +
                                        '</div>\n' +
                                        '</div>';

                                }

                                $('<div class="burger-clndr__element">\n' +
                                    '<div class="burger-clndr__title">\n' +
                                    '<span>'+ target.events[i].title +'</span>\n' +
                                    '</div>\n' +
                                    '<div class="burger-clndr__description">\n' +
                                    '<p>'+ target.events[i].description +'</p>\n' +
                                    '</div>\n' + eventBtns +
                                    '</div>').appendTo($('.burger-clndr__body'));

                            }
                            $('.burger-clndr__popup').addClass('burger-clndr__popup_active');
                        }
                    }
                },
                events: burgerEvents.events,
                showAdjacentMonths: false,
                trackSelectedDate: true

            });
        }


        $('.burger-clndr__close').click(function () {
            $('.burger-clndr__popup').removeClass('burger-clndr__popup_active');
            $('.burger-clndr__body .burger-clndr__element').remove();
            $('.burger-clndr__date span').text('');
        });



    //    inner pages

        var strangeSwiper = new Swiper('.sl-strange__container', {
            slidesPerView: 'auto',
            spaceBetween: 35,
            initialSlide: 0,
            loop: true,
            speed: 1000,
            autoplay: {
              delay: 5000,
            },
            disableOnInteraction: false,
            navigation: {
                nextEl: '.sl-strange__next',
                prevEl: '.sl-strange__prev'
            },
            breakpoints: {
                1279: {
                    spaceBetween: 20,
                },
                639: {
                    spaceBetween: 10,
                     slidesPerView: 1,
                }
            }

        });


        $('.sl-strange__right').click(function () {
            strangeSwiper.slideNext(300, false);
        });

        $('.sl-strange__left').click(function () {
            strangeSwiper.slidePrev(300, false);
        });


        function randomInteger(min, max) {
            randomDriver = min + Math.random() * (max + 1 - min);
            randomDriver = Math.floor(randomDriver);
            return randomDriver;
        }


        function declOfNum(number, titles) {
            cases = [2, 0, 1, 1, 1, 2];
            return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
        }


        //     var driverName = declOfNum(1063, ['водитель', 'водителя', 'водителей']);
        //     var studyname = declOfNum(1063, ['обучен', 'обучено', 'обучено']);

        // $('.drive-school__info-element-title h3').text('' + driverName + ' ' + studyname);



        var oddSwiper = new Swiper('.sl-odd__container', {
            slidesPerView: 'auto',
            spaceBetween: 65,
                        loop: true,
                        speed: 1000,
            autoplay: {
    delay: 5000,
  },
  disableOnInteraction: false,
            breakpoints: {
              1919: {
                  spaceBetween: 35
              }, 
              1279: {
                    spaceBetween: 20,
              },
               639: {
                    spaceBetween: 10
                }
            }
        });

        $('.sl-odd__right, .sl-odd__next').click(function () {
            oddSwiper.slideNext(300, false);
        });

        $('.sl-odd__left, .sl-odd__prev').click(function () {
            oddSwiper.slidePrev(300, false);
        });



        var closestEventsSwiper = new Swiper('.closest-events__container', {
            slidesPerView: 'auto',
            spaceBetween: 50,
            // slidesOffsetBefore: 160,
            // slidesOffsetAfter: 160,
            navigation: {
                nextEl: '.closest-events__next',
                prevEl: '.closest-events__prev'
            },
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
              },
            disableOnInteraction: false,
            breakpoints: {
                1539: {
                    spaceBetween: 35,
                },
                1279: {
                    spaceBetween: 25,
                },
                639: {
                    spaceBetween: 15,
                },
                474: {
                    slidesPerView: 1,
                }
            }

        });



        $('.closest-events__slider-right').click(function () {
            closestEventsSwiper.slideNext(300, false);
        });

        $('.closest-events__slider-left').click(function () {
            closestEventsSwiper.slidePrev(300, false);
        });



        $(".feedback__scroll").mCustomScrollbar();



        $('.feedback__video-player').click(function () {

            var vfSrc = $(this).attr('data-src');
            var vfWidth = $(this).outerWidth();
            var vfHeight = $(this).outerHeight();

            $(this).find('.feedback__video-overlay').hide();

            var vfiFrame = '<iframe width="" height="" src="" frameborder="0" allowfullscreen></iframe>';

            $(this).append(vfiFrame);
            $(this).find('iframe').attr('src', vfSrc).attr('width', vfWidth).attr('height', vfHeight);

        });


        var feedbackSwiper = new Swiper('.feedback__slider-container', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            scrollbar: {
                el: '.feedback__slider-container .swiper-scrollbar',
                hide: false
            }

        });

        $('.feedback__slider-slide').click(function () {
           var viewerSrc = $(this).find('img').attr('src');

            $('.feedback__slider-view img').attr('src', '' + viewerSrc);
            $('.feedback__slider-view').addClass('feedback__slider-view_active');
            $('.feedback__slider-view-overlay').addClass('feedback__slider-view-overlay_active');
        });

        $('.feedback__slider-view-overlay').click(function () {

            $('.feedback__slider-view').removeClass('feedback__slider-view_active');
            $(this).removeClass('feedback__slider-view-overlay_active');
        });

        $('.feedback__slider-view').click(function () {
           $(this).removeClass('feedback__slider-view_active')
        });



        if ($('.section__feedback').length != 0 ) {
            var feedbackOffset = $('.section__feedback').offset();

            $(window).scroll(function(event) {
                var st = $(this).scrollTop();

                if(st >= feedbackOffset.top - 100) {
                    $('.feedback__background').addClass('feedback__background_active');
                }

            });
        }


        $('.services__extra-extra-body').mCustomScrollbar();


        $('.services__main-bottom').click(function () {
           $('.services__extra-extra').toggleClass('services__extra-extra_active');
           $(this).toggleClass('services__main-bottom_active');
        });


        $('.services__main-select-header').click(function () {

           $(this).toggleClass('services__main-select-header_active')
               .next('.services__main-select-body')
                    .toggleClass('services__main-select-body_active');

        });


        $('.services__main-select').each(function (index) {
            if(index == 0) {
                
         
            var mainItem = $(this).find('li.services__main-select-body_current span').text();
            $(this).find('.services__main-select-title span').text('' + mainItem);
            var nInfo = $(this).find('li.services__main-select-body_current').attr('data-ninfo');
            var dInfo = $(this).find('li.services__main-select-body_current').attr('data-price');
            $('.services__main-select_j-info .services__main-select-title span').text(dInfo);

            if(typeof nInfo !== typeof undefined && nInfo !== false) {
                $('#h-popup-track .h-popup__info-item-ninfo h4').text('' + nInfo);
                $('.h-popup__info-n').val('' + nInfo);
            }

            if(typeof dInfo !== typeof undefined && nInfo !== false) {
                $('#h-popup-track .h-popup__info-item-dinfo h4').text('' + dInfo);
                $('.h-popup__info-d').val('' + dInfo);
            }
            }
         });


        $('.services__main-select-body li').click(function () {
           $(this).addClass('services__main-select-body_current')
               .siblings().removeClass('services__main-select-body_current');

            var nInfo = $(this).attr('data-ninfo');
            var dInfo = $(this).attr('data-price');

           if(typeof nInfo !== typeof undefined && nInfo !== false) {
               $('#h-popup-track .h-popup__info-item-ninfo h4').text('' + nInfo);
               $('.h-popup__info-n').val('' + nInfo);
           }

            if(typeof dInfo !== typeof undefined && nInfo !== false) {
                $('#h-popup-track .h-popup__info-item-dinfo h4').text('' + dInfo);
                $('.h-popup__info-d').val('' + dInfo);
            }

            var mainItem = $(this).find('span').text();
            $(this).closest('.services__main-select-body')
                    .prev('.services__main-select-header')
                        .find('.services__main-select-title span')
                            .text('' + mainItem);
                            
                            $('.services__main-select_j-info .services__main-select-title span').text(dInfo);
        });

        $(document).mouseup(function (e){
            var div = $(".services__main-select-header_active");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.services__main-select-body').removeClass('services__main-select-body_active');
                $('.services__main-select-header').removeClass('services__main-select-header_active');
            }
        });


        var interestingSwiper = new Swiper('.interesting__slider-container', {
            slidesPerView: 'auto',
            spaceBetween: 80,
                        loop: true,
                        speed: 1000,
            autoplay: {
    delay: 5000,
  },
  disableOnInteraction: false,
            
            breakpoints: {
                1599: {
                    spaceBetween: 40
                },
                1023: {
                    spaceBetween: 30,
                    slidesPerView: 1
                }
            }
        });

        $('.interesting__slider-right').click(function () {
            interestingSwiper.slideNext(300, false);
        });
 
        $('.interesting__slider-left').click(function () {
            interestingSwiper.slidePrev(300, false);
        });





        if($(window).innerWidth() > 768) {
            var scrollTopTitle = '160px';
        } else if ($(window).innerWidth() <= 767) {
            var scrollTopTitle = '120px';
        }


        window.addEventListener('resize', function() {

            if($(window).innerWidth() > 768) {
                var scrollTopTitle = '160px';
            } else if ($(window).innerWidth() <= 767) {
                var scrollTopTitle = '120px';
            }

        });


        // var controllerOne = new ScrollMagic.Controller();


        // var blockTween7 = new TweenMax.to('.scroll-banner__img', 500, {
        //     opacity: '0'
        // });
        // var scrollBannerScene = new ScrollMagic.Scene({
        //     duration: 700
        // })
        //     .setTween(blockTween7)
        //     .addTo(controllerOne);

        // var blockTween8 = new TweenMax.to('.scroll-banner__title ', 300, {
        //     top: scrollTopTitle,
        //     zIndex: '2'
        // });
        // var scrollBannerTitleScene = new ScrollMagic.Scene({
        //     duration: 300

        // })
        //     .setTween(blockTween8)
            // .addTo(controllerOne);



        if ( $('.big-info__nav-element:first-child').length != 0 ) {
            setTimeout(function () {
                var binfoElemFirst = $('.big-info__nav-element:first-child');
                $('.big-info__nav hr').css({
                    'width': binfoElemFirst.width() + 'px',
                    'left': binfoElemFirst.position().left + 'px'
                });
            }, 300);
        }


        $('.big-info__nav-element').click(function () {
            var binfoElemW = $(this).width();
            var binfoElemPos = $(this).position();
            $('.big-info__nav hr').css({ 'width': binfoElemW + 'px',
                'left': binfoElemPos.left + 'px'});

            $(this).addClass('big-info__nav-element_active')
                .siblings()
                .removeClass('big-info__nav-element_active');

            var changeInfoB = $(this).attr('id');

             changeInfoBBlock(changeInfoB);
        });

        function  changeInfoBBlock(changeInfoB) {
            $('.big-info__block[data-infob=' + "" + changeInfoB +']')
                .addClass('big-info__block_active')
                .siblings().removeClass('big-info__block_active');

        }


        $('.p-event-faq__column li').click(function () {

            disableBodyScroll();

            var faqTitle = $(this).find('span').text();
            var faqText = $(this).find('p').text();

            $('.p-event-faq-popup .p-event-faq-popup__title h4').text('' + faqTitle);
            $('.p-event-faq-popup .p-event-faq-popup__body p').text('' + faqText);
            $('.p-event-faq-popup').addClass('p-event-faq-popup_active');

        });

        $('.p-event-faq-popup').click(function () {
            $('.p-event-faq-popup').removeClass('p-event-faq-popup_active');
            enableBodyScroll();
        });


        var hiwSwiper = new Swiper('.how-it-was__container', {
            slidesPerView: 'auto',
            spaceBetween: 1,
            centeredSlides: true,
            initialSlide: 2,
            simulateTouch : false,
            allowSwipeToNext: false,
            allowSwipeToPrev: false,
            breakpoints: {
            639: {
                    centeredSlides: true,
                    initialSlide: 0,
                    slidesPerView: 1
                }
            }
        });


        $('.how-it-was__right').click(function () {
            hiwSwiper.slideNext(300, false);
        });

        $('.how-it-was__left').click(function () {
            hiwSwiper.slidePrev(300, false);
        });

        $(document).on('click','.how-it-was__slide.swiper-slide-prev',function(){
            hiwSwiper.slidePrev(300, false);
        });
        $(document).on('click','.how-it-was__slide.swiper-slide-next',function(){
            hiwSwiper.slideNext(300, false);
        });


        $("[data-fancybox=\"hiw\"]").fancybox({
            infobar: false,
            touch : false,
            buttons : [
                'close'
            ],
            baseTpl	:
                '<div class="fancybox-container fancybox-container__hiw" role="dialog" tabindex="-1">' +
                '<div class="fancybox-bg fancybox-bg__hiw"></div>' +
                '<div class="fancybox-inner">' +
                '<div class="fancybox-infobar">' +
                '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
                '</div>' +
                '<div class="fancybox-toolbar">{{buttons}}</div>' +
                '<div class="fancybox-navigation">{{arrows}}</div>' +
                '<div class="fancybox-stage"></div>' +
                '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
                '</div>' +
                '</div>',
            btnTpl : {
                close : '<button data-fancybox-close class="fancybox-button fancybox-button--close fancybox-button--close__hiw" title="{{CLOSE}}">' +
                '</button>',
                arrowLeft : '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left fancybox-button--arrow_left__hiw" title="{{PREV}}">' +
                '</button>',

                arrowRight : '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right fancybox-button--arrow_right__hiw" title="{{NEXT}}">' +
                '</button>'
            }

        });




        //    page calendar
    
        
         $('.p-calendar__header-title_month').click(function() {
            $(this).siblings('.p-calendar__header-month-select')
                .toggleClass('p-calendar__header-month-select_active');
        });
        
        
         $(document).mouseup(function (e){
            var div = $(".p-calendar__header-month-select");
            var div2 = $('.p-calendar__header-month');
            if (!div.is(e.target)
                && div.has(e.target).length === 0 && !div2.is(e.target)
                && div2.has(e.target).length === 0) {
                $('.p-calendar__header-month-select').removeClass('p-calendar__header-month-select_active');
            }
        });
        
        $('.p-calendar__header-month-select li').click(function() {
             $('.p-calendar__main-header > div').remove();
            $('.p-calendar__main-body-line > div > div').remove();
            $('.p-calendar__main-body-item').attr('class', 'p-calendar__main-body-item');
            
            $('.p-calendar__header-title_month span').text(thisNowClone.set('month', $(this).attr('data-month')).format('MMMM'));

                $('.p-calendar__header-title_year span').text(thisNowClone.format('YYYY') + ' год');
                
                 loadTracksForEvent(thisNowClone.format('M'),thisNowClone.format('YYYY'));

                getDaysArray(thisNowClone.format('YYYY'), thisNowClone.format('M'));
                
                $('.p-calendar__header-month-select').removeClass('p-calendar__header-month-select_active');
                
                  checkFilter();
        });
        



        $('.p-calendar__aside-filter-header').click(function () {
            $(this).toggleClass('p-calendar__aside-filter-header_active');
            $(this).next('.p-calendar__aside-filter-body').toggleClass('p-calendar__aside-filter-body_active');
        });

        $(document).mouseup(function (e){
            var divIs = $(".p-calendar__aside-filter");
            if (!divIs.is(e.target)
                && divIs.has(e.target).length === 0) {
                $('.p-calendar__aside-filter-header').removeClass('p-calendar__aside-filter-header_active');
                $('.p-calendar__aside-filter-body').removeClass('p-calendar__aside-filter-body_active');
            }
        });

        function hideEvents(showEventAttr) {

            $('.p-calendar__aside-tracks-item, .p-calendar__main-body-line').hide();
            $('div[data-eventtype="'+ showEventAttr +'"]').show();
        }

        $('.p-calendar__aside-filter-body li').click(function () {
            
            history.pushState({}, '', '/calendar');

            if ( !$(this).hasClass('p-calendar__aside-filter_active') ) {

                $(this).addClass('p-calendar__aside-filter_active')
                    .siblings().removeClass('p-calendar__aside-filter_active');
                var showEventAttr =  $(this).attr('data-showid');
                
                $('.p-calendar__aside-filter-header span').text($(this).find('span').text());

                if (showEventAttr != 0) {
                    hideEvents(showEventAttr);
                } else if (showEventAttr == 0) {
                    $('.p-calendar__aside-tracks-item, .p-calendar__main-body-line').show();
                    $('.p-calendar__aside-filter-header').removeClass('p-calendar__aside-filter-header_active');
                    $('.p-calendar__aside-filter-body').removeClass('p-calendar__aside-filter-body_active');
                }

                $('.p-calendar__aside-filter-header').removeClass('p-calendar__aside-filter-header_active');
                $('.p-calendar__aside-filter-body').removeClass('p-calendar__aside-filter-body_active');

            } else if ( $(this).hasClass('p-calendar__aside-filter_active') ) {
                
                 $('.p-calendar__aside-filter-header span').text('Тип гонки');
                 
                $(this).removeClass('p-calendar__aside-filter_active');
                $('.p-calendar__aside-tracks-item, .p-calendar__main-body-line').show();
                $('.p-calendar__aside-filter-header').removeClass('p-calendar__aside-filter-header_active');
                $('.p-calendar__aside-filter-body').removeClass('p-calendar__aside-filter-body_active');

            }

        });
        
        $(document).on({
            mouseenter: function () {
                var asideTrackAttr = $( this ).attr('data-eventnameid');
                clndrAsideHover(asideTrackAttr);
            },
            mouseleave: function () {
                $('.p-calendar__main-body-line').removeClass('p-calendar__aside-tracks-item_hover');
            }
        }, ".p-calendar__aside-tracks-item, .p-calendar__main-body-line");

        $(document).on({
            mouseenter: function () {
                var mainLineAttr = $( this ).attr('data-eventnameid');
                clndrLineHover(mainLineAttr);
            },
            mouseleave: function () {
                $('.p-calendar__aside-tracks-item').removeClass('p-calendar__aside-tracks-item_hover-active');
            }
        }, ".p-calendar__main-body-line");



        function clndrAsideHover(asideTrackAttr) {
            $('.p-calendar__main-body-line[data-eventnameid=' +"" + asideTrackAttr +']')
                .addClass('p-calendar__aside-tracks-item_hover');
        }
        function clndrLineHover(asideTrackAttr) {
            $('.p-calendar__aside-tracks-item[data-eventnameid=' +"" + asideTrackAttr +']')
                .addClass('p-calendar__aside-tracks-item_hover-active');
        }


        $(document).on('click','.p-calendar__main-body-item',function(){
            $(this).find('.p-calendar-popup').addClass('p-calendar-popup_active');
        });
        
         $(document).on({
            mouseenter: function () {
               $(this).find('.p-calendar-popup').addClass('p-calendar-popup_active');
            },
            mouseleave: function () {
                var self = $(this);
                var hoverClndrTimer = setTimeout(function() {
                    self.find('.p-calendar-popup').removeClass('p-calendar-popup_active');
                    clearTimeout(hoverClndrTimer);
                    hoverClndrTimer = 0;
                }, 2000);
                
                }
            
        }, ".p-calendar__main-body-item");
        

        $(document).mouseup(function (e){
            var divIss = $(".p-calendar-popup");
            if (!divIss.is(e.target)
                && divIss.has(e.target).length === 0) {
                $(".p-calendar-popup").removeClass('p-calendar-popup_active');
            }
        });


        // console.log(tracksForEvent);
        // console.log(eventsObject);
        
        $('.p-calendar__aside-filter-body li').each(function () {

            for ( var i = 0; i < tracksForEvent.length; i++ ) {
                if ( $(this).attr('data-showid') ==  tracksForEvent[i].type) {
                    tracksForEvent[i].color = $(this).attr('data-color');
                }
            }

            $(this).append('<div></div>');
            $(this).find('div').css('background', '#' + $(this).attr('data-color'));

        });

        
        var thisMonthNew = moment().format('M');
        var thisYearNew = moment().format('YYYY');
    

        loadTracksForEvent(thisMonthNew, thisYearNew);

       

        loadClndr();
        
        var newArrAside, newArr;
   

        function loadTracksForEvent(thisMonthNew, thisYearNew) {
              newArr = [];    
              newArrAside = [];

            $('.p-calendar__aside-tracks-item').remove();    
            $('.p-calendar__main-body-line').remove();
            
              for(var i = 0; i < eventsObject.length; i++) {
                    var objMonth = moment(eventsObject[i].date, 'DD-MM-YYYY').get('month');
                    var objYear = moment(eventsObject[i].date, 'DD-MM-YYYY').get('year');
                    
                    if(thisMonthNew == (objMonth + 1) && thisYearNew == objYear) {
                        newArr.push(eventsObject[i]);
                    }
                }

            for (var j = 0; j < tracksForEvent.length; j++) {
              
                for (var w = 0; w < newArr.length; w++) {
                    if(tracksForEvent[j].nameId == newArr[w].nameId) {
                
                        newArrAside.push(tracksForEvent[j]);
                
                    }
                      
                }

            }
                     
             var result = [];

              nextInput:
                for (var l = 0; l < newArrAside.length; l++) {
                  var str = newArrAside[l]; 
                  for (var z = 0; z < result.length; z++) { 
                    if (result[z].nameId == str.nameId) continue nextInput; 
                  }
                  result.push(str);
                }

            newArrAside = result;
                            
            for (var h = 0; h < newArrAside.length; h++) {
              $('<div class="p-calendar__aside-tracks-item">\n' +
                '<div style="background: #' + newArrAside[h].color + '"></div>' +
                '<span>' + newArrAside[h].name + '</span>\n' +
                '</div>').appendTo( ".p-calendar__aside-tracks" );

             $('<div class="p-calendar__main-body-line"></div>').appendTo( ".p-calendar__main-body" );

             $('.p-calendar__aside-tracks-item').each(function (index) {

                    if (index == h) {

                        $(this).attr('data-eventtype', newArrAside[index].type);
                        $(this).attr('data-eventnameid', newArrAside[index].nameId);

                    }
                });
             }
   
             loadMainContent();
             
        }

        function loadMainContent() {

            for (var j = 0; j < newArrAside.length; j++) {
                $('.p-calendar__main-body-line').each(function (index) {

                    if (index == j) {

                        $(this).attr('data-eventtype', newArrAside[j].type);
                        $(this).attr('data-eventnameid', newArrAside[j].nameId);

                        for (var k = 0; k < 32; k++) {
                            $('<div class="p-calendar__main-body-item">\n' +
                                '</div>').appendTo( this );
                        }

                    }
                });
            }

        }

        function loadClndr() {

            var thisNow = moment();
            var thisYear = thisNow.format('YYYY');
            var thisMonth = thisNow.format('MMMM');
            var thisMonthIndex = thisNow.format('M');

            $('.p-calendar__header-title_year span').text(thisYear + ' год');
            $('.p-calendar__header-title_month span').text('' + thisMonth);

            getDaysArray(thisYear, thisMonthIndex);
            // checkAsideIsEmpty();
        }

        
        // function checkAsideIsEmpty() {
        //     $('.p-calendar__main-body-line').each(function() {
                 
        //          if($(this).find('.p-calendar__main-body-item > div').length == 0) {
        //             $(this).remove();
        //          }
        //     });
        // }

        var thisNowClone =  moment();

        $('.p-calendar__header-btn_year').click(function () {

            $('.p-calendar__main-header > div').remove();
            $('.p-calendar__main-body-line > div > div').remove();
            $('.p-calendar__main-body-item').attr('class', 'p-calendar__main-body-item');

            if($(this).hasClass('p-calendar__header-left')) {

                $('.p-calendar__header-title_year span')
                    .text(thisNowClone.subtract(1, 'y')
                        .format('YYYY') + ' год');
                        
                         loadTracksForEvent(thisNowClone.format('M'),thisNowClone.format('YYYY'));

                getDaysArray(thisNowClone.format('YYYY'), thisNowClone.format('M'));
                
                checkFilter();
                

            } else if($(this).hasClass('p-calendar__header-right')) {

                $('.p-calendar__header-title_year span')
                    .text(thisNowClone.add(1, 'y')
                        .format('YYYY') + ' год');
                        
                        loadTracksForEvent(thisNowClone.format('M'),thisNowClone.format('YYYY'));

                getDaysArray(thisNowClone.format('YYYY'), thisNowClone.format('M'));

                checkFilter();

            }

        });

        $('.p-calendar__header-btn_month').click(function () {

            $('.p-calendar__main-header > div').remove();
            $('.p-calendar__main-body-line > div > div').remove();
            $('.p-calendar__main-body-item').attr('class', 'p-calendar__main-body-item');


            if($(this).hasClass('p-calendar__header-left')) {

                $('.p-calendar__header-title_month span')
                    .text(thisNowClone.subtract(1, 'M')
                        .format('MMMM'));

                $('.p-calendar__header-title_year span').text(thisNowClone.format('YYYY') + ' год');
                
                 loadTracksForEvent(thisNowClone.format('M'),thisNowClone.format('YYYY'));

                getDaysArray(thisNowClone.format('YYYY'), thisNowClone.format('M'));

                checkFilter();

            } else if($(this).hasClass('p-calendar__header-right')) {

                $('.p-calendar__header-title_month span')
                    .text(thisNowClone.add(1, 'M')
                        .format('MMMM'));

                $('.p-calendar__header-title_year span').text(thisNowClone.format('YYYY') + ' год');
                
                 loadTracksForEvent(thisNowClone.format('M'),thisNowClone.format('YYYY'));
                
                getDaysArray(thisNowClone.format('YYYY'), thisNowClone.format('M'));

                checkFilter();

            }


        });


        function getDaysArray(year, month) {
            var i = 0;
            var names = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ];
            var date = new Date(year, month - 1, 1);
            var curDate = new Date(year, month - 1, 1);
            var todayDate = new Date();
            var todayIsYear = todayDate.getFullYear();
            var todayIsMonth = todayDate.getMonth();
            var todayIsDate = todayDate.getDate();

            while (i < 32) {
               var dateWithZero =  ('0' + date.getDate()).slice(-2);
               var monthWithZero = ('0' + (date.getMonth() + 1)).slice(-2);
                $( "<div class=\"p-calendar-day\">\n" +
                    "<span>" + names[date.getDay()] + "</span>\n" +
                    "<span>" + dateWithZero + "</span>\n" +
                    "</div>" ).appendTo( ".p-calendar__main-header" );




                $('.p-calendar-day').each(function(index) {
                    if (index == i) {
                        $(this).addClass('p-calendar-day-' + (date.getMonth() + 1) + '-' + date.getDate())
                                .attr('data-cday', dateWithZero)
                                .attr('data-cmonth', monthWithZero)
                                .attr('data-cyear', date.getFullYear());

                        if(todayIsYear == date.getFullYear() && todayIsMonth == date.getMonth() && todayIsDate == date.getDate()) {
                            $(this).addClass('p-calendar-today');
                        }

                        if(date.getDay() == 0 || date.getDay() == 6) {
                            $(this).addClass('p-calendar-weekend');
                        }

                        if(curDate.getMonth() < date.getMonth()) {
                            $(this).addClass('p-calendar-day-inactive');
                        }
                        
                        $(this).append('<div class="p-calendar-day-isevent"></div>');
                    
                            for( var w = 0; w < eventsObject.length; w++ ) {
                                  var eventObjDate = moment(eventsObject[w].date, ["DD-MM-YYYY"]).format('D');
                                var eventObjMonth = moment(eventsObject[w].date, ["DD-MM-YYYY"]).format('M');
                                var eventObjYear = moment(eventsObject[w].date, ["DD-MM-YYYY"]).format('YYYY');
                                
                                
                              
                                 if(eventObjYear == date.getFullYear() && eventObjMonth == date.getMonth() + 1 && eventObjDate == date.getDate() ) {
                                     
                                     for(var q = 0; q < tracksForEvent.length; q++) {
                                          if(tracksForEvent[q].nameId == eventsObject[w].nameId) {
                                         
                                         if($(this).find('.p-calendar-day-isevent').find('div[data-newcolor="' + tracksForEvent[q].color + '"]').length == 0) {
                                              $(this).find('.p-calendar-day-isevent').append('<div style=background:#'+ tracksForEvent[q].color +' data-newcolor="' + tracksForEvent[q].color + '"></div>');
                                         }
                                        
                                          }
                                       
                                     }
                                
                                 }
                                
                            }
                    }
                    
                    
                   
                });


                $('.p-calendar__main-body-line').each(function () {

                    var thisLine = $(this);

                    $(this).find('.p-calendar__main-body-item').each(function (index) {
                        if (index == i) {

                            $(this).addClass('p-calendar-day-' + (date.getMonth() + 1)  + '-' + date.getDate());

                            if(todayIsYear == date.getFullYear() && todayIsMonth == date.getMonth() && todayIsDate == date.getDate()) {
                                $(this).addClass('p-calendar-today');
                            }
                            if(curDate.getMonth() < date.getMonth()) {
                                $(this).addClass('p-calendar-day-inactive');
                            }


                            for( var k = 0; k < eventsObject.length; k++ ) {
                                var eventObjDate = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('D');
                                var eventObjMonth = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('M');
                                var eventObjYear = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('YYYY');


                                if(thisLine.attr('data-eventnameid') == eventsObject[k].nameId) {

                                    if (eventObjYear == date.getFullYear() && eventObjMonth == date.getMonth() + 1 && eventObjDate == date.getDate()) {


                                        var eventDateMonth = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('DD MMMM');
                                        var eventWeekDay = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('dddd');

                                        $( "<div>" +
                                            "<div class='p-calendar__main-body-item-after'></div>" +
                                                "<div class=\"p-calendar-popup\">\n" +
                                                    "<a href='"+eventsObject[k].uri+"'>" +
                                                        "<div class=\"p-calendar-popup__top\">\n" +
                                                            "<div class=\"p-calendar-popup__date\">\n" +
                                                                "<span>" + eventDateMonth + "</span>\n" +
                                                                "<p>" + eventWeekDay + "</p>\n" +
                                                            "</div>\n" +
                                                            "<div class=\"p-calendar-popup__time\">\n" +
                                                                "<span>регистрация - <br/> " + eventsObject[k].eventRegTime + "</span>\n" +
                                                                "<span>начало заездов - <br/> "+ eventsObject[k].eventStartTime +"</span>\n" +
                                                            "</div>\n" +
                                                        "</div>\n" +
                                                        "<div class=\"p-calendar-popup__name\">\n" +
                                                                "<h4>" + eventsObject[k].eventName + "</h4>\n" +
                                                        "</div>\n" +
                                                    "</a>" +
                                                    "<div class='p-calendar-popup__triangle'" +
                                                "</div>" +
                                            "</div>" ).appendTo( this );
                                    }
                                }

                            }

                            if(date.getDay() == 0 || date.getDay() == 6) {
                                $(this).addClass('p-calendar-weekend');
                            }
                        }

                    });


                    for ( var z = 0; z < tracksForEvent.length; z++ ) {
                        if($(this).attr('data-eventtype') == tracksForEvent[z].type) {
                            $(this).find('.p-calendar__main-body-item-after, .p-calendar-popup')
                                .css('background', '#' + tracksForEvent[z].color);

                            $(this).find('.p-calendar-popup .p-calendar-popup__triangle')
                                .css('borderTopColor', '#' + tracksForEvent[z].color);
                        }
                    }

                });

                date.setDate(date.getDate() + 1);
                i++;


            }
    

        }


        //  mobile calendar

        $('.p-calendar__aside-filter-header-mobile').click(function () {
            $(this).toggleClass('p-calendar__aside-filter-header-mobile_active');
            $(this).next('.p-calendar__aside-filter-body-mobile').toggleClass('p-calendar__aside-filter-body-mobile_active');
        });

        $(document).mouseup(function (e){
            var divIs = $(".p-calendar__aside-filter-mobile");
            if (!divIs.is(e.target)
                && divIs.has(e.target).length === 0) {
                $('.p-calendar__aside-filter-header-mobile').removeClass('p-calendar__aside-filter-header-mobile_active');
                $('.p-calendar__aside-filter-body-mobile').removeClass('p-calendar__aside-filter-body-mobile_active');
            }
        });


        $('.p-calendar__aside-filter-body-mobile li').each(function () {

            $(this).append('<div></div>');
            $(this).find('div').css('background', '#' + $(this).attr('data-color'));

        });



        function hideMobileEvents(showEventAttr) {

            $('.p-calendar__main-mobile-item').hide();
            $('div[data-eventtype="'+ showEventAttr +'"]').show();
        }

        $('.p-calendar__aside-filter-body-mobile li').click(function () {
            
             history.pushState({}, '', '/calendar');

            if ( !$(this).hasClass('p-calendar__aside-filter-body-mobile_active') ) {

                $(this).addClass('p-calendar__aside-filter-body-mobile_active')
                    .siblings().removeClass('p-calendar__aside-filter-body-mobile_active');
                var showEventAttr =  $(this).attr('data-showid');
                
                $('.p-calendar__aside-filter-header-mobile span').text($(this).find('span').text());
                
                if (showEventAttr != 0) {
                    hideMobileEvents(showEventAttr);
                } else if (showEventAttr == 0) {
                    $('.p-calendar__main-mobile-item').show();
                    $('.p-calendar__aside-filter-header-mobile').removeClass('p-calendar__aside-filter-header-mobile_active');
                    $('.p-calendar__aside-filter-body-mobile').removeClass('p-calendar__aside-filter-body-mobile_active');
                }

                $('.p-calendar__aside-filter-header-mobile').removeClass('p-calendar__aside-filter-header-mobile_active');
                $('.p-calendar__aside-filter-body-mobile').removeClass('p-calendar__aside-filter-body-mobile_active');

            } else if ( $(this).hasClass('p-calendar__aside-filter-body-mobile_active') ) {
                
                        $('.p-calendar__aside-filter-header-mobile span').text('Тип гонки');

                $(this).removeClass('p-calendar__aside-filter-body-mobile_active');

                $('.p-calendar__main-mobile-item').show();

                $('.p-calendar__aside-filter-header-mobile').removeClass('p-calendar__aside-filter-header-mobile_active');
                $('.p-calendar__aside-filter-body-mobile').removeClass('p-calendar__aside-filter-body-mobile_active');

            }

        });



        $(function(){
            
            var thisMonthNewMob = moment().format('M');
        var thisYearNewMob = moment().format('YYYY');

            loadMobileTracksForEvent(thisMonthNewMob, thisYearNewMob);
            loadMobileClndr();

              var newArrAsideMobile, newArrMobile;
            

            function loadMobileClndr() {

                var thisNow = moment();
                var thisYear = thisNow.format('YYYY');
                var thisMonth = thisNow.format('MMMM');
                var thisMonthIndex = thisNow.format('M');

                $('.p-calendar__header-title-mobile span').text('' + thisMonth + '  ' + thisYear);

                loadMobileContent (thisYear, thisMonthIndex);

            }

            function loadMobileTracksForEvent(thisMonthNewMob, thisYearNewMob) {
                
                   newArrMobile = [];    
              newArrAsideMobile = [];

            $('.p-calendar__main-mobile-item').remove();    
           
           for(var i = 0; i < eventsObject.length; i++) {
                    var objMonthMob = moment(eventsObject[i].date, 'DD-MM-YYYY').get('month');
                    var objYearMob = moment(eventsObject[i].date, 'DD-MM-YYYY').get('year');
                    
                    if(thisMonthNewMob == (objMonthMob + 1) && thisYearNewMob == objYearMob) {
                        newArrMobile.push(eventsObject[i]);
                    }
                }
                
                
                 for (var j = 0; j < tracksForEvent.length; j++) {
              
                for (var w = 0; w < newArrMobile.length; w++) {
                    if(tracksForEvent[j].nameId == newArrMobile[w].nameId) {
                
                        newArrAsideMobile.push(tracksForEvent[j]);
                
                    }
                      
                }

            }
                     
             var resultMobile = [];

              nextInputMobile:
                for (var l = 0; l < newArrAsideMobile.length; l++) {
                  var strMobile = newArrAsideMobile[l]; 
                  for (var z = 0; z < resultMobile.length; z++) { 
                    if (resultMobile[z].nameId == strMobile.nameId) continue nextInputMobile; 
                  }
                  resultMobile.push(strMobile);
                }

            newArrAsideMobile = resultMobile;
                            
            for (var h = 0; h < newArrAsideMobile.length; h++) {
            //   $('<div class="p-calendar__aside-tracks-item">\n' +
            //     '<div style="background: #' + newArrAside[h].color + '"></div>' +
            //     '<span>' + newArrAside[h].name + '</span>\n' +
            //     '</div>').appendTo( ".p-calendar__aside-tracks" );

            //  $('<div class="p-calendar__main-body-line"></div>').appendTo( ".p-calendar__main-body" );

            //  $('.p-calendar__aside-tracks-item').each(function (index) {

            //         if (index == h) {

            //             $(this).attr('data-eventtype', newArrAside[index].type);
            //             $(this).attr('data-eventnameid', newArrAside[index].nameId);

            //         }
            //     });
            
            $('<div class="p-calendar__main-mobile-item">\n' +
                            '<div style="background: #' + newArrAsideMobile[h].color + ' " class="p-calendar__main-mobile-item-title">\n' +
                                '<span>' + newArrAsideMobile[h].name + '</span>\n' +
                            '</div>\n' +
                            '<div class="p-calendar__main-mobile-item-body">\n' +
                            '</div>\n' +
                        '</div>').appendTo( ".p-calendar__main-mobile-body" );

                    $('.p-calendar__main-mobile-item').each(function (index) {

                        if (index == h) {
                            $(this).attr('data-eventtype', newArrAsideMobile[h].type);
                            $(this).attr('data-eventnameid', newArrAsideMobile[h].nameId);

                        }
                    });
             }

                // for (var j = 0; j < tracksForEvent.length; j++) {

                //     $('<div class="p-calendar__main-mobile-item">\n' +
                //             '<div style="background: #' + tracksForEvent[j].color + ' " class="p-calendar__main-mobile-item-title">\n' +
                //                 '<span>' + tracksForEvent[j].name + '</span>\n' +
                //             '</div>\n' +
                //             '<div class="p-calendar__main-mobile-item-body">\n' +
                //             '</div>\n' +
                //         '</div>').appendTo( ".p-calendar__main-mobile-body" );

                //     $('.p-calendar__main-mobile-item').each(function (index) {

                //         if (index == j) {
                //             $(this).attr('data-eventtype', tracksForEvent[j].type);
                //             $(this).attr('data-eventnameid', tracksForEvent[j].nameId);

                //         }
                //     });

                // }

loadMobileContent();
            }



            function loadMobileContent (year, month) {

               var todayIsDate = new Date(year, month - 1, 1);


                for( var k = 0; k < eventsObject.length; k++ ) {

                    $('.p-calendar__main-mobile-item').each(function (index) {

                        if($(this).attr('data-eventnameid') == eventsObject[k].nameId) {

                            var eventObjDate = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('D');
                            var eventObjMonth = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('M');
                            var eventObjYear = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('YYYY');

                            if (eventObjYear == todayIsDate.getFullYear() && eventObjMonth == todayIsDate.getMonth() + 1) {


                                var eventDateMonth = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('DD');
                                var eventWeekDay = moment(eventsObject[k].date, ["DD-MM-YYYY"]).format('dd');

                                $('<div class="p-calendar__main-mobile-item-event">\n' +
                                    '<a href="'+eventsObject[k].uri+'">\n' +
                                    '<div>\n' +
                                    '<span>' + eventWeekDay + '</span>\n' +
                                    '<p>' + eventDateMonth + '</p>\n' +
                                    '</div>\n' +
                                    '<div>\n' +
                                    '<span>' + eventsObject[k].eventName + '</span>\n' +
                                    '</div>\n' +
                                    '</a>\n' +
                                    '</div>').appendTo( this );

                            }

                        }


                    });
                }

            }



            var thisNowClone =  moment();

            $('.p-calendar__header-btns-mobile').click(function () {

                $('.p-calendar__main-mobile-item-event').remove();

                if($(this).hasClass('p-calendar__header-btns-mobile-left')) {

                    $('.p-calendar__header-title-mobile span')
                        .text(thisNowClone.subtract(1, 'M')
                            .format('MMMM YYYY'));

 loadMobileTracksForEvent(thisNowClone.format('M'), thisNowClone.format('YYYY'));

                    loadMobileContent(thisNowClone.format('YYYY'), thisNowClone.format('M'));
                    
                    checkFilter();

                } else if($(this).hasClass('p-calendar__header-btns-mobile-right')) {

                    $('.p-calendar__header-title-mobile span')
                        .text(thisNowClone.add(1, 'M')
                            .format('MMMM YYYY'));
                            
                            loadMobileTracksForEvent(thisNowClone.format('M'), thisNowClone.format('YYYY'));

                    loadMobileContent (thisNowClone.format('YYYY'), thisNowClone.format('M'));
                    
                    checkFilter();
                }


            });
        });


        $(function(){
            $(".h-popup__item input[type='tel']").mask("+7(999)999-99-99");
        });

    //    popups
        $('.h-popup__checkbox-box').click(function () {
           $(this).toggleClass('h-popup__checkbox-box_inactive')
               .closest('.h-popup__form')
                    .find('.h-popup__button').toggleClass('h-popup__button_inactive');
        });




        $("[data-popup]").fancybox({
            baseTpl	:
            '<div class="fancybox-container fancybox-container__h-popup" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg fancybox-bg__h-popup"></div>' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-stage"></div>' +
            '</div>' +
            '</div>'

        });


        var hardMobileSwiper = new Swiper('.hard__content-slider', {
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
                nextEl: '.mobile-swiper-next',
                prevEl: '.mobile-swiper-prev'
            }
        });

        var sessionMobileSwiper = new Swiper('.our-session__swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.mobile-swiper-next',
                prevEl: '.mobile-swiper-prev'
            }
        });

        var trackMobileSwiper = new Swiper('.track-mobile__swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.mobile-swiper-next',
                prevEl: '.mobile-swiper-prev'
            },
            breakpoints: {
                767: {
                    autoHeight: true
                    
                }
            }
        });

        var popVideoMobileSwiper = new Swiper('.pop-video__slider-mobile-swiper', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.mobile-swiper-next',
                prevEl: '.mobile-swiper-prev'
            }
        });


        $('.for-guest__content-mobile-item').click(function () {
           $(this).toggleClass('for-guest__content-mobile-item_active')
                    .siblings().removeClass('for-guest__content-mobile-item_active');
        });

        $('.big-info__content-mobile-item').click(function () {
            $(this).toggleClass('big-info__content-mobile-item_active')
                .siblings().removeClass('big-info__content-mobile-item_active');
        });



        $(window).scroll(function(event) {
            if( $(window).outerWidth() <= 639) {
                var st = $(this).scrollTop();
                if (st >= 100) {
                    $('.header').addClass('header-mobile-scroll');
                    $('.section__page-banner').addClass('section__page-banner_active');
                    $('.section__scroll-banner').addClass('section__page-banner_active');
                }
                else {
                    $('.header').removeClass('header-mobile-scroll');
                    $('.section__page-banner').removeClass('section__page-banner_active');
                     $('.section__scroll-banner').removeClass('section__page-banner_active');
                }

                // if (st >= 170) {
                //     $('.section__scroll-banner').addClass('section__scroll-banner_active');
                // } else {
                //     $('.section__scroll-banner').removeClass('section__scroll-banner_active');
                // }
            }
        });

        window.addEventListener('resize', function() {
            $(window).scroll(function(event) {
                if( $(window).outerWidth() <= 639) {
                    var st = $(this).scrollTop();
                    if (st >= 100) {
                        $('.header').addClass('header-mobile-scroll');
                        $('.section__page-banner').addClass('section__page-banner_active');
                    }
                    else {
                        $('.header').removeClass('header-mobile-scroll');
                        $('.section__page-banner').removeClass('section__page-banner_active');
                    }

                    if (st >= 170) {
                        $('.section__scroll-banner').addClass('section__scroll-banner_active');
                    } else {
                        $('.section__scroll-banner').removeClass('section__scroll-banner_active');
                    }
                }
            });
        });





        $('.a-price__content-btn').click(function () {
            $(this).parent('.a-price__content')
                    .toggleClass('a-price__content_active');

        });


        
        $('.p-contacts__main-block-change').click(function () {

            $('.p-contacts__map').toggleClass('p-contacts__map_active');
            $('.p-contacts__info').toggleClass('p-contacts__info_inactive');

            if( ($('.p-contacts__map').hasClass('p-contacts__map_active')) && ($('.p-contacts__info').hasClass('p-contacts__info_inactive')) ) {

                $('.p-contacts__main-block-change span').text('Контакты');

            } else {
                $('.p-contacts__main-block-change span').text('Карта');
            }



        });


        $("[data-fancybox='photof']").fancybox({
            infobar: false,
            touch : false,
            buttons : [
                'close'
            ],
            baseTpl	:
            '<div class="fancybox-container fancybox-container__hiw" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg fancybox-bg__hiw"></div>' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-infobar">' +
            '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
            '</div>' +
            '<div class="fancybox-toolbar">{{buttons}}</div>' +
            '<div class="fancybox-navigation">{{arrows}}</div>' +
            '<div class="fancybox-stage"></div>' +
            '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' +
            '</div>' +
            '</div>',
            btnTpl : {
                close : '<button data-fancybox-close class="fancybox-button fancybox-button--close fancybox-button--close__hiw" title="{{CLOSE}}">' +
                '</button>',
                arrowLeft : '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left fancybox-button--arrow_left__hiw" title="{{PREV}}">' +
                '</button>',

                arrowRight : '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right fancybox-button--arrow_right__hiw" title="{{NEXT}}">' +
                '</button>'
            }

        });


        $( ".p-photo__element" ).hover(
            function() {
                $(this).siblings('.p-photo__element')
                    .addClass('p-photo__element_hover');
            }, function() {
                $(this).siblings('.p-photo__element')
                    .removeClass('p-photo__element_hover');
            }
        );




        var iImgSwiper = new Swiper('.swiper-container__img-slider', {
            slidesPerView: 1,
            effect: 'flip',
            speed: 700,
            simulateTouch: false,
            allowTouchMove: false,
            autoHeight: true,
            navigation: {
                nextEl: '.i-people__nav-right',
                prevEl: '.i-people__nav-left'
            }
        });

        var iTextSwiper = new Swiper('.swiper-container__text-slider', {
            slidesPerView: 1,
            speed: 700,
            simulateTouch: false,
            allowTouchMove: false,
            autoHeight: true,
            spaceBetween: 50,
            navigation: {
                nextEl: '.i-people__nav-right',
                prevEl: '.i-people__nav-left'
            }
        });





        $('.b-video__block-player').click(function () {

            var vbSrc = $(this).attr('data-src');
            var vbWidth = $(this).outerWidth();
            var vbHeight = $(this).outerHeight();

            $(this).find('.b-video__block-overlay').hide();

            var vbFrame = '<iframe width="" height="" src="" frameborder="0" allowfullscreen></iframe>';

            $(this).append(vbFrame);
            $(this).find('iframe').attr('src', vbSrc).attr('width', vbWidth).attr('height', vbHeight);

        });


        if ($(window).innerWidth() >= 768) {
            var filterTop = 130;

            if ($(window).innerWidth() <= 1023) {
                filterTop = 160;
            }

            $(".i-filter_stick").stick_in_parent({
                offset_top: filterTop
            });

        } else if ($(window).innerWidth() < 768) {
            $('.i-filter').removeClass('i-filter_stick');
        }


        window.addEventListener('resize', function() {

           if ($(window).innerWidth() < 768) {
               $(".i-filter_stick").trigger("sticky_kit:detach");
                $('.i-filter').removeClass('i-filter_stick');
            }

        });



        $('.i-filter-item').click(function () {
           $(this).toggleClass('i-filter-item_active');
        });


          //    masonry media
        if ($('.media__block_masonry').length) {
            $(".media__block_masonry").imagesLoaded(function() {
                $('.media__block_masonry').masonry({
                    itemSelector: '.media__item',
                    gutter: '.media__gutter',
                    horizontalOrder: true
                });
            });
        }
        
        setTimeout(function(){
            if ($('.p-photo__block_masonry').length) {
                  $(".p-photo__block_masonry").imagesLoaded(function() {
                    $('.p-photo__block_masonry').masonry({
                        itemSelector: '.p-photo__element',
                        gutter: '.p-photo__gutter',
                        horizontalOrder: true
                    });
                  });
            }
        }, 1000);
    



        
        function $_GET(key) {
        	var s = window.location.search;
        	s = s.match(new RegExp(key + '=([^&=]+)'));
        	return s ? s[1] : false;
        }
        
        
        // function hideMobileEvents(showEventAttr) {

        //     $('.p-calendar__main-mobile-item').hide();
        //     $('div[data-eventtype="'+ showEventAttr +'"]').show();
        // }

    
      function hideEventsSingle(showEventAttr) {

            $('.p-calendar__aside-tracks-item, .p-calendar__main-body-line').hide();
            $('div[data-eventnameid="'+ showEventAttr +'"]').show();
      }
        
      function hideEventsSingleMobile(showEventAttr) {
             $('.p-calendar__main-mobile-item').hide();
            $('div.p-calendar__main-mobile-item[data-eventnameid="'+ showEventAttr +'"]').show();
      }
      
      
      function findFilter(fItem) {
          $('.p-calendar__aside-filter li[data-showid="'+ fItem +'"]')
                            .addClass('p-calendar__aside-filter_active');
      }
      
      function findFilterMobile(fItem) {
           $('.p-calendar__aside-filter-mobile li[data-showid="'+ fItem +'"]')
                .addClass('p-calendar__aside-filter-body-mobile_active');
      }
 
        
        
        function checkFilter() {
            
            if ($_GET('id')) {
                
                var fItem = $_GET('id');
                
                hideEventsSingleMobile(fItem);
                hideEventsSingle(fItem);
          
                
                
                
            } else if ($_GET('typeId')) {
                
                var fItem = $_GET('typeId');
                
                 hideEvents(fItem);
                 hideMobileEvents(fItem);
                 findFilter(fItem);
                 findFilterMobile(fItem);
                
            } 
            
        }
        
        
      setTimeout(function () {
         checkFilter();
        }, 0);



if($(".p-calendar__main-header").length) {

        var hfCalendar  = $('.header_inner-page').outerHeight();
                 var hmCalendarHeight  = $('.p-calendar__header').outerHeight();

        $(".p-calendar__main-header").stick_in_parent({
            'offset_top':  hfCalendar + hmCalendarHeight
         });
}

if($(".p-calendar__header").length) {

        var hmCalendar  = $('.header_inner-page').outerHeight();


        $(".p-calendar__header").stick_in_parent({
            'offset_top':  hmCalendar,
         });
}
if($(".p-calendar__header-mobile").length) {

        var hmMCalendar  = $('.header_inner-page').outerHeight();


        $(".p-calendar__header-mobile").stick_in_parent({
            'offset_top':  hmMCalendar,
         });
}

    
    $('[data-fancybox="livetiming"]').fancybox({
	    iframe : {
		css : {
			height : '100vh',
			minHeight: '400px'
		}
	},
	   baseTpl:
        '<div class="fancybox-container fancybox-livetiming" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-infobar">' +
        "<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>" +
        "</div>" +
        '<div class="fancybox-toolbar">{{buttons}}</div>' +
        '<div class="fancybox-navigation">{{arrows}}</div>' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-caption"></div>' +
        "</div>" +
        "</div>",
    });




    });
    
         window.addEventListener('resize', function() {

            


        });

})(jQuery);
