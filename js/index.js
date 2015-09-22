var gui = require('nw.gui');

function documentReady(){

}

function checkUrl(location){
  console.log(location.href);
  if(location.hostname !== "duckduckgo.com"){
    document.getElementById("iframe").contentWindow.history.go(-1);
    gui.Shell.openExternal(location.href);
  }
}
