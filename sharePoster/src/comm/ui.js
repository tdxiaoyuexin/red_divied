"use strict";
var ui = {
  dialog: function(options) {
    options = $.extend({
      class:'',
      title: 'empty',
      content: 'empty',
      buttons: ['cancel=返回', 'confirm=确认'],
      texts:'',
      callback: function(key) {}
    }, options);
    var h = '<div class="title">'+ options.title +'</div>';
    h += '<div class="content '+ (options.content==='empty' ? 'hide' : 'show') + '">'+ options.content +'</div>';
    h += '<div class="buttons'+ (options.buttons.length > 1 ? ' two' : '') +'">';
    h += options.buttons.map(function(v){
   /*   console.log(v)*/
      var t = v.split('=');
      return '<button type="button" class="'+ t[0] +'">'+ t[1] +'</button>';
    }).join('');
    h += '</div>';
    h += '<p class="tip">'+options.texts+'</p>';
    var $h = $(h);

    $h.find('button').one('click touchstart', function(e){
      e.preventDefault();
      options.callback(e.target.className);

      // 为了是实现动画，需要动画完成后，去掉 hide, 这样下次弹出的时候，还有动画
      $("#ui-dialog").addClass('hide');
      setTimeout(function(){ $("#ui-dialog").removeClass('hide').removeClass('show'); }, 300);
    });
    $("#ui-dialog").addClass(options.class).addClass('show').find(".main").empty().append($h);

    // fixed title content height
    var mainHeight = $("#ui-dialog .title").height() + $("#ui-dialog .content img").height()+$("#ui-dialog .content img").css("marginTop")+$("#ui-dialog .content img").css("marginBottom") + $('.buttons').height()+ $('#ui-dialog .tip').height();
    $("#ui-dialog .main").css({height: mainHeight});
  },
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
module.exports = ui;