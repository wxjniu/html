// JavaScript Document
$(document).ready(function () {
	/**
	 *头部导航搜索框 
	 */
	$("#searchBox").click(function (e) {
		e.stopPropagation();
		$(this).addClass('active');
		$("#nav").hide();
	});
	$(document).click(function(){
		$("#searchBox").removeClass('active');
		$("#nav").show(300);
	});
	
	
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




















$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 40) {
			$(".idx_top_fixed").show();
			$(".idx_top").hide();
			$(".header").css("position","fixed");
		} else {
			$(".idx_top_fixed").hide();
			$(".idx_top").show();
			$(".header").css("position","relative");
		}
	});
});

//头部导航
$(document).ready(function () {
	$(".header .rightnav_min .ico").click(function(){
		if($(".header .rightnav_min .list_box").css("display")=="none"){
			$(".header .rightnav_min .list_box").show();
		}else{
			$(".header .rightnav_min .list_box").hide();
		}
	});
	
	
});

//右边浮动
$(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".right_fixed .gotoback").show();
            } else {
                $(".right_fixed .gotoback").hide();
            }
			
        });
		$(".gotoback").click(function () {
            $("html,body").animate({scrollTop: 0}, 200);
        });
		
		$(".right_fixed .list_box .yuyue").hover(function(){
			$(this).find(".cx_box").css("display","block")
		},function(){
			// $(this).find(".cx_box").css("display","none")
		});
		$(".right_fixed .list_box .yuyue .close").click(function(){
			$(this).parent(".cx_box").css("display","none")
		});
		$(".right_fixed .list_box .wx").hover(function(){
			$(this).find(".cx_box").css("display","block")
		},function(){
			$(this).find(".cx_box").css("display","none")
		});
});


//查看演示
$(document).ready(function() {
    $(".see_demo").click(function(){
		if($(".fix-nav-demo").css("display")=="block"){
			$(".fix-nav-demo").slideUp();
		}else{
			$(".fix-nav-demo").slideDown();
		}
	});
});



//缓慢出现JS
(function($){
	function scrollShowCell(o){
			if(!(o instanceof Object)) var o={};
			var delayTime = o.delayTime || 1000,
				distance = o.distance || 100;
			return this.each(function(index){
				var $this = $(this);
				function showAnimate(){
					$this.addClass('animated');
				}
				function hideAnimate(){
					$this.removeClass('animated');
				}
				function exec(){
					
				var offset_top = $this.offset().top,
					cur_bottom = 0;
					
					var fixpade=0;
					var w=window.innerWidth;
					if(w<768){
					  fixpade=50;	
						}else{
					  fixpade=120;		
					}
					cur_bottom = $(window).scrollTop() + $(window).height();
					if(offset_top+fixpade<= cur_bottom){
						showAnimate();
					}else{
						hideAnimate();
					}
				}
				exec();
				$(window).on('scroll resize load',function(){
					exec();
				})
			})
		}
		$.fn.scrollShowCell = scrollShowCell;
	// JavaScript Document
}(jQuery));

$(function(){
	$(".partblock").scrollShowCell({distance:200});
});


//详情页tab
$(window).on('resize load',function () {
	var w=window.innerWidth;
	if (w<1000) {
		$('.zy_tab ul li').width(100 / $('.zy_tab ul li').length + '%');
	}else{
		$('.zy_tab ul li').width("auto");
	}
});



//cookie
var Cookie = window.Cookie = window.Cookie || {};
//验证字符串是否合法的cookie键名
Cookie._valid_key = function(key){
    return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
}
Cookie.set = function(key, value, expire){
	if(Cookie._valid_key(key)){
		var a = key + "=" + escape(value);
		if(typeof(expire) != 'undefined'){
			var date = new Date();
			expire = parseInt(expire,10);
			date.setTime(date.getTime + expire*1000);
			a += "; expires="+date.toGMTString();
		}
		document.cookie = a;
	}
	return null;
};
Cookie.get = function(key){
	if(Cookie._valid_key(key)){
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|\x24)"),
            result = reg.exec(document.cookie);            
        if(result){
            return result[2] || null;
        }
	}
	return null;
};
Cookie.remove = function(key){
	document.cookie = key+"=;expires="+(new Date(0)).toGMTString();
};






