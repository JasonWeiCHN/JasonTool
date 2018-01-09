package action;

import com.opensymphony.xwork2.ActionSupport;

public class CalculatorAction extends ActionSupport {

    private int op1;
    private int op2;
    private int result;
    public int getOp1() {
        return op1;
    }
    public void setOp1(int op1) {
        this.op1 = op1;
    }
    public int getOp2() {
        return op2;
    }
    public void setOp2(int op2) {
        this.op2 = op2;
    }
    public int getResult() {
        return result;
    }
    public void setResult(int result) {
        this.result = result;
    }
    public String add()
    {
        result=op1+op2;
        return SUCCESS;
    }

    public String mul()
    {
        result=op1*op2;
        return SUCCESS;
    }
   
    public String execute()
    {
        return SUCCESS;
    }
}
