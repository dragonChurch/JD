$(function(){

	var index = 0;
	var len = $('.lunbo-img>li').length;
	var xh;
	//轮播
	function run(){
		xh = setInterval(function(){
			$('.lunbo-img>li').eq(index).animate({
				left:"-730"
			},1500,function(){
				$(this).css('left','730px');
			});
			$('.lunbo-num>li').eq(index).css('background','#666');
			index++;
			if(index == len){
				index = 0;
			}
			$('.lunbo-img>li').eq(index).css('left','730px').animate({
				left:"0"
			},1500);
			$('.lunbo-num>li').eq(index).css('background','#b61b1f');
		},3000);
	}
	run();
	// 鼠标移入移出
	$('.lunbo').mouseover(function(){
		clearInterval(xh);
		$('#btn1,#btn2').show();
	});
	$('.lunbo').mouseout(function(){
		run();
		$('#btn1,#btn2').hide();
	});
	// 鼠标移入数字，显示对应的图片
	$('.lunbo-num>li').mouseover(function(){
		$('.lunbo-img li:animated').stop(true,true);
		// 改变鼠标样式
		$('.lunbo-num>li').css('cursor','default');
		// 判断移入的数字和当前数字的大小，确定滑动方向
		if($(this).index() > index){
			$('.lunbo-img>li').eq(index).animate({
				left:"-730"
			},1500,function(){
				$(this).css('left','730px');
			});
			$('.lunbo-num>li').eq(index).css('background','#666');
			index = $(this).index();
			$('.lunbo-img>li').eq(index).css('left','730px').animate({
				left:"0"
			},1500);
			$('.lunbo-num>li').eq(index).css('background','#b61b1f');
		}else if($(this).index() < index){
			$('.lunbo-img>li').eq(index).animate({
				left:"730"
			},1500,function(){
				$(this).css('left','-730px');
			});
			$('.lunbo-num>li').eq(index).css('background','#666');
			index = $(this).index();
			$('.lunbo-img>li').eq(index).css('left','-730px').animate({
				left:"0"
			},1500);
			$('.lunbo-num>li').eq(index).css('background','#b61b1f');
		}
	});
	// 下一张
	$('#btn2').click(function(){
		$('.lunbo-img li:animated').stop(true,true);
		$('.lunbo-img>li').eq(index).animate({
			left:"-730"
		},1500,function(){
			$(this).css('left','730px');
		});
		$('.lunbo-num>li').eq(index).css('background','#666');
		index++;
		if(index == len){
			index = 0;
		}
		$('.lunbo-img>li').eq(index).css('left','730px').animate({
			left:"0"
		},1500);
		$('.lunbo-num>li').eq(index).css('background','#b61b1f');
	});
	// 上一张
	$('#btn1').click(function(){
		$('.lunbo-img li:animated').stop(true,true);
		$('.lunbo-img>li').eq(index).animate({
			left:"730"
		},1500,function(){
			$(this).css('left','-730px');
		});
		$('.lunbo-num>li').eq(index).css('background','#666');
		index--;
		if(index == -1){
			index = len-1;
		}
		$('.lunbo-img>li').eq(index).css('left','-730px').animate({
			left:"0"
		},1500);
		$('.lunbo-num>li').eq(index).css('background','#b61b1f');
	});

//左侧边栏
	var j = 0;
	$('.dd-inner li').mouseover(function(){
			j = $(this).index();
			$(this).css({
				'background':'#f7f7f7',
				'color':'#B61D1D'
			});
			$(this).children('.item').children('h3').children('a').css('color','#B61D1D');
			$('.dd-inner .item-sub').eq(j).show();
		}).mouseout(function(){
			j = $(this).index();
			$(this).css({
				'background':'#c81623',
				'color':'#fff'
			});
			$(this).children('.item').children('h3').children('a').css('color','#fff');
			$('.dd-inner .item-sub').eq(j).hide();
		});

// 搜索栏
	var Bool = true;
	$(window).scroll(function(){
		var juli = $('#search .form').offset().top - $(document).scrollTop();
		if(juli < 0){
			if(Bool){
				Bool = false;
				$('#search .form').addClass('fixed');
			}
			Bool = true;
		}else{
			if(Bool){
				Bool = false;
				$('#search .form').removeClass('fixed');
			}
			Bool = true;
		}			
	});
})