$(function(){

	var reg_name = /^[0-9a-zA-Z]{6,16}$/;
	var reg_pwd = /^\w{6,20}$/;
	var reg_phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]||18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var reg_email = /\w+@\w+(\.com|\.cn|\.net|\.org){1,3}/;
	var nameBool = false;
	var pwdBool = false;
	var pwdrBool = false;
	var phoneBool = false;
	var emailBool = false;

	$('#form-account').focus(function(){
		$('#name-span').css('color','#ccc').text('* 支持字母、数字组合，6-16个字符');
	}).blur(function(){
		var str = $(this).val();
		if(str == ''){
			$('#name-span').text('');
		}else if(reg_name.test(str)){
			$.get('js/zhuce.php?username='+str,function(msg){
				if(msg == 1){
					$('#name-span').css('color','red').text('x 用户名已存在');
				}else{
					$('#name-span').css('color','green').text('√ 用户名可用');
					nameBool = str;
				}
			})
		}else{
			$('#name-span').css('color','red').text('x 格式错误');
		}
	});


	$('#form-pwd').focus(function(){
		$('#pwd-span').css('color','#ccc').text('* 建议使用数字、字母和下划线两种及以上的组合，6-20个字符');
	}).blur(function(){
		var str = $(this).val();
		if(str == ''){
			$('#pwd-span').text('');
		}else if(reg_pwd.test(str)){
			$('#pwd-span').css('color','green').text('√ 下一步');
			pwdBool = str;
		}else{
			$('#pwd-span').css('color','red').text('x 密码格式错误');
		}
	});

	$('#form-equalTopwd').focus(function(){
		$('#pwdr-span').css('color','#ccc').text('* 请再次输入密码');
	}).blur(function(){
		var str = $(this).val();
		if(str == ''){
			$('#pwdr-span').text('');
		}else if(str == pwdBool){
			$('#pwdr-span').css('color','green').text('√ 下一步');
			pwdrBool = str;
		}else{
			$('#pwdr-span').css('color','red').text('x 两次密码输入不一致');
		}
	});

	$('#form-phone').focus(function(){
		$('#phone-span').css('color','#ccc').text('* 可使用该手机找回密码');
	}).blur(function(){
		var str = $(this).val();
		if(str == ''){
			$('#phone-span').text('');
		}else if(reg_phone.test(str)){
			$('#phone-span').css('color','green').text('√ 下一步');
			phoneBool = str;
		}else{
			$('#phone-span').css('color','red').text('x 格式错误');
		}
	});


	$('#form-email').focus(function(){
		$('#email-span').css('color','#ccc').text('* 可使用该邮箱找回密码');
	}).blur(function(){
		var str = $(this).val();
		if(str == ''){
			$('#email-span').text('');
		}else if(reg_email.test(str)){
			$('#email-span').css('color','green').text('√ 下一步');
			emailBool = str;
		}else{
			$('#email-span').css('color','red').text('x 格式错误');
		}
	});


	$('input[type="checkbox"]').change(function(){
		if($('input:checked').length == 0){
			$('.btn-register').attr('disabled','disabled').css('background','gray');
		}else{
			$('.btn-register').prop('disabled',false).css('background','#e22');
		}
	});

	$('input').change(function(){
		$('#agreen-span').text('');
	});

	$('.btn-register').click(function(){
		if(nameBool && pwdBool && pwdrBool && phoneBool && emailBool){
			$('#agreen-span').css('color','green').text('√ 注册成功，3秒后跳转到登录页面······');
			setTimeout(function(){
				window.location.replace('login.html');
			},3000);
		}else{
			$('#agreen-span').css('color','red').text('x 信息输入错误，注册失败，请重新输入');
			return false;
		}
	});

})