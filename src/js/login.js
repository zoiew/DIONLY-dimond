//登录表单正则验证
$(function(){
	$('#loginBtn').on('click',function(){
	fnLogin();		
	function fnLogin(){
		var omobieNum = $('#mobieNum');
		var oUpass = $('#userPassword');
		var oError1 = $('.tishi1');
		var oError2 = $('.tishi2');
		
		var sUname = omobieNum.val().replace(/ /g, "");
		var sUpass = oUpass.val();
		var regPass = /^[\w]{6,20}$/;//密码只能包含数字、字母和下划线
		var regName = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;//13*/14*/15*/18*    11位		
		
		//验证手机
			if(sUname.length==0){
				oError1.html("手机号不能为空！");
			}else if(!regName.test(sUname)){
				 oError1.html("手机号格式有误！");
			}else {
				oError1.html("");
			}
		
		//验证密码
		if(sUpass.length==0){
			oError2.html("密码不能为空！");
		}else if(!regPass.test(sUpass)){
			oError2.html("密码长度为6-20位,只能包含数字、字母和下划线");
		}else {
			oError2.html("");
		}
		
	}	
})
})