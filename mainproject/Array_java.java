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
		
		
		
		

		
		
	 }
}
