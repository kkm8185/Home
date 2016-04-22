//////////////////////////////////////////////////////////////////////////
// File Name	: utils.js												//
// Date	 		: 2015.03.18											//
// Compiler 	: -														//
// Os	 		: Window XP												//
// Author		: Kim kyung min											//
//----------------------------------------------------------------------//
// ver			: 1.0.1													//
// Description	: 검색홈페이지											//
//////////////////////////////////////////////////////////////////////////
  var console = console || {
      log:function(){},
      warn:function(){},
      error:function(){}
  };
function createRequest() {
  try {
	// IE가 아닌 브라우저를 위한 XMLHttpRequest 생성
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
	  // IE를 위한 ActiveXObject 생성
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
		// IE를 위한 ActiveXObject를 생성
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
		// 모든 방법 실패한 경우, null
        request = null;
      }
    }
  }	
  return request;
}
function re_f(){
	return false;
}
function click() {
	if ((event.button==2) || (event.button==2)) {
		alert('죄송합니다. 오른쪽 마우스 금지입니다.');
	}
}
function disableSelection(target)
{
    //For IE This code will work
    if (typeof target.onselectstart!="undefined")
    target.onselectstart=function(){return false}
    
    //For Firefox This code will work
    else if (typeof target.style.MozUserSelect!="undefined")
    target.style.MozUserSelect="none"
    
    //All other  (ie: Opera) This code will work
    else
    target.onmousedown=function(){return false}
    target.style.cursor = "default"
}

function getActivatedObject(e) {
  var obj;
  if (!e) {
    // IE의 예전버전
    obj = window.event.srcElement;
  } else if (e.srcElement) {
    // IE 7이후
    obj = e.srcElement;
  } else {
    // DOM Level 2 브라우저
    obj = e.target;
  }
  return obj;
}

function addEventHandler(obj, eventName, handler) {
  // IE일 경우, on을 추가로 붙여 처리
  if (document.attachEvent) {
    obj.attachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
  // 다른 브라우저일 경우, DOM 레벨2 구간에서 처리
    obj.addEventListener(eventName, handler, false);
  }
}
var Browser = {
    a : navigator.userAgent.toLowerCase()
}
Browser = {
    ie : /*@cc_on true || @*/ false,
    ie6 : Browser.a.indexOf('msie 6') != -1,
    ie7 : Browser.a.indexOf('msie 7') != -1,
    ie8 : Browser.a.indexOf('msie 8') != -1,
    ie9 : Browser.a.indexOf('msie 9') != -1,
    opera : !!window.opera,
    safari : Browser.a.indexOf('safari') != -1,
    safari3 : Browser.a.indexOf('applewebkit/5') != -1,
    mac : Browser.a.indexOf('mac') != -1,
    chrome : Browser.a.indexOf('chrome') != -1,
    firefox : Browser.a.indexOf('firefox') != -1
}
function whatKindOfBrowser() {
        if (Browser.chrome) {
                alert("구글 크롬을 사용중입니다 고갱님");
        } else if (Browser.ie6) {
                alert("IE 6을 사용중입니다 고갱님");
        } else if (Browser.ie7) {
                alert("IE 7을 사용중입니다 고갱님");
        } else if (Browser.ie8) {
                alert("IE 8을 사용중입니다 고갱님");
        } else if (Browser.ie9) {
                alert("IE 9를 사용중입니다 고갱님");
        } else if (Browser.opera) {
                alert("오페라를 사용중입니다 고갱님");
        } else if (Browser.safari) {
                alert("사파리를 사용중입니다 고갱님");
        } else if (Browser.safari2) {
                alert("사파리2를 사용중입니다 고갱님");
        } else if (Browser.safari3) {
                alert("사파리3을 사용중입니다 고갱님");
        } else if (Browser.mac) {
                alert("맥 브라우져를 사용중입니다 고갱님");
        } else if (Browser.firefox) {
                alert("파이어폭스를 사용중입니다 고갱님");
        } else {
                alert("브라우져 체크 목록에 없습니다 고갱님");
        }
}
if(typeof(document.all) == 'undefined')
{
   var allGetter = function () {
     var a = this.getElementsByTagName("*");
     var node = this;
     a.tags = function (sTagName) {
       return node.getElementsByTagName(sTagName);
     };
     return a;
   };
   HTMLDocument.prototype.__defineGetter__("all", allGetter);
   HTMLElement.prototype.__defineGetter__("all", allGetter);
	if (typeof(event) == 'undefined') {
		/*
		 document.captureEvents(
		 Event.MOUSEMOVE|
		 Event.MOUSEUP|
		 Event.MOUSEOVER|
		 Event.MOUSEDOWN|
		 Event.MOUSEDRAG);
		 */
		window.event = {
			'clientX': 0,
			'clientY': 0,
			'button': 0,
			'altKey':false,
			'keyCode': 0,
			srcElement: null
		};
		event = window.event;

		document.addEventListener('mousedown', function(e){
			event.srcElement = e.target;
			switch (e.which) {
				case 3:
					event.button = 2;
					break;
				case 2:
					event.button = 3;
					break;
				default:
					event.button = e.which;
					break;
			}// end switch
		}, false);
		document.addEventListener('mousemove', function(e){
			event.srcElement = e.target;
			/*
			 event.clientX = e.pageX-document.body.scrollLeft;
			 event.clientY = e.pageY-document.body.scrollTop;
			 */
			event.clientX = e.clientX;
			event.clientY = e.clientY;
//			console.log([e.clientX, e.clientY])
		}, false);
		window.addEventListener('DOMMouseScroll', function(e){
			event.srcElement = e.target;
			event.wheelDelta = e.detail > 0 ? -120 : 120;
		}, true);
	}
}
var myWidth = 0, myHeight = 0;
if (typeof (window.innerWidth) == 'number') { //Chrome
     myWidth = window.innerWidth;
     myHeight = window.innerHeight;
} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
     myWidth = document.documentElement.clientWidth;
     myHeight = document.documentElement.clientHeight;
} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { //IE9
     myWidth = document.body.clientWidth;
     myHeight = document.body.clientHeight;
}
function key_check(e){
	if(typeof(e)!='undefined'){
		event = e;
	}
	if(event.keyCode == 13){
		search_click();
		return false;
	}
}