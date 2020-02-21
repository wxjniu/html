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
			$("#headH100").css("height",156 + 'px');
		};
		$("#searchBox").unbind("click");
		$(document).unbind("click");
	}else{
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
		$("#menu").click(function() {
			$(".menuBox").slideToggle();
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
	
});

/**
 * 动画轮播图
 */
function bigScroll(objName){
    $(objName).each(function(){
        var i=0;
        var timer=0;
        var prev=$(this).find(".bannerBtn a.prev");
        var next=$(this).find(".bannerBtn a.next");
        var pageI=$(this).find("ol li");
        var imgLi=$(this).find("ul li");
        function right() {
            i++;
            if (i == imgLi.length) {
                i = 0
            }
        }
        function left() {
            i--;
            if (i < 0) {
                i = imgLi.length - 1
            }
        }
        function run(){
            pageI.eq(i).addClass("active").siblings().removeClass("active");
            imgLi.eq(i).fadeIn(600).siblings().fadeOut(600).hide();
        }
        pageI.each(function(index){
            $(this).click(function(){
                i=index;
                run();
            });
        }).eq(0).trigger("click");
        function runn(){
            right();
            run();
        }
        timer= setInterval(runn, 3000);
        $(objName).hover(function(){
            clearInterval(timer);
            // $(".bannerBtn a").fadeIn(600);
        },function(){
            timer = setInterval(runn, 3000);
            // $(".bannerBtn a").fadeOut(600);
        });
        prev.click(function(){
            left();
            run();
        });
        next.click(function(){
            right();
            run();
        });
    })
};
