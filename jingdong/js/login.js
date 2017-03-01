$(function(){
	
	var reg_name = /^[0-9a-zA-Z]{6,16}$/;
	var reg_pwd = /^\w{6,20}$/;
	var nameBool = false;
	var pwdBool = false;

	function setCookie(name,content,date){
		var d = new Date();
		d.setDate(d.getDate() + date);
		document.cookie = name + '=' + content +';expires=' + d.toUTCString();
	}
	function getCookie(name){
		var str = document.cookie;
		var str_arr = str.split('; ');
		for (var i = 0;i<str_arr.length;i++){
			var arr = str_arr[i].split('=');
			var username = arr[0];
			var content = arr[1];
			if(username == name){
				return content;
			}
		}
	}
	window.onload = function(){
		if(getCookie('username')){
			$('#loginname').val(getCookie('username'));
			$('#loginpsw').val(getCookie('password'));
			nameBool = $('#loginname').val();
			pwdBool = $('#loginpsw').val();
		}
	}

	$('#loginname').focus(function(){
		$('.name-msg').show().css('color','gray').text('*请输入6-16位字母、数字');
	}).blur(function(){
		var str = $(this).val();
		if(str == ""){
			$('.name-msg').css('color','red').text('*请输入用户名');
		}else if(reg_name.test(str)){
			$('.name-msg').css('color','green').text('√用户名格式正确');
			nameBool = str;
		}else{
			$('.name-msg').css('color','red').text('×用户名格式错误');
		}
	});

	$('#loginpsw').focus(function(){
		$('.pwd-msg').show().css('color','gray').text('*请输入6-20位字母、数字、下划线');
	}).blur(function(){
		var str = $(this).val();
		if(str == ""){
			$('.pwd-msg').css('color','red').text('*请输入密码');
		}else if(reg_pwd.test(str)){
			$('.pwd-msg').css('color','green').text('√密码格式正确');
			pwdBool = str;
		}else{
			$('.pwd-msg').css('color','red').text('x密码格式错误');
		}
	});

	$('#loginsubmit').click(function(){
		$('.btn-msg').hide().text('');
		if(nameBool && pwdBool){
			$.get('js/login.php',function(msg){
				for(var i in msg){
					if(nameBool == msg[i]['username'] && pwdBool == msg[i]['password']){
						if($('input:checked').length == 1){
							if(!getCookie('username')){
								setCookie('username',$('#loginname').val(),7);
								setCookie('password',$('#loginpsw').val(),7);
							}
						}
						location = 'index.html';
						break;
					}else{
						$('.btn-msg').show().css('color','red').text('x用户名或密码错误');
						return false;
					}
				}
			},'json')
		}else{
			$('.btn-msg').show().css('color','red').text('x用户名或密码格式错误');
		}
	});

	$('.login-tab-l a').click(function(){
		$('.login-tab-r a').removeClass('checked');
		$(this).addClass('checked');
		$('.login-box,#lg-coagent').css('display','none');
		$('.qrcode-login,#qrCoagent').css('display','block');
	});
	$('.login-tab-r a').click(function(){
		$('.login-tab-l a').removeClass('checked');
		$(this).addClass('checked');
		$('.login-box,#lg-coagent').css('display','block');
		$('.qrcode-login,#qrCoagent').css('display','none');
	});

	$('.qrcode-main').hover(
		function(){
			$(':animated').stop(true,true);
			$('.qrcode-img').animate({
				left:0
			},500,function(){
				$(this).next().css('display','block');
			})
		},
		function(){
			$(':animated').stop(true,true);
			$('.qrcode-img').next().css('display','none').end().animate({
				left:64
			},500)
		}
	);
})