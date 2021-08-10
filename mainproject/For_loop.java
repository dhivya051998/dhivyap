package mainproject;

public class For_loop {
//---------------------------------For_loop-----------------------------//
	 public static void main(String[] args) {
		 
		 for( int  i = 0; i <=10; i++) {	
			 System.out.println(i);
		 }
		 
		 
		 String[] fruits = {"Apple", "Mango", "Orange", "Banana"};
	        for(String i : fruits ) {
	        	System.out.println(i);
	        }
	        
	        for (int i = 0; i <= 15; i++){
	            
	            if(i % 2 != 0){
	            	System.out.println("Odd Number"+i);
	            }
	            else{
	            	System.out.println ("Even Number" + i);
	            }


	        }
//---------------------------------Do_while-------------------------------------//	        
	        
	        int i = 0;
			do {
				System.out.println(i);
				i++;
			}
			while(false);
				
			
//--------------------------------while_loop------------------------------//
			
			int d = 0;
			
			while(true){
				System.out.println(d);
				d++;
				if(d==5) {
					break;
				}
				
			}
					

	}

	 }
		  
        