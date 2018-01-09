package com.zsw.action;

import com.opensymphony.xwork2.ActionSupport;

public class HelloWorldAction extends ActionSupport {

	private String message = "";
	
	public String getMessage(){
		return message;
	}

	@Override
	public String execute() throws Exception {
		message = "Hello World!!!";
		return SUCCESS;
	}
}
