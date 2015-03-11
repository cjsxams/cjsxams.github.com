jQuery.noConflict();
//2种方式调用
//html5直接调用
jQuery('#qrcode').qrcode(window.location.href);
//不支持html5,可配置图片的尺寸
//jQuery("#qrcode").qrcode({
//    render: "canvas", //table方式
//    width: 150, //宽度
//    height:150, //高度
//    text: 'http://www.baidu.com/' //任意内容
//});
function showHideCode(){
	jQuery("#showdiv").toggle();
}
