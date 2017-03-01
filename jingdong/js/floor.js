$(function(){

	// 热门轮播
	var w = 339;
	var l = 0;
	var timer = null;
	var len1 = $('.ml-panel').length * 2;
	
	$('.floor .ml-main').append($('.floor .ml-main').html()).css({
		'width':len1 * w,
		'left': -len1 * w / 2
	});

	timer = setInterval(run1,2000);

	function run1(){
		$('.floor .ml-next').trigger('click');
	}

	function lunbo(l){
		if($('.floor .ml-main').is(':animated')){
			return;
		}

		$('.floor .ml-main').animate({
			'left': l
		},500,function(){
			if(l == 0){
				$('.floor .ml-main').css('left',-len1 * w / 2);
			}else if(l == (1-len1) * w){
				$('.floor .ml-main').css('left',(1-len1 / 2) * w);
			}
		});
	}

	$('.m-left').hover(
		function(){
			clearInterval(timer);
			$('.floor .ml-page').show();
		},
		function(){
			timer = setInterval(run1,2000);
			$('.floor .ml-page').hide();
		}
	);

	$('.floor .ml-prev').click(function(){
		l = parseInt($('.floor .ml-main').css('left')) + w;
		lunbo(l);
	});

	$('.floor .ml-next').click(function(){
		l = parseInt($('.floor .ml-main').css('left')) - w;
		lunbo(l);
	});

	var sy = 0;
	$('.floor .tab-item').mouseover(function(){
		sy = $(this).index();
		$('.floor .main').eq(sy).show().siblings('.main').hide();
		$(this).css('border-bottom','2px solid #fff').siblings('.tab-item').css('border-bottom','none');
		$(this).children('span').hide();
		$(this).children('a').css({
			'height':'33px',
			'position':'absolute',
			'border-left':'1px solid #c81623',
			'border-right':'1px solid #c81623',
			'border-top':'3px solid #c81623',
			'top':'-1px',
			'left':'-1px',
			'line-height':'30px',
			'color':'#c81623',
			'text-indent':'1px'
		});
		$(this).siblings('.tab-item').children('a').css({
			'border-left':'none',
			'border-right':'none',
			'border-top':'none',
			'color':'#666',
			'top':0,
			'left':0
		});
	}).mouseout(function(){
		$(this).children('span').show();
	});

})