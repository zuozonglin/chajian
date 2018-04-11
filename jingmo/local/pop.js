// var cssStyle = '';
var cssStyle = 'body,button,input,li,ol,p,ul{margin:0;padding:0}body{font:12px "Microsoft Yahei",sans-serif;color:#545454;user-select:none;cursor:default}a{text-decoration:none;color:#545454;cursor:pointer}li,ul{list-style:none}.clear{zoom:1}.clear:after{visibility:hidden;clear:both;display:block;content:"";height:0}.clear:before{content:" ";display:table}.fl{float:left}.fr{float:right}body{width:398px;height:522px}.header{padding:34px 34px 0 34px;height:136px;background:url(data:image/png;base64,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)}.header-logo{width:138px;height:44px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAsCAMAAACNHNClAAAAUVBMVEUAAACjCQ6jCQ7////////////////9+vr//////////////v7////////////////++/v////9+fn////78/P+/f3//v79+fn+/f3++/v///8hlypmAAAAGnRSTlMAAwVAwIDwEKAg0DCwYFDggZBBcCFx4HLQYfwTIkAAAAOdSURBVFjDzNTbrqMgFIDhlSzOCsT07n//B52kGGXUYnfayezvykPEX0TlV7JgpOdVVe5pjvITCugPUxRoW8aYSTqLMXnbmSEcTi7/LuV4sQG77QDL4aT5PykFKMOUUhlL5TspAZyMUhbuLV9JcRBGKco7dP1QmgCpbflRSrTWVjC2CcBsexWqtf2skXQkAeFFtu4p0ylFeU83Sak9W5m99B7rmD6BGafEbVNV/Qcp9jnaDLN0JqiP57B2kLICHrpbRzA9B5hLf6dMAYAsu3Yk6HmV9ge4JGfetYvG4iMB4Ip0rAPYpubTFAvkcUYOlSYcb5kNzVw+TvEOqgxlVinrWU40dTqn9Ja72Q+3kyJTe2zHC87MAM6PUywgA4U3VopLSxn+cTXaSpBxigJRDgzvUdl5AHOh0r7wEm9SIlC+kaLnF3n8u92kiINlvcZ/miKX7Lsp83YoOCvNpE8lAU57AYBU2p7/booF/DoW4TizuOmwturpR7anBL1Q3CDF57rfc1oXi6/gYj+220pO7WBOa93xWrhOiX+KL7vFBkEYCsNEAkqdWtdtvv+DboZsJUtg9mY7F/0RhI+AJ3Hx9NSwYiQd2agISSBXkooOA9NrRqfLg4pC8PeBArppz/wDcvJwULFXbB1Gc66oTFG3TnJovpruguwcBHF1QR5oYajcw4dm1sIZKGlzb8I0MX53VE+DPL78bJ1/IxgpIn6J4nFGXVjwXLOE96kzPTtbV/dLf5GrNdpJVDxd6Fo2R/3jwp/7tha+cJc0lCuRPGj+oziDbU33o+lDVI0vCA8vHPcA0lyLe0VEB2blPTe8odiO5+ce9HQ4yH3jcwTt4KGD8vQuDSbwDfwas2L8uD6faq+41YZeoPAoT/g5RK2HigL5hhG87gMTlhoPoeTduZAN+u4cCtljguy1V3UbfHwEJRbvHyOOfj2DEnPBiX0xF4IgEYBtlC6xchoSrbSKwvKIi2wrBEkwumaGsuJE9ADMUPaiVLUKlIFGoEb/wmwk/yO97A0SkxSUBe/YTKEVD8yWR2PrTOV8YU/FbeCZa42uSRJ2BWXbbzMYrm3Y99mY94PIkGTpACv9sKgJG21WyKG2P/XuUG9H6+v98oFyfFkpCMG5vC5rbYniR1vTgt2zjntvysjz/q03ECgV0cwbQ/Fhs3Wl3cF97AVsA4W6nke5YQyMPScoQv6qM68ziQd3+7xiqzr6T9Y2UZ7+XIZN/6/6AHX7tdCel97KAAAAAElFTkSuQmCC)}.header-title{color:#fff;font-size:18px;margin:20px 0 0 8px}.header-search{height:50px;background:#fff;margin-top:17px}.header-box{height:50px;display:flex;align-items:center;justify-content:center;padding:0 0 0 13px;cursor:pointer;position:relative}.header-drop{position:absolute;display:none;left:0;top:37px;padding-top:20px;width:100%;text-align:center;border-bottom:1px #fff solid}.header-drop ul{background:#D0090F}.header-drop li{font-size:18px;color:#fff;border:1px #fff solid;border-bottom:0;height:30px;line-height:30px}.header-drop li:hover{opacity:.7}.header-type{font-size:18px}.header-arrow{width:15px;height:15px;margin-left:8px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAJ1BMVEUAAACZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJntOK8YAAAADHRSTlMA7PLmSjx3X76ikTCdA8IzAAAAOklEQVQI12MgBnAaGwoKKWkwMPCcAQMGBm4wfRQoFwNiOAAZrED6CFi5z5kzBWAG+5ljUBMSF+C3AQDrfRZiRgVAZwAAAABJRU5ErkJggg==)}.header-line{height:30px;border-right:1px solid #ddd;margin-left:8px}.header-search input{width:178px;padding-left:22px;height:50px;border:0;outline:0;font-size:18px;color:#a9a9a9;font-family:"Microsoft Yahei",sans-serif}.header-button{width:29px;height:29px;margin:10px 18px 0 0;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAclBMVEUAAACZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJmZmJnYLTGXAAAAJXRSTlMA2/nzEah/1sSgm2hfNScWsnpyQQrk0My6RiuLhUw8IAXrk1ZPWBbSQAAAAPJJREFUKM+tkdmigyAMREtBUYv7frvdjf//xQ5SGkxfOy8mOUTC5PAR1abIpJySrnpn3+ejDcrvDN5GG+l42sG/raiTS1rMW5hGsHSFyfikb1wWdUukBaWtw18hO3tIOqGQPWOFWOyHTKjZIPwnEhpyH+a8FcpetdmdY0rxaBUmTjld8WvvKCxsOe1fY2lrfzntQOsw/sQp/BrpXMk2htsaH969M2xku0bOdGwmskCxpaz4r6S7jMN55ZN6W9G4vwdaLte+baTdJIZ4Zzv9MFwuxOabEvjo+hDxQkt4L5IrkkG8P1NVVTg/aGAiXGoRhpW4HmFNIC1yqw74AAAAAElFTkSuQmCC)}.main{padding:9px 0 0 24px}.main-title{font-size:24px;color:#333;margin-top:25px}.main-font{font-size:18px;color:#999899;margin-top:12px}.main-font.margin-top{margin-top:3px}.main-des{font-size:14px;margin-top:20px;color:#b0b0b0}.main-des span{color:#C9090F}.footer{width:356px;margin:26px auto 0 auto;padding:24px 10px 0 10px;border-top:1px #b0b0b0 dashed;font-size:18px}.footer a{color:#419BF9}';
$("<style></style>").html(cssStyle).appendTo("head");
// var cssStyle1212 = '';
var cssStyle1212 = '';
$("<style></style>").html(cssStyle1212).appendTo("head");
var qqUrl = 'http://shang.qq.com/wpa/qunwpa?idkey=b2a29fab51e05037225e64ac8d5e2944f9c72259f2d2c9e883acef25c97e4ae5';
var popHtml = `<div class="header">
    <div class="clear">
        <div class="header-logo fl"></div>
        <div class="header-title fl">购物省钱助手</div>
    </div>
    <div class="clear header-search">
        <div class="fl header-box">
            <div class="fl header-type">淘宝</div>
            <div class="fl header-arrow"></div>
            <div class="fl header-line"></div>
            <div class="header-drop">
                <ul>
                    <li>淘宝</li>
                    <li>天猫</li>
                    <li>京东</li>
                </ul>
            </div>
        </div>
        <div class="fl">
            <label><input type="text" placeholder="搜索宝贝"></label>
        </div>
        <div class="fr header-button"></div>
    </div>
</div>
<div class="main">
    <div class="main-title">功能介绍 :</div>
    <div class="main-font">帮用户查找淘宝/天猫内部隐藏优惠券</div>
    <div class="main-title">使用方法 :</div>
    <div class="main-font">打开淘宝商品宝贝页面 , 可看见找券窝</div>
    <div class="main-font margin-top">为你找的优惠券 , 一键领取即可</div>
    <div class="main-des"><span>注 : </span>优惠券会在下单环节直接抵扣</div>
</div>
<div class="footer">
    <a href="${qqUrl}" target="_blank">领券咨询,戳这里>></a>
</div>`;
$("body").append(popHtml);
$(".header-box").on("mouseenter",function () {
    $(this).children(".header-drop").show();
});
$(".header-box").on("mouseleave",function () {
    $(this).children(".header-drop").hide();
});
$(".header-box").on('click','li',function () {
    $('.header-type').html($(this).html());
    $(".header-drop").hide();
});
$('.header-button').click(function () {
    var val = $('.header-search input').val();
    var type = $('.header-type').html();
    var url = '';
    switch (type) {
        case '淘宝':
            url = 'https://s.taobao.com/search?q=' + val;
            break;
        case '天猫':
            url = 'https://list.tmall.com/search_product.htm?q=' + val;
            break;
        case '京东':
            url = 'https://search.jd.com/Search?enc=utf-8&keyword=' + val;
            break;
        default:
    }
    window.open(url);
});
$(".header-search input").on("keyup",function () {
    if (event.keyCode == 13) {
        $(".header-button").click();
    }
});