(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var ui = {
  tips: function(id) {
    $(id).removeClass('hide').find('.close').on('click touchstart', function(e){
        e.preventDefault();
        $(id).addClass('hide');
    });;
  },
  winRize: function(n) {
  	var e = n.document,
    t = e.documentElement,
    i = 720,
    o = i / 32,
    a = "orientationchange" in n ? "orientationchange": "resize",
    d = function() {
        var n = t.clientWidth || 320,
        n = n > 720 ? 720 : 320 > n ? 320 : n;
        t.style.fontSize = n / o + "px"
    };
    e.addEventListener && n.addEventListener(a, d, 0),
    d()
  }
}

var poster={
	focusQr: function(){
		if(subscribe == '0'){
			ui.tips('.layer');
		}else {
      ui.tips('.layer2');
  	};
		
	},
  toUtf8: function(str) {   
    var out, i, len, c;   
    out = "";   
    len = str.length;   
    for(i = 0; i < len; i++) {   
      c = str.charCodeAt(i);   
      if ((c >= 0x0001) && (c <= 0x007F)) {   
          out += str.charAt(i);   
      } else if (c > 0x07FF) {   
          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
          out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
          out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
      } else {   
          out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
          out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
      }   
    }   
    return out;   
  },

  canvasMerge: function(){
    var photoUrl = $('.photo').attr('src');
    var imgArr={'src':['/statics/wechat/choujiang/sharePoster/images/active-poster3.png','/statics/wechat/choujiang/sharePoster/images/logo.png',photoUrl]};
    var canvas = document.getElementById('posterg');
    var canvasCtx = canvas.getContext('2d');
   // var n=0;
  //  var len = imgArr.src.length;
    
        var img = new Image();
        img.crossOrigin = 'Anonymous'; //一定要放在最上面解决跨域  
        img.src = imgArr.src[0];
        img.onerror = function(){
          img.src=imgArr.src[1];
        }
        img.onload = function(){
          canvasCtx.drawImage(img, 0, 0, 1080, 1753);
          canvasCtx.drawImage(canvas2,351, 895, 380, 380);
          img.src = imgArr.src[1];
          img.onerror = function(){
            img.src=imgArr.src[2];
          }
          img.onload= function(){
            canvasCtx.drawImage(img, 492, 1045, 100, 100);

            //头像
              img.src=imgArr.src[2];
              img.onerror = function(){
                var base64 = canvas.toDataURL("image/png");
                  var newImg = document.createElement("img");
                      newImg.src = base64;
                  $('.cover').append(newImg)
                  $('#poster-bg2').attr('src', base64);
              }
              img.onload=function(){
                canvasCtx.save();
                canvasCtx.arc(192, 820, 80, 0, 2 * Math.PI);
                canvasCtx.clip();
                canvasCtx.drawImage(img, 112, 740, 160, 160);

                  var base64 = canvas.toDataURL("image/png");
                  var newImg = document.createElement("img");
                      newImg.src = base64;
                  $('.cover').append(newImg)
                  $('#poster-bg2').attr('src', base64);
              }
             
          }
        }


   /*function drawing(n){
     var img = new Image();
       img.crossOrigin = 'Anonymous';  

       img.src=imgArr.src[n]
        
        img.onerror=function(){
          drawing(n+1);
        }
        img.onload=function(){
          if(n==0){
            canvasCtx.drawImage(img, 0, 0, 1080, 1753);
          }
          if (n==1) {//二维码
            canvasCtx.drawImage(img, 321, 855, 440, 440)
          }
          if (n==1) {//头像位置
            canvasCtx.drawImage(img, 118, 640, 160, 160)
          }
          if (n==1) {//头像位置
            canvasCtx.drawImage(img, 500, 945, 85, 85)
          }
          drawing(n+1);
        };*/
        
 
       // canvasCtx.drawImage(canvas2,321, 845, 440, 440);
    //};
   // drawing(0);
  },
	run: function(){
		$('.qiang').bind('click',this.focusQr.bind(this));

    var qrcode = $("#code").qrcode({ //生成二维码
      render: "canvas",
      width: 440,
      height:440,
      text: this.toUtf8(qrcodeUrl)
    });
    
    canvas2= $('#code').find('canvas')[0];  
  //  var canvasCtx = canvas2.getContext('2d');
  //  $('#imgOne').attr('src',canvas2.toDataURL('image/png')); //二维码->canvas->Img
     this.canvasMerge(); //图片合并
  }
}
var canvas2;
$(function(){
  ui.winRize(window);
})
window.onload=function(){
  poster.run();
}

},{}]},{},[1])