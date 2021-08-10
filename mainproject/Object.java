package mainproject;

public class Object {
	
	    public static  String name="aaa";
	    public static  int age=10;

	    public static void main(String[] args) {
	    	
	        System.out.println(age);
	        for (int i = 0; i < age; i++) {
	            System.out.println(i);
	        }

	        if (name.equals("hi")){
	            System.out.println("true");
	        }
	        else{
	            System.out.println("false");
	        }
	        
	        if(age<=18) {
	        	 System.out.println("true");
	        }
	        else {
	        	System.out.println("false");
	        }
	        
	       
	    }

}
