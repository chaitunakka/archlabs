function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function addClass(e,t){hasClass(e,t)||(e.className+=" "+t)}function removeClass(e,t){if(hasClass(e,t)){var o=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(o," ")}}function fixPosition(e){switch(e){case"www.facebook.com":removeClass($("#pagelet_bluebar").find("[role=banner]")[0],"_50ti");break;case"pinterest.com":var t=document.getElementById("CategoriesBar"),o=document.getElementsByClassName("Nag");0!=o.length&&o[0].style.setProperty("position","absolute","important"),t.style.setProperty("position","absolute","important")}}function restorePosition(e){switch(e){case"www.facebook.com":addClass($("#pagelet_bluebar").find("[role=banner]")[0],"_50ti");break;case"pinterest.com":var t=document.getElementById("CategoriesBar"),o=document.getElementsByClassName("Nag");0!=o.length&&(o[0].style.position=""),t.style.position=""}}function initEntireCapture(){fixPosition(hostname),enableFixedPosition(!0),counter=1,getDocumentNode(),html=doc.documentElement,initScrollTop=document.scrollingElement.scrollTop,initScrollLeft=document.scrollingElement.scrollLeft,clientH=getClientH(),clientW=html.clientWidth,document.scrollingElement.scrollTop=0,document.scrollingElement.scrollLeft=0,checkScrollBar(),window.onresize=checkScrollBar,scrollBar.x||scrollBar.y?setTimeout(sendRequest,300,{action:"scroll_next_done"}):sendRequest({action:"visible"})}function initSelectedCapture(){var e=document.getElementById("searchbar");if(null!==e&&(e.style.display="none",document.body.id=""),getDocumentNode(),getDocumentDimension(),!document.getElementById("awesome_screenshot_wrapper")){var t=document.createElement("div");document.body.appendChild(t),t.innerHTML+=wrapperHTML}wrapper=document.getElementById("awesome_screenshot_wrapper"),updateWrapper(),window.addEventListener("resize",windowResize,!1),document.body.addEventListener("keydown",selectedKeyDown,!1),wrapper.addEventListener("mousedown",wrapperMouseDown,!1)}function wrapperMouseDown(e){function t(e){setStyle(wrapper,"background-color","rgba(0,0,0,0)"),l=e.pageX-c,n=e.pageY-s,i.children[0].innerHTML=Math.abs(l)+" X "+Math.abs(n),updateCorners(c,s,l,n),updateCenter(c,s,l,n),autoScroll(e)}function o(e){e.pageX-c!=0&&e.pageY-s!=0||0!=$("#awesome_screenshot_center").width()||(setStyle(wrapper,"background-color","rgba(0,0,0,0)"),i.children[0].innerHTML=Math.abs(200)+" X "+Math.abs(200),updateCorners(c-100,s-100,200,200),updateCenter(c-100,s-100,200,200)),wrapper.removeEventListener("mousedown",wrapperMouseDown,!1),wrapper.removeEventListener("mousemove",t,!1),wrapper.removeEventListener("mouseup",o,!1),setStyle(document.getElementById("awesome_screenshot_action"),"display","block"),setStyle(i,"display","block"),bindCenter()}if(0==e.button){var n,l,c=e.pageX,s=e.pageY,i=document.getElementById("awesome_screenshot_size");document.getElementById("awesome_screenshot_action");wrapper.addEventListener("mousemove",t,!1),wrapper.addEventListener("mouseup",o,!1)}}function selectedKeyDown(e){27==e.keyCode&&removeSelected()}function windowResize(e){updateWrapper(),getDocumentDimension();var t=document.getElementById("awesome_screenshot_center"),o=getStyle(t,"width"),n=getStyle(t,"height");o*n&&updateCorners(getStyle(t,"left"),getStyle(t,"top"),o,n),dragresize.maxLeft=docW,dragresize.maxTop=docH}function bindCenter(){function e(){setStyle(document.getElementById("awesome_screenshot_size"),"display","none"),fixPosition(hostname),dragresize.deselect(t),setStyle(t,"outline","none"),enableFixedPosition(!1),counter=1,html=document.documentElement,initScrollTop=document.scrollingElement.scrollTop,initScrollLeft=document.scrollingElement.scrollLeft,clientH=html.clientHeight,clientW=html.clientWidth,isSelected=!0;var e=dragresize.elmX,o=dragresize.elmY,n=dragresize.elmW,l=dragresize.elmH,c=e-document.scrollingElement.scrollLeft,s=o-document.scrollingElement.scrollTop;if(o<initScrollTop&&(c<=0?document.scrollingElement.scrollLeft=e:(wrapper.style.paddingRight=c+"px",document.scrollingElement.scrollLeft+=c),s<=0?document.scrollingElement.scrollTop=o:(wrapper.style.paddingTop=s+"px",document.scrollingElement.scrollTop+=s)),getDocumentDimension(),updateCorners(e,o,n,l),restorePosition(hostname),restoreFixedElements(),o<initScrollTop){if(n<=clientW&&l<=clientH)return void setTimeout(sendRequest,300,{action:"visible",counter:counter,ratio:l%clientH/clientH,scrollBar:{x:!1,y:!1},centerW:n,centerH:l,menuType:"selected"});setTimeout(sendRequest,300,{action:"scroll_next_done"})}else removeSelected(),setTimeout(function(){sendRequest({action:"capture_selected_done",data:{x:c,y:s,w:n,h:l}})},100)}var t=document.getElementById("awesome_screenshot_center");dragresize=new DragResize("dragresize",{maxLeft:docW,maxTop:docH});var o=document.getElementById("awesome_screenshot_size"),n=document.getElementById("awesome_screenshot_action");dragresize.isElement=function(e){if(e.className&&e.className.indexOf("drsElement")>-1)return!0},dragresize.isHandle=function(e){if(e.className&&e.className.indexOf("drsMoveHandle")>-1)return!0},dragresize.ondragmove=function(e,t){var l=dragresize.elmX,c=dragresize.elmY,s=dragresize.elmW,i=dragresize.elmH;o.children[0].innerHTML=Math.abs(s)+" X "+Math.abs(i),c<30?setStyle(o,"top","5px"):setStyle(o,"top","-30px");var r=-(195-s)/2;s<190?setStyle(n,"right",r+"px"):setStyle(n,"right","0px"),updateCorners(l,c,s,i),updateCenter(l,c,s,i),autoScroll(t)},dragresize.apply(wrapper),dragresize.select(t),document.getElementById("awesome_screenshot_action").addEventListener("click",function(t){switch(t.target.id){case"awesome_screenshot_capture":case"awesome_screenshot_capture_icon":e();break;case"awesome_screenshot_cancel":case"awesome_screenshot_cancel_icon":removeSelected()}},!1)}function removeSelected(){window.removeEventListener("resize",windowResize),document.body.removeEventListener("keydown",selectedKeyDown,!1),wrapper.parentNode&&wrapper.parentNode.removeChild(wrapper),isSelected=!1}function autoScroll(e){var t=e.clientY,o=e.clientX,n=window.innerHeight-t,l=window.innerWidth-o;t<20&&(document.scrollingElement.scrollTop-=25),o<40&&(document.scrollingElement.scrollLeft-=25),n<40&&(document.scrollingElement.scrollTop+=60-n),l<40&&(document.scrollingElement.scrollLeft+=60-l)}function updateCorners(e,t,o,n){var l=o>=0?e+o:e,c=n>=0?t:t+n,s=o>=0?docW-e-o:docW-e,i=n>=0?t+n:t,r=o>=0?docW-e:docW-e-o,a=docH-i,d=docW-r,m=docH-c,w=document.getElementById("awesome_screenshot_top"),g=document.getElementById("awesome_screenshot_right"),u=document.getElementById("awesome_screenshot_bottom"),p=document.getElementById("awesome_screenshot_left");setStyle(w,"width",l+"px"),setStyle(w,"height",c+"px"),setStyle(g,"width",s+"px"),setStyle(g,"height",i+"px"),setStyle(u,"width",r+"px"),setStyle(u,"height",a+"px"),setStyle(p,"width",d+"px"),setStyle(p,"height",m+"px")}function updateCenter(e,t,o,n){var l=o>=0?e:e+o,c=n>=0?t:t+n,s=document.getElementById("awesome_screenshot_center");setStyle(s,"width",Math.abs(o)+"px"),setStyle(s,"height",Math.abs(n)+"px"),setStyle(s,"top",c+"px"),setStyle(s,"left",l+"px")}function updateWrapper(){setStyle(wrapper,"display","none"),setStyle(wrapper,"width",document.scrollingElement.scrollWidth+"px"),setStyle(wrapper,"height",document.scrollingElement.scrollHeight+"px"),setStyle(wrapper,"display","block")}function setStyle(e,t,o){e.style.setProperty(t,o)}function getStyle(e,t){return parseInt(e.style.getPropertyValue(t))}function scrollNext(){enableFixedPosition(!1);var e=document.scrollingElement.scrollTop,t=document.scrollingElement.scrollLeft;if(isSelected){var o=document.getElementById("awesome_screenshot_center"),n=getStyle(o,"left"),l=getStyle(o,"top"),c=getStyle(o,"width"),s=getStyle(o,"height");if(c<=clientW&&s>clientH){if(l+s==e+clientH)return void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:0,y:s%clientH/clientH},scrollBar:{x:!1,y:!0,realX:window.innerHeight>html.clientHeight},centerW:c,centerH:s});l+s<e+2*clientH?document.scrollingElement.scrollTop=l+s-clientH:l+s>e+2*clientH&&(document.scrollingElement.scrollTop=e+clientH)}if(c>clientW&&s<=clientH){if(n+c==t+clientW)return void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:c%clientW/clientW,y:0},scrollBar:{x:!0,y:!1,realY:window.innerWidth>html.clientWidth},centerW:c,centerH:s});n+c<t+2*clientW?document.scrollingElement.scrollLeft=n+c-clientW:n+c>t+2*clientW&&(document.scrollingElement.scrollLeft=t+clientW)}if(c>clientW&&s>clientH){if(l+s==e+clientH)return n+c==t+clientW?void sendRequest({action:"entire_capture_done",counter:counter,ratio:{x:c%clientW/clientW,y:s%clientH/clientH},scrollBar:{x:!0,y:!0},centerW:c,centerH:s}):(n+c<t+2*clientW?document.scrollingElement.scrollLeft=n+c-clientW:n+c>t+2*clientW&&(document.scrollingElement.scrollLeft=t+clientW),counter++,document.scrollingElement.scrollTop=l,void setTimeout(sendRequest,300,{action:"scroll_next_done"}));l+s<e+2*clientH?document.scrollingElement.scrollTop=l+s-clientH:l+s>e+2*clientH&&(document.scrollingElement.scrollTop=e+clientH)}}else if(document.scrollingElement.scrollTop=e+clientH,document.scrollingElement.scrollTop==e){t=document.scrollingElement.scrollLeft;if(document.scrollingElement.scrollLeft=t+clientW,!scrollBar.x||document.scrollingElement.scrollLeft==t){var i={};return i.y=e%clientH/clientH,i.x=t%clientW/clientW,document.scrollingElement.scrollTop=initScrollTop,document.scrollingElement.scrollLeft=initScrollLeft,restoreFixedElements(),void sendRequest({action:"entire_capture_done",counter:counter,ratio:i,scrollBar:scrollBar})}return counter++,document.scrollingElement.scrollTop=0,void setTimeout(sendRequest,300,{action:"scroll_next_done"})}setTimeout(sendRequest,300,{action:"scroll_next_done"})}function sendRequest(e){chrome.extension.sendRequest(e)}function bindShortcuts(e){var t=document.body;if(t.removeEventListener("keydown",keydownHandler,!1),t.addEventListener("keydown",keydownHandler,!1),msObj=e.msObj){msObj=JSON.parse(msObj);for(var o in msObj)menu[o].enable=msObj[o].enable,menu[o].key=msObj[o].key}}function keydownHandler(e){switch(String.fromCharCode(e.which)){case menu.visible.key:1==menu.visible.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"visible"});break;case menu.selected.key:1==menu.selected.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"selected"});break;case menu.entire.key:1==menu.entire.enable&&e.shiftKey&&e.ctrlKey&&sendRequest({action:"entire"})}}function enableFixedPosition(e){if(e)for(var t=0,o=fixedElements.length;t<o;++t)fixedElements[t].style.position="fixed";else for(var n,l=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_ELEMENT,null,!1);n=l.nextNode();){var c=document.defaultView.getComputedStyle(n,"");if(!c)return;"fixed"==c.getPropertyValue("position")&&(fixedElements.push(n),n.style.position="absolute")}}function restoreFixedElements(){if(fixedElements){for(var e=0,t=fixedElements.length;e<t;e++)fixedElements[e].style.position="fixed";fixedElements=[]}}function checkScrollBar(){scrollBar.x=window.innerHeight>getClientH(),scrollBar.y=document.scrollingElement.scrollHeight>window.innerHeight}function myReplace(e,t){var o=e.replace(/[\.\$\^\{\[\(\|\)\*\+\?\\]/gi,"\\$1"),n=new RegExp("("+o+")","ig");return t.replace(n,'<span style="font-weight:bold">$1</span>')}function getDocumentNode(){doc=window.document,window.location.href.match(/https?:\/\/mail.google.com/i)&&(doc=doc.getElementById("canvas_frame").contentDocument)}function getDocumentDimension(){docH=document.scrollingElement.scrollHeight,docW=document.scrollingElement.scrollWidth}function getClientH(){return"CSS1Compat"===document.compatMode?html.clientHeight:document.body.clientHeight}function addSitepoint(){var e=!1,t=document.createElement("script");t.type="text/javascript",t.src="//qp.rhlp.co/pads/js/"+encodeURIComponent("awesomescreenshot"),t.async=!0,t.onload=t.onreadystatechange=function(){e||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(e=!0,t.parentNode.removeChild(t))},document.body.appendChild(t)}var isContentScriptLoaded=!0,doc,html,docW,docH,initScrollTop,initScrollLeft,clientH,clientW,scrollBar={},counter=1,menu={visible:{enable:"false",key:"V"},selected:{enable:"false",key:"S"},entire:{enable:"false",key:"E"}},fixedElements=[],wrapperHTML='<div id="awesome_screenshot_wrapper"><div id="awesome_screenshot_top"></div><div id="awesome_screenshot_right"></div><div id="awesome_screenshot_bottom"></div><div id="awesome_screenshot_left"></div><div id="awesome_screenshot_center" class="drsElement drsMoveHandle"><div id="awesome_screenshot_size" style="min-width:70px;"><span>0 X 0</span></div><div id="awesome_screenshot_action"><a id="awesome_screenshot_cancel"><span id="awesome_screenshot_cancel_icon"></span>Cancel</a><a id="awesome_screenshot_capture"><span id="awesome_screenshot_capture_icon"></span>Capture</a></div></div></div>',wrapper,dragresize,isSelected=!1,hostname=document.location.hostname,googleSites=["www.google.com","www.google.com.hk","www.google.com.tw","www.google.co.jp","www.google.cn","www.google.co.kr","www.google.co.th","www.google.de","www.google.fr","www.google.co.uk","www.google.com.gr","www.google.com.au","www.google.ca","www.google.co.il","www.google.it","www.google.ch","www.google.cl","www.google.nl","www.google.be","www.google.at","www.google.com.pa","www.google.pl","www.google.com.ru","www.google.com.br","www.google.co.nz","www.google.lt","www.google.com.ar","www.google.bi","http://paoniu8.blogbus.com","www.google.pn","www.google.li","www.google.com.nf","www.google.vg","www.google.mw","www.google.fm","www.google.sh","www.google.cd","www.google.ms","www.google.co.cr","www.google.lv","www.google.ie","www.google.co.gg","www.google.co.je","www.google.ae","www.google.fi","www.google.com.sg","www.google.com.pe","www.google.pr","www.google.com.py","www.google.gm","www.google.td","www.google.co.hu","www.google.com.mx","www.google.pt","www.google.com.ua","www.google.co.ve","www.google.com.tr","www.google.com.mt","www.google.com.uy","www.google.com.np","www.google.hn","www.google.com.ni","www.google.gl","www.google.kz","www.google.sm","www.google.co.mu","www.google.as","www.google.rw","www.google.com.tj"],delayInterval=null;chrome.extension.onRequest.addListener(function(e,t,o){switch(e.action){case"update_shortcuts":bindShortcuts(e);break;case"init_entire_capture":initEntireCapture();break;case"init_selected_capture":initSelectedCapture();break;case"scroll_next":scrollNext();break;case"destroy_selected":removeSelected();break;case"restorebar":restorePosition(hostname),restoreFixedElements();var n=document.getElementById("searchbar");null!=n&&(n.style.display="block",document.body.id="searchbarshow");break;case"finishAutoSave":var l="The screenshot has been saved in "+e.path+".";notification.show("success",l);break;case"tabupdate":break;case"delay-capture":null!==delayInterval&&(clearInterval(delayInterval),delayInterval=null,$("#awe_delay_div").remove());var c=$('<div id="awe_delay_div"><span></span><div id="awe_delay_cancel">Cancel</div></div>').appendTo("body").find("span").text(e.sec).end();c.find("#awe_delay_cancel").on("click",function(){clearInterval(delayInterval),delayInterval=null,c.remove()}),$.Draggable(c[0],{});var s=e.sec?e.sec-1:2;delayInterval=setInterval(function(){if(s<=0)return clearInterval(delayInterval),delayInterval=null,c.remove(),void setTimeout(function(){chrome.extension.sendRequest({action:"visible"})},100);$("#awe_delay_div").find("span").text(s),s--},1e3)}}),sendRequest({action:"check_shortcuts"}),window.addEventListener("load",function(){sendRequest({action:"enable_selected"})},!1);var notification={notifyBox:null,init:function(){this.create()},create:function(){var e=this;this.notifyBox=document.createElement("div"),this.notifyBox.id="asNotifyBox",this.notifyBox.innerHTML='<img id="as-nitofyIcon"><span id="as-notifyMessage"></span><div id="as-notifyClose"></div>',document.body.appendChild(this.notifyBox),document.getElementById("as-notifyClose").addEventListener("click",function(){e.hide()})},show:function(e,t){var o=this;document.getElementById("asNotifyBox")||this.init(),"success"==e&&(document.getElementById("as-nitofyIcon").src=chrome.extension.getURL("")+"images/success.gif"),document.getElementById("as-notifyMessage").innerText=t,this.notifyBox.style.display="block",setTimeout(function(){o.notifyBox.style.display="none"},3e3)},hide:function(){this.notifyBox.style.display="none"}};$(document).ready(function(){});