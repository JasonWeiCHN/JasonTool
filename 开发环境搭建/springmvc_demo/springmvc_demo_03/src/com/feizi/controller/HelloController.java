/**
  * 文件说明
  * @Description:扩展说明
  * @Copyright: 2015 dreamtech.com.cn Inc. All right reserved
  * @Version: V6.0
  */
package com.feizi.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

/**  
 * @Author: feizi
 * @Date: 2015年5月7日 上午9:10:24 
 * @ModifyUser: feizi
 * @ModifyDate: 2015年5月7日 上午9:10:24 
 * @Version:V6.0
 */
public class HelloController implements Controller {

	/**
	 * 方法说明
	 * @Discription:扩展说明
	 * @Author: feizi
	 * @Date: 2015年5月7日 上午9:10:24
	 * @ModifyUser：feizi
	 * @ModifyDate: 2015年5月7日 上午9:10:24
	 * @see org.springframework.web.servlet.mvc.Controller#handleRequest(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public ModelAndView handleRequest(
			HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		
		System.out.println("=========================Hello World!This is the second demo...==============================");
		/*String firstParam = "第一个字符串参数";
		return new ModelAndView("/hello", "prm", firstParam);//字符串用
*/		
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("prm1", "map中的第一个");
        map.put("prm2", "map中的第二个");
        map.put("prm3", "map中的第三个");
        return new ModelAndView("/hello", "prm", map);
	}

}
