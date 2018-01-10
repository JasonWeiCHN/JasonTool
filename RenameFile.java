package com.jason.util;

import java.io.File;

/**
 * 批量重命名指定目录下文件的名字
 * @author blight
 *
 */
public class RenameFile {
    public static void main(String args[]) {
        System.out.println("begin");
        File fl = new File("D://jasonPic");  // 这里写上发替换的文件夹路径,注意使用双斜杠
        String[] files = fl.list();
        File f = null;
        String filename = "";
        int i = 0;
        
        for(String file:files){
         /*
          * 注意,这里一定要写成File(fl,file)
          * 如果写成File(file)是行不通的,
          * 一定要全路径
          */
           f = new File(fl,file); 
           //filename = f.getName();
           filename="pic_"+i;
           System.out.println(filename);
           i++;
           //System.out.println(filename);
           /*
            * 这里可以反复使用replace替换,
            * 当然也可以使用正则表达式来替换了
            */
           f.renameTo(new File(fl.getAbsolutePath()+"//"+filename+".jpg"));
        }
 }
}
