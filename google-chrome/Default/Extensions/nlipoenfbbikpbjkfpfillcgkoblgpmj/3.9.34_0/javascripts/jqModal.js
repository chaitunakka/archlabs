!function(e){e.fn.jqm=function(n){var s={overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:i,ajaxText:"",target:i,modal:i,toTop:i,onShow:i,onHide:i,onLoad:i};return this.each(function(){if(this._jqm)return o[this._jqm].c=e.extend({},o[this._jqm].c,n);t++,this._jqm=t,o[t]={c:e.extend(s,e.jqm.params,n),a:i,w:e(this).addClass("jqmID"+t),s:t},s.trigger&&e(this).jqmAddTrigger(s.trigger)})},e.fn.jqmAddClose=function(e){return m(this,e,"jqmHide")},e.fn.jqmAddTrigger=function(e){return m(this,e,"jqmShow")},e.fn.jqmShow=function(t){return this.each(function(){t=t||window.event,e.jqm.open(this._jqm,t)})},e.fn.jqmHide=function(t){return this.each(function(){t=t||window.event,e.jqm.close(this._jqm,t)})},e.jqm={hash:{},open:function(t,r){var c=o[t],h=c.c,m="."+h.closeClass,u=(u=parseInt(c.w.css("z-index")))>0?u:3e3,l=e("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":u-1,opacity:h.overlay/100});if(c.a)return i;if(c.t=r,c.a=!0,c.w.css("z-index",u),h.modal?(n[0]||d("bind"),n.push(t)):h.overlay>0?c.w.jqmAddClose(l):l=i,c.o=l?l.addClass(h.overlayClass).prependTo("body"):i,s&&(e("html,body").css({height:"100%",width:"100%"}),l)){l=l.css({position:"absolute"})[0];for(var f in{Top:1,Left:1})l.style.setExpression(f.toLowerCase(),"(_=(document.documentElement.scroll"+f+" || document.body.scroll"+f+"))+'px'")}if(h.ajax){var j=h.target||c.w,w=h.ajax,j="string"==typeof j?e(j,c.w):e(j),w="@"==w.substr(0,1)?e(r).attr(w.substring(1)):w;j.html(h.ajaxText).load(w,function(){h.onLoad&&h.onLoad.call(this,c),m&&c.w.jqmAddClose(e(m,c.w)),a(c)})}else m&&c.w.jqmAddClose(e(m,c.w));return h.toTop&&c.o&&c.w.before('<span id="jqmP'+c.w[0]._jqm+'"></span>').insertAfter(c.o),h.onShow?h.onShow(c):c.w.show(),a(c),i},close:function(t){var s=o[t];return s.a?(s.a=i,n[0]&&(n.pop(),n[0]||d("unbind")),s.c.toTop&&s.o&&e("#jqmP"+s.w[0]._jqm).after(s.w).remove(),s.c.onHide?s.c.onHide(s):(s.w.hide(),s.o&&s.o.remove()),i):i},params:{}};var t=0,o=e.jqm.hash,n=[],s=e.browser.msie&&"6.0"==e.browser.version,i=!1,r=e('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),a=function(t){s&&(t.o?t.o.html('<p style="width:100%;height:100%"/>').prepend(r):e("iframe.jqm",t.w)[0]||t.w.prepend(r)),c(t)},c=function(t){try{e(":input:visible",t.w)[0].focus()}catch(e){}},d=function(t){e()[t]("keypress",h)[t]("keydown",h)[t]("mousedown",h)},h=function(t){var s=o[n[n.length-1]],i=!e(t.target).parents(".jqmID"+s.s)[0];return i&&c(s),!i},m=function(t,n,s){return t.each(function(){var t=this._jqm;e(n).each(function(){this[s]||(this[s]=[],e(this).click(function(){for(var e in{jqmShow:1,jqmHide:1})for(var t in this[e])o[this[e][t]]&&o[this[e][t]].w[e](this);return i})),this[s].push(t)})})}}(jQuery);