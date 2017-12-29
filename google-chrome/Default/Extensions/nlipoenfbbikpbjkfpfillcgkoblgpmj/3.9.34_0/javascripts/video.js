function updateProgress(e,t){console.log(t),$("#"+e+"-upload").find(".progress-bar-inner").show().css("width",t+"%")}function updateYoutubeProgress(e){return updateProgress("youtube",e)}function updateGDriveProgress(e){return updateProgress("gDrive",e)}function buildYoutubeUrl(e){return"https://youtu.be/"+e}function beginUpload(e){$("#"+e+"-upload").addClass("uploading").find(".progress-bar").show()}function afterUpload(e,t,o){var i=$("#"+e+"-upload");i.removeClass("uploading").addClass("uploaded"),i.find(".progress-bar").hide().find(".progress-bar-inner").css("width",0),i.find(".url-area").show().find("input").val(t),o||(currentRecord.detail[e+"Url"]=t,DB.update(id,currentRecord))}function init(){$("#uploadToYoutube").on("click",function(){var e=$("#video").attr("src");chrome.permissions.request({permissions:["identity"]},function(t){t&&getFile(e).then(function(e){return beginUpload("youtube"),file||(file=new File([e],"AwesomeScreenshot-"+(new Date).toISOString().replace(/:|\./g,"-")+".webm",{type:"video/webm"})),uploadVideo.uploadToYoutube(file,updateYoutubeProgress)}).then(function(e){console.log(e),afterUpload("youtube",buildYoutubeUrl(e.id))}).catch(function(e){console.log(e)})})}),$("#uploadToGdrive").on("click",function(){var e=$("#video").attr("src");chrome.permissions.request({permissions:["identity"]},function(t){t&&getFile(e).then(function(e){return beginUpload("gDrive"),file||(file=new File([e],"AwesomeScreenshot-"+(new Date).toISOString().replace(/:|\./g,"-")+".webm",{type:"video/webm"})),uploadVideo.uploadToGoogleDrive(file,updateGDriveProgress)}).then(function(e){console.log(e),afterUpload("gDrive",e.alternateLink)}).catch(function(e){console.log(e)})})}),$("#delete-record").on("click",function(){confirm("Are you sure to delete this recording?")&&DB.delete(id).then(function(e){window.close()})}),document.getElementById("video").addEventListener("canplay",function(){makeThumbnail()}),$("#manage-record").on("click",function(){window.location.href="/video-list.html"}),$("#download-record, .download-btn").on("click",function(){chrome.permissions.request({permissions:["downloads"]},function(e){if(e){var t={url:currentRecord.fileUrl,filename:currentRecord.detail.title+".webm",saveAs:!0};chrome.downloads.download(t)}})}),$("#display-text").on("click",function(){var e=$("#video-title");e.addClass("editing"),e.find("input").css("width",e.width()-200).focus()}),$("#video-title").find("input").on("blur",function(){var e=$("#display-text").find(".text").text().trim(),t=$(this).val().trim();""!=t.replace(" ","")?($("#video-title").removeClass("editing"),e!==t&&($("#display-text").find(".text").text(t),currentRecord.detail.title=t,DB.update(id,currentRecord))):alert("Title can not be empty!")}),$(".upload-item-detail").find("input").on("focus",function(){$(this).select(),document.execCommand("copy"),$(this).parents(".upload-item").find(".copy-tip").fadeIn("fast").delay(1e3).fadeOut("fast")}),DB.init().then(function(){DB.get(id).then(function(e){currentRecord=e,buildRecord(e)})}),Bg.getPremium().then(function(e){e&&$(".tip").hide()}),$("#upgrade-btn").on("click",function(){Bg.googleEvent("upgrade from video page","upgrade"),Bg.goToUpgrade()})}function buildRecord(e){var t=e.detail;$("#video").attr("src",e.fileUrl),document.title=t.title,$(".video-title").find("input").val(t.title),$("#display-text").find(".text").text(t.title),$("#info-time").text(formatDate(new Date(t.timeStamp))),$("#info-duration").text(t.duration),$("#info-size").text(t.size),t.youtubeUrl&&afterUpload("youtube",t.youtubeUrl,!0),t.gDriveUrl&&afterUpload("gDrive",t.gDriveUrl,!0)}function makeThumbnail(){var e=document.createElement("canvas");e.width=320,e.height=180;var t=e.getContext("2d"),o=document.getElementById("video");t.drawImage(o,0,0,e.width,e.height);var i=e.toDataURL(),n=b64toBlob(i.split(",")[1],i.split(",")[0].split(":")[1].split(";")[0]);fileSaver.save(n,currentRecord.id+"_thumbnail.png").then(function(e){currentRecord.detail.thumbnailUrl=e,DB.update(id,currentRecord)})}function formatDate(e){var t=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],o=e.getDate(),i=e.getMonth(),n=e.getFullYear();return t[i]+" "+o+", "+n}function b64toBlob(e,t,o){t=t||"",o=o||1024;for(var i=atob(e),n=[],r=0;r<i.length;r+=o){var a=i.slice(r,r+o),d=Array.prototype.map.call(a,function(e){return e.charCodeAt(0)}),l=new Uint8Array(d);n.push(l)}return new Blob(n,{type:t})}function getFile(e){return new Promise(function(t,o){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=function(e){if(200==this.status){var o=this.response;t(o)}},i.send()})}function isShareLinkReady(){setTimeout(function(){var e=$.get(urlBase+name,function(t){t.code?(e.abort(),isShareLinkReady()):($("#share").removeClass("disabled"),$("#share-input").find("input").val(urlBase+name))})},1e3)}var url=window.location.href,id=parseInt(url.match(/\?id=(.*)/)[1]),Bg=chrome.extension.getBackgroundPage(),youtube_prefix="ba9b_",google_prefix="c822_",urlBase="https://preview.diigo.com/api/v3/awe/video/",currentRecord=null,file=null;localStorage.temp_camera_url&&(document.getElementById("video2").style.display="block",document.getElementById("video2").setAttribute("src",localStorage.temp_camera_url)),$("#share").on("click",function(){$(this).hasClass("disabled")||$("#share-input").show()}),init();