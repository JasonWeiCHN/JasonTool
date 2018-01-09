<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>登陆页面</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
	<form action="login.action">
	  	<hr>
	    <div style="text-align:center">登陆界面</div>
	    用户名：<input name="userName" /> <br/>
	    密  码：<input type="password" name="password" /><br/>
	    <input type="submit" name="submit" />
	    <input type="reset" />
	</form>
  </body>
</html>
