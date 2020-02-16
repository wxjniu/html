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
