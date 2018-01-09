package com.zsw.action;

public class Login {
	
	private String userName;
	private String password;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String execute(){
		if(userName.equals("zsw") && password.equals("123")){
			return "success";
		}else{
			return "fail";
		}
	}
}
