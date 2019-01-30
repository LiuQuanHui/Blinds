function buttonOn(e){
	var change = document.getElementById(e);
	change.style.background="#F08080";
	
}
function buttonOut(e){
	var change=document.getElementById(e);
	change.style.background="#F0FFFF";
}

function loginCheck_account(){
	var account_txt = document.getElementById("username").value;
	if(account_txt==""){
		alert("用户不能为空");
	}
}
function loginCheck_password(){
	var pass_txt = document.getElementById("password").value;
	if(pass_txt==""){
		alert("密码不能为空");
	}
	else if(pass_txt.length<6){
		alert("密码位数有误，请重新输入");
		document.getElementById("password").value="";
	}
	else{
	}
}

function registerCheck_regUsername(){
	var regUsername_txt = document.getElementById("reg_username").value;
	if(regUsername_txt==""){
		document.getElementById("user_reg_advise").innerHTML="*用户名不能为空";
	}else if(regUsername_txt.length<3){
		document.getElementById("user_reg_advise").innerHTML="*至少3位字母、数字或汉字";
	}else{
		document.getElementById("user_reg_advise").innerHTML="";
	}
	
}
function registerCheck_regTelphone(){
	var regTelphone_txt = document.getElementById("reg_telphone").value;
	var phoneReg = /^1[3-578]\d{9}$/;
	if(regTelphone_txt==""){
		document.getElementById("telphone_reg_advise").innerHTML="*手机号不能为空";
	}else if(regTelphone_txt.length!=11){
		document.getElementById("telphone_reg_advise").innerHTML="*手机号位数不对";
	}else if(!phoneReg.test(regTelphone_txt)){
		document.getElementById("telphone_reg_advise").innerHTML="*手机号输入有误";
	}else{
		document.getElementById(" ").innerHTML="";

	}
	
}
function registerCheck_regPassword(){
	var regPassword_txt = document.getElementById("reg_password").value;
	if(regPassword_txt==""){
		document.getElementById("pass_reg_advise").innerHTML="*密码不能为空";
	}else if(regPassword_txt.length<6){
		document.getElementById("pass_reg_advise").innerHTML="*密码至少为6位";
	}else{
		document.getElementById("pass_reg_advise").innerHTML="";
	}
}
function registerCheck_reg_rePassword(){
	var reg_rePassword_txt =document.getElementById("reg_repassword").value;
	var regPassword_txt = document.getElementById("reg_password").value;
	if(reg_rePassword_txt==""){
		document.getElementById("repass_reg_advise").innerHTML="*再次输入密码不能为空";
	}else if(reg_rePassword_txt!=regPassword_txt){
		document.getElementById("repass_reg_advise").innerHTML="*两次输入密码不一致";
	}else{
		document.getElementById("repass_reg_advise").innerHTML="";
	}
}
function registerCheck_regEmail(){
	var regEmail_txt =document.getElementById("reg_email").value;
	var mailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	if(regEmail_txt==""){
		document.getElementById("email_reg_advise").innerHTML="*邮箱不能为空";
	}else if(!mailReg.test(regEmail_txt)){
		document.getElementById("email_reg_advise").innerHTML="*邮箱输入格式有误";
	}else{
		document.getElementById("email_reg_advise").innerHTML="";
	}
}
