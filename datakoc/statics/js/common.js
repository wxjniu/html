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

//8888888888
$(document).ready(function() {
    //快捷导航
	$(".fast-nav li").click(function(){
		var index 	= $(this).index(),
			_this 	= $(".action").eq(index),
			sc_top	= _this.offset().top-100,
			t   	= 300;
		if( index == 2){
			sc_top = sc_top+0;
		}else if(index == 3){
			sc_top = sc_top+0;
		}else if(index == 9){
			sc_top = sc_top+0;
		}
		$("html,body").animate({
			scrollTop:sc_top
		},t);
	});
	var arr	= [];
	$(".action").each(function(i){
		arr[i] = $(".action").eq(i).offset().top;
	});
	$(window).resize(function(){
		$(".action").each(function(i){
			arr[i] = $(".action").eq(i).offset().top;
		});
	})
	$(window).scroll(function(){
		var top = $(document).scrollTop(),
			t   = 100;
		for (var i = 0 ; i < arr.length; i++) {
			if(top >= arr[i]-300 && top < arr[i] + 150){
				$(".fast-nav li").removeClass("active");
				$(".fast-nav li").eq(i).addClass("active");
			}
		};
	});

	var fast_nav_height = $(".fast-nav").height();
	var window_height	= $(window).height();
	$(".fast-nav").css({
		top:(window_height-fast_nav_height)/2
	})
	$(window).resize(function(){
		fast_nav_height = $(".fast-nav").height();
		window_height   = $(window).height();
		$(".fast-nav").stop(true,false).animate({
			top:(window_height-fast_nav_height)/2
		},300);
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

//Slider插件调用区域
$(function(){
	
		//首页客户中心
		+function () {
		var flag=0,
		obj=$('.idx_case_box').slick({
		  infinite: false,
		  speed: 300,
		  rows:2,
		  arrows:false,
		  slidesToShow:5,
		  slidesToScroll: 1
		});
		$(window).on('resize load',function () {
			var w=window.innerWidth;
			if (w<1000&&w>=720&&flag!=1) {
				console.log(1)
				flag=1;
				$('.idx_case_box').slick('unslick');
				obj.slick({
				  infinite: false,
				  speed: 300,
				  rows:2,
				  dots: false,
				  arrows:false,
				  slidesToShow: 3,
				  slidesToScroll: 3
				});
			}
			else if(w<720&&w>=600&&flag!=2) {
				flag=2;
				$('.idx_case_box').slick('unslick');
				obj.slick({
					arrows:false,
					dots: false,
					rows:2,
					slidesToShow: 2,
					slidesToScroll: 2
				});
			}
			else if(w<600&&flag!=3) {
				flag=3;
				$('.idx_case_box').slick('unslick');
				obj.slick({
					arrows:false,
					dots: false,
					rows:1,
					slidesToShow: 2,
					slidesToScroll: 2
				});
			}
			else if(w>=1000&&flag!=0) {
				flag=0;
				obj.slick('unslick');
				obj.slick({
				  infinite: false,
				  speed: 300,
				  rows:2,
				  arrows:false,
				  slidesToShow: 5,
				  slidesToScroll: 1
				});
			}
			
		});
	}();
	
	
	
		//新闻切换
	  $('.idx_news_box').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			arrows: false,
	
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 3,
			dots: false,
			arrows: false,
	
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 3,
			dots: false,
			arrows: false,
		  }
		}
	  ]
	});
	
	//江湖学院-江湖学院-热门文章切换
	$('.ijh_colg_news').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: false,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: false,
			arrows: false,
	
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
	
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		  }
		}
	  ]
	});

	

});



/*发展历程tab切换*/
(function ($) {
  $.fn.zTab=function(options) {
   var dft={
      tabnav:'.tabnav',          //导航按钮元素
      tabcon:'.tabcon',          //被切换元素
      trigger:'mouseenter', //触发方式，默认点击触发
      curName:'current', //给高亮设置类名
      removeMod:null,     //改为触发时移除导航的类名
      cur:0,                //初始高亮的顺序，默认第一个
      delay:0,              //触发延时
      auto:null,           //是否自动改变
      animation:null,       //动画效果
      callback : null ,      //回调
      load:null,             //首次加载时执行
      cssmod: false
    };

    var ops=$.extend(dft,options);
    return this.each(function () {
      var self=$(this),      
      nav=self.find(ops.tabnav),
      con=self.find(ops.tabcon),
      navBtn=nav.children(),
      num=navBtn.length,
      timer=null,
      timer2=null,
      isInit=false;

      //初始化执行
      init();

      navBtn.on(ops.trigger,function () {
        ops.cur=$(this).index();
        clearTimeout(timer);
        clearTimeout(timer2);
        timer=setTimeout(run,ops.delay); 
        return false;
      });

      navBtn.on('mouseleave',function () {
        clearTimeout(timer);
        if (ops.auto) {
          timer2=setInterval(auto,ops.auto.interval);
        }
      });
      //
      function init () {
        ops.trigger=='c'?ops.trigger='click':ops.trigger='mouseenter'; //导航触发方式判定
        run();
        if (ops.auto) {
          timer2=setInterval(auto,ops.auto.interval);
        }
        else {
          run(); 
        }

        if(ops.load){
          ops.load(self,ops.cur,num);
        }
        
        isInit=true;        
      }
      //
      function run () {
        if (ops.removeMod) {
          navBtn.addClass(ops.curName).eq(ops.cur).removeClass(ops.curName); //
        }
        else {
          navBtn.removeClass(ops.curName).eq(ops.cur).addClass(ops.curName); //
        }
        
        if (ops.animation) {
         switch(ops.animation.type) {
            // 结构必须符合要求，目前还不完善
            case 'slideY':
            var conH=con.outerHeight();
            if (isInit) {
              con.parent().animate({marginTop:-conH*ops.cur},{duration:400,queue:false})
            }
            else {
              con.parent().height(conH*num);
            }
            break;
            case 'slideX' :
            var conW=con.outerWidth();
            if (isInit) {
              con.parent().animate({marginLeft:-conW*ops.cur},{duration:400,queue:false})
            }
            else {
              con.parent().width(conW*num);
            } 
            break;               
          }
        }
        else {
          if (ops.cssmod) {
            con.eq(ops.cur).addClass(ops.cssmod).siblings(ops.tabcon).removeClass(ops.cssmod); //
           }
           else {
            con.hide().eq(ops.cur).show(); //
           }
         } 
         if(ops.callback&&isInit){
          ops.callback(self,ops.cur,num);
        }
      }
      //
      function auto () {
        ops.cur+=1;
        if (ops.cur==num) {ops.cur=0;}
        run();
      }

    });
}   
})(jQuery);

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






