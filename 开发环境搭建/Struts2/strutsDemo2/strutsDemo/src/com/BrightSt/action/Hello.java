package com.BrightSt.action;

import com.opensymphony.xwork2.ActionSupport;

/**
 * 继承ActionSupport
 * @Title: Hello.java  
 * @Package com.BrightSt.action  
 * @Description:   
 * @author BrightSt    
 * @date 2017年2月19日 下午8:06:04  
 * @version V1.0
 */
public class Hello extends ActionSupport{

	/*
	 * 重写execute方法，默认会执行此方法
	 * @see com.opensymphony.xwork2.ActionSupport#execute()
	 */
	@Override
	public String execute() throws Exception {
		System.out.println("执行hello");
		return SUCCESS;
	}
	
}
