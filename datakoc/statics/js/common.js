// JavaScript Document
function getScrollbarWidth() {
    var odiv = document.createElement('div'),//创建一个div
        styles = {
            width: '100px',
            height: '100px',
            overflowY: 'scroll'//让他有滚动条
        }, i, scrollbarWidth;
    for (i in styles) odiv.style[i] = styles[i];
    document.body.appendChild(odiv);//把div添加到body中
    scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
    odiv.remove();//移除创建的div
    return scrollbarWidth;//返回滚动条宽度
};

function wdsW(){
	//定义变量获取屏幕视口宽度
	var windowWidth = $(window).width();
	if(windowWidth <= 1140 - getScrollbarWidth()){
		if(!($("#searchBox").hasClass("active"))){
			$("#searchBox").addClass("active");
			if(windowWidth <= 620 - getScrollbarWidth()){
				$("#headH100").css("height",103 + 'px');
			}else{
				$("#headH100").css("height",156 + 'px');
			}
		};
		$("#searchBox").unbind("click");
		// $(document).unbind("click");
	} else{
		if(($("#searchBox").hasClass("active"))){
			$("#searchBox").removeClass("active");
			$("#headH100").css("height",100 + 'px');
		};
		$("#searchBox").click(function (e) {
			e.stopPropagation();
			$(this).addClass('active');
			$("#nav").hide();
		});
		$(document).click(function(){
			$("#searchBox").removeClass('active');
			$("#nav").show(300);
		});
	};
	if(windowWidth <= 940 - getScrollbarWidth()){
		$("#menu").click(function(e) {
			e.stopPropagation();
			$(".menuBox").slideToggle();
		});
		$("#head .nav>li a").click(function(e) {
			e.stopPropagation();
		});
		$("#head .userBtn").click(function(e) {
			e.stopPropagation();
		});
		$(document).click(function(){
			$(".menuBox").slideUp();
		});
	}else{
		$("#menu").unbind("click");
	};
};

function windowResizeEvent(callback) {
    var firstFire = null;

    window.onresize = function () {
        if(firstFire === null) {
            firstFire = setTimeout(function() {
                firstFire = null;
                callback();
            }, 100);
        }
    };
};

$(document).ready(function () {
	/**
	 *头部导航搜索框 
	 */	
	wdsW();
	// windowResizeEvent(wdsW);
	
	/**
	 * 登录
	 */
	$("#logoFn").click(function() {
		$(".loginBox").addClass("show");
	});
	$(".loginBox").click(function() {
		$(".loginBox").removeClass("show");
	});
	$(".loginNr").click(function(e) {
		e.stopPropagation();
	});
	$(".loginNr .phone .ico-rightTop").click(function() {
		$(this).parents(".phone").addClass("hide");
		$(".loginNr .code").removeClass("hide");
	});
	$(".loginNr .code .ico-rightTop").click(function() {
		$(this).parents(".code").addClass("hide");
		$(".loginNr .phone").removeClass("hide");
	});
});
