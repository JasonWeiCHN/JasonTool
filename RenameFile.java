package com.jason.util;

import java.io.File;

/**
 * ����������ָ��Ŀ¼���ļ�������
 * @author blight
 *
 */
public class RenameFile {
    public static void main(String args[]) {
        System.out.println("begin");
        File fl = new File("D://jasonPic");  // ����д�Ϸ��滻���ļ���·��,ע��ʹ��˫б��
        String[] files = fl.list();
        File f = null;
        String filename = "";
        int i = 0;
        
        for(String file:files){
         /*
          * ע��,����һ��Ҫд��File(fl,file)
          * ���д��File(file)���в�ͨ��,
          * һ��Ҫȫ·��
          */
           f = new File(fl,file); 
           //filename = f.getName();
           filename="pic_"+i;
           System.out.println(filename);
           i++;
           //System.out.println(filename);
           /*
            * ������Է���ʹ��replace�滻,
            * ��ȻҲ����ʹ��������ʽ���滻��
            */
           f.renameTo(new File(fl.getAbsolutePath()+"//"+filename+".jpg"));
        }
 }
}
