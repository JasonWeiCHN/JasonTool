/**
  * 文件说明
  * @Description:扩展说明
  * @Copyright: 2015 dreamtech.com.cn Inc. All right reserved
  * @Version: V6.0
  */
package com.feizi.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

/**  
 * @Author: feizi
 * @Date: 2015年5月6日 上午10:27:19 
 * @ModifyUser: feizi
 * @ModifyDate: 2015年5月6日 上午10:27:19 
 * @Version:V6.0
 */
public class HelloController implements Controller {

	/**
	 * 方法说明
	 * @Discription:扩展说明
	 * @Author: feizi
	 * @Date: 2015年5月6日 上午10:27:20
	 * @ModifyUser：feizi
	 * @ModifyDate: 2015年5月6日 上午10:27:20
	 * @see org.springframework.web.servlet.mvc.Controller#handleRequest(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public ModelAndView handleRequest(HttpServletRequest arg0,
			HttpServletResponse arg1) throws Exception {
		
		System.out.println("==========================Hello World!=========================");
		//实际上就是跳转到hello.jsp页面
		return new ModelAndView("/hello");
	}

}
