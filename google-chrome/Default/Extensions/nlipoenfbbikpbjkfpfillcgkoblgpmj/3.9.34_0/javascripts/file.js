function errorHandler(e){var r="";switch(e.code){case FileError.QUOTA_EXCEEDED_ERR:r="QUOTA_EXCEEDED_ERR";break;case FileError.NOT_FOUND_ERR:r="NOT_FOUND_ERR";break;case FileError.SECURITY_ERR:r="SECURITY_ERR";break;case FileError.INVALID_MODIFICATION_ERR:r="INVALID_MODIFICATION_ERR";break;case FileError.INVALID_STATE_ERR:r="INVALID_STATE_ERR";break;default:r="Unknown Error"}return r}window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem;var fileSaver={fs:null,getFs:function(){return new Promise(function(e,r){window.requestFileSystem(window.PERSISTENT,52428800,function(r){e(r)},function(e){r(e)})})},save:function(e,r){var n=this;return this.getFs().then(function(t){return n.do_save(t,e,r)},errorHandler)},do_save:function(e,r,n){return new Promise(function(t,o){e.root.getFile(n,{create:!0},function(e){e.createWriter(function(n){n.onwriteend=function(r){t(e.toURL()),console.log("Write completed.",e,r)},n.onerror=function(e){o(e.toString()),console.log("Write failed: "+e.toString())},n.write(r)},function(e){o(e)})},function(e){o(e)})})}};