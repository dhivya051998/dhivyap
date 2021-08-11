package mainproject;

public class Object {
	
	    public static  String name="aaa";
	    public static  int age=10;

	    public static void main(String[] args) {
	    	
	   // object creation method// 	
	    	Object s1 = new Object();
	        System.out.println(s1.name);
	        
	        if (name==("hi")){
	            System.out.println("true");
	        }
	        else{
	            System.out.println("false");
	        }
	        
	        System.out.println(s1.age);
	        
	        for (int i = 0; i < age; i++) {
	            System.out.println(i);
	        }
	        
	        if(age<=18) {
	        	 System.out.println("true");
	        }
	        else {
	        	System.out.println("false");
	        }
	        
	       
	    }

}
