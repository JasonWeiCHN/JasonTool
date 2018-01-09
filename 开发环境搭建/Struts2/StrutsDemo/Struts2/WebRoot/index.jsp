<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>Struts2计算器</title>
	</head>
<script type="text/javascript">
function mul(){
	document.aa.action="mul.action";
}
</script>
	<body>
		<form action="add.action" name="aa"> 
			值&nbsp;&nbsp; 1： 
			<input type="text" name="op1" />
			<br /> 
			值&nbsp;&nbsp; 2： 
			<input type="text" name="op2" />
			<br>
			<input type="submit" value="加法"><input type="submit" value="乘法" onclick="mul()">
		</form><br /><br></body>
</html>