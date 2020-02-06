//首页数字增长
$.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
        }, options);
        
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;
        
        // references & variables that will change with each update
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        // if an existing interval can be found, clear it first
        if (data.interval) {
            clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        // initialize the element with the starting value
        render(value);
        
        function updateTimer() {
            value += increment;
            loopCount++;
            
            render(value);
            
            if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }
            
            if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;
                
                if (typeof(settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value);
                }
            }
        }
        
        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
    return value.toFixed(settings.decimals);
}



// custom formatting example
$('#count-number').data('countToOptions', {
formatter: function (value, options) {
  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
}
});

// start all the timers
// $('.timer').each(count);  

function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
}

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
        timer= setInterval(runn, 6000);
        $(objName).hover(function(){
            clearInterval(timer);
            // $(".bannerBtn a").fadeIn(600);
        },function(){
            timer = setInterval(runn, 6000);
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
}


/**********/
$(document).ready(function () {
	var idx_num_h = $(".caseNum").offset().top;
	$(window).scroll(function () {
		//数字增长
		if ($(window).scrollTop() > (idx_num_h - 200)) {
			$('.timer').each(count);
		};
		/**
		 * 顶部导航
		 */
		if($(window).scrollTop() > 20) {
			$("#pageTopBox").addClass("white");
			$("#logo").attr("src","statics/images/logo02@2x.png");
		}else{
			$("#pageTopBox").removeClass("white");
			$("#logo").attr("src","statics/images/logo@2x.png");
		}
	});
	
	/**
	 * 表单
	 */
	$("#form-style .inp").click(function () {
		if($("#form-style .list").css("display") == "none"){
			$("#form-style .ico").removeClass("down");
		}else{
			$("#form-style .ico").addClass("down");
		}
		$(this).parent().find(".list").slideToggle();
	});
	$("#form-style .list span").click(function () {
		$(this).addClass("on").siblings().removeClass("on");
		$(this).parents("#form-style").find(".inp").val($(this).text());
		$(this).parent().slideUp();
		$("#form-style .ico").addClass("down");
	});
	
});