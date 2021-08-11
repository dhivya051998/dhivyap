package mainproject;

public class Array_java {
	

	 public static void main(String[] args) {
		 
		 int a[] = {10,20,30,40,50,60};
		 for (int i=0; i<a.length;i++) {
			 System.out.println(a[i]);
		 }
			 
		 
		String[] colors = {"Red", "Green", "Yellow"};
		for (String i : colors) {
			 System.out.println(i);
		}
		
		int [] [] num = {{1,2,3,4}, {5,6,7,8,}};
		for(int i=0; i<num.length; i++) {
			for(int j=0; j<num[i].length; j++) {
				System.out.println(num[i][j]);
			}
		}
		
		
		String[][][] myString = {
					{{"test1","test2","test3"},{"test1","test2","test3"}},
					{{"test1","test4","test2"},{"test1","test2","test3"}},
					{{"test1","test8","test9"},{"test1","test2","test3"}},
					{{"test1","test2","test3"},{"test1","test2","test3"}},
					{{"test1","test4","test2"},{"test1","test2","test3"}},
					{{"test1","test8","test9"},{"test1","test2","test3"}}
				};

		for(int i=0; i<myString.length; i++) {
			for(int j=0; j<myString[i].length; j++) {
				for(int k=0; k<myString[i][j].length; k++) {
					System.out.println(myString[i][j][k]);
					
				}
				
			}
			
		}
		

		
		
	 }
}
