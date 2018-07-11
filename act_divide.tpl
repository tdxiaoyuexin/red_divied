<!DOCTYPE>
<html>
<head>
<meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no" name="viewport">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>100份爱奇艺会员免费抢！</title>
<meta name="keywords" content=""/>
<meta name="description" content="">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="yes" name="apple-touch-fullscreen">
<meta content="telephone=no,email=no" name="format-detection">
<meta name="screen-orientation" content="portrait">
<meta name="x5-orientation" content="portrait">
<link rel="stylesheet" href="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/css/poster.css?12">
</head>
<body>
<div class="poster">
    <h2>您已邀请<span><{$invrnum}></span>人</h2>
    <div class="qiang"><img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/qiang.png" /></div>
    <div class="arrow-left"><img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/arrow-left.png" /></div>
    <div class="arrow-right"><img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/arrow-right.png" /></div>
    <div class="go-buy"><a href="https://weidian.com/item.html?itemID=2157875527">特惠12.5元直接买</a></div>
    <div class="layer hide">
        <img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/close.png" class="close" />
        <img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/dialog.png" class="guanzhu" />
        <img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/qrcode3.png" class="code" />
    </div>
</div>
<div class="layer2 hide">
    <div class="poster2">
        <div class="close"></div>
        <img id="poster-bg2"/>
        <div class='cover'></div>
        <div class="save"></div>
    </div> 
</div>
<{if $act_end == 1}>
<div class="gameOver" style="color: #fff; font-size: 1.2rem; text-align: center;"><p style="margin-top: 160px;">您来晚了，活动已经结束啦，<br/>下周请早哦~~</p></div>
<{/if}>
<canvas id="posterg" width="1080" height="1753"></canvas>

<!-- <img id='imgOne' class="hide"/>  
 -->
 <img src="<{$heardImg}>" onerror="javascript:this.src='statics/wechat/images/common/error.png'" crossorigin="anonymous" style="border-radius:50%;" class='photo hide2'>
<div id="code" class="hide2">
</div>
<img src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/images/active-poster1.png?12" class="poster-bg hide2" />
<script type="text/javascript" src="<{$smarty.const.APP_WEB_URL}>statics/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/js/jquery.qrcode.min.js"></script>
<script type="text/javascript" src="<{$smarty.const.APP_WEB_URL}>statics/wechat/choujiang/sharePoster/js/poster.min.js?145"></script> 
<!--微信分享相关-->
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
var openId = '<{$openid}>';
var subscribe='<{$subscribe}>';
var qrcodeUrl='<{$url}>';
var shareUrl='<{$cdnurl}>/index.php?m=wechat&c=divide&a=actQiY';
var localhostUrl='<{$smarty.const.APP_WEB_URL}>';
$(document).ready(function () {
var indexOf = shareUrl.lastIndexOf("/");
var shareImageUrl = shareUrl.substring(0, indexOf+1)+'statics/wechat/choujiang/sharePoster/images/shareIcon.png'; // 分享图地址

wx.config({
    debug: false,
    appId: "<{$js_sign['appId']}>", // 必填，公众号的唯一标识
    timestamp: "<{$js_sign['timestamp']}>", // 必填，生成签名的时间戳，切记时间戳是整数型，别加引号
    nonceStr: "<{$js_sign['nonceStr']}>", // 必填，生成签名的随机串
    signature: "<{$js_sign['signature']}>", // 必填，签名，见附录1
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
    ]
});
// 2. 分享接口
// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
wx.ready(function () {
    wx.onMenuShareAppMessage({
        title: "100份爱奇艺会员免费抢！",
        desc: "爱奇艺黄金会员免费拿！明明很想要，那就不要等！",
        link: shareUrl,
        imgUrl: shareImageUrl,
        trigger: function (res) {},
        success: function (res) {},
        cancel: function (res) {},
        fail:function (res) {}
    });

    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
        title: "100份爱奇艺会员免费抢！",
        desc: "爱奇艺黄金会员免费拿！明明很想要，那就不要等！",
        link: shareUrl,
        imgUrl: shareImageUrl,
        trigger: function (res) {
            //alert("点击分享：" +JSON.stringify(res));
            // 用户确认分享后执行的回调函数
        },
        success: function (res) {},
        cancel: function (res) {
            //alert("取消分享：" +JSON.stringify(res));
            // 用户取消分享后执行的回调函数
        },
        fail:function (res) {
            //alert("分享失败：" +JSON.stringify(res));
        }
    });
});
})
</script>
</body>
</html>