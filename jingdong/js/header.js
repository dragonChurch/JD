$(function(){


	$('#ttbar-mycity').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-mycity s').css('top','1px');
			$('#ttbar-mycity .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-mycity s').css('top','-7px');
			$('#ttbar-mycity .dd').hide();
		}
	)

	$('#ttbar-mycity .aa').hover(
		function(){
			$(this).css('background','#f1f1f1');
		},
		function(){
			$(this).css('background','#fff');
		}
	)


	$('#ttbar-myjd').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-myjd s').css('top','1px');
			$('#ttbar-myjd .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-myjd s').css('top','-7px');
			$('#ttbar-myjd .dd').hide();
		}
	)

	$('#ttbar-apps').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-apps s').css('top','1px');
			$('#ttbar-apps .ci-left').css('background-position','0 -25px');
			$('#ttbar-apps .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-apps s').css('top','-7px');
			$('#ttbar-apps .ci-left').css('background-position','0 0');
			$('#ttbar-apps .dd').hide();
		}
	)

	$('#ttbar-atte').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-atte s').css('top','1px');
			$('#ttbar-atte .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-atte s').css('top','-7px');
			$('#ttbar-atte .dd').hide();
		}
	)

	$('#ttbar-serv').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-serv s').css('top','1px');
			$('#ttbar-serv .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-serv s').css('top','-7px');
			$('#ttbar-serv .dd').hide();
		}
	)

	$('#ttbar-navs').hover(
		function(){
			$(this).css('background','#fff');
			$('#ttbar-navs s').css('top','1px');
			$('#ttbar-navs .dd').show();
		},
		function(){
			$(this).css('background','#f1f1f1');
			$('#ttbar-navs s').css('top','-7px');
			$('#ttbar-navs .dd').hide();
		}
	)

	$('#settleup').hover(
		function(){
			$('#settleup .dorpdown-layer').css({
				'right':0,
				'width':'308px'
			}).show();
			$('#settleup .dorpdown-layer,#settleup .cw-icon').css({
				'background':'#fff',
				'border':'1px solid #ddd',
				'box-shadow':'0 0 5px rgba(0,0,0,.2)'
			});
		},
		function(){
			$('#settleup .dorpdown-layer').hide();
			$('#settleup .cw-icon').css({
				'background':'#f9f9f9',
				'border':'1px solid #dfdfdf',
				'box-shadow':'none'
			});
		}
	)









})