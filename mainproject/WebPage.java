package mainproject;

import java.util.NoSuchElementException;
import org.openqa.selenium.support.ui.Select;
import java.util.concurrent.TimeUnit;


//import org.apache.bcel.generic.Select;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class WebPage {
	
	private static final String ExpectedType = null;
	private static Alert alert;

	public static void main(String arg[]) throws InterruptedException {
		
                 System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");
	         WebDriver driver = new ChromeDriver();
//--------------------------------------------URL check------------------------------------------------//
	        String dhivya = "https://www.testandquiz.com/selenium/testing.html";
	        driver.get(dhivya);
                driver.manage().window().maximize();
//-------------------------------------------Link check-------------------------------------------//
                try { 
                    WebElement link = driver.findElement(By.xpath("/html/body/div/div[4]/div/p/a"));
	            driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	            link.click();
		    Thread.sleep(500);
		 
			    String ExpectedLink = "https://www.javatpoint.com/";
    			    String ActualLink =driver.getCurrentUrl();  		
    			
    			    Assert.assertEquals(ActualLink,ExpectedLink);
    			   System.out.println("Link testcase is pass");
    		     }
    		     catch(AssertionError e){			
    			      System.out.println("Link testcase is fail");			
    		        }  
            	    driver.navigate().back();
 //-------------------------------------Text box check---------------------------------------------//
            	try {
			 WebElement text_box = driver.findElement(By.cssSelector("#fname"));
		         driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              if( text_box.isEnabled() ) {
	                 System.out.println("Input text box is enabled");
	                 text_box.click();
					 text_box.clear();
					 text_box.sendKeys("amdkjjf3857#$");
					 Thread.sleep(500);
	              }
	              else {
	                 System.out.println("Input text  box is disabled");
	              
	              }
				     String expected = "amdkjjf3857#$";
				     String actual= text_box.getAttribute("value");
 
				     Assert.assertEquals(actual,expected);
				     System.out.println("Input text testcase is pass");
            	      }
              catch(AssertionError e){
            		
            		 System.out.println("Input text testcase is fail");	
            	     }			 
//-------------------------------------Button check----------------------------------------------//
            	try {
		     WebElement button = driver.findElement(By.cssSelector("#idOfButton"));
		    driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              
	              if( button.isEnabled() ) {
	                 System.out.println("Submit button is enabled");
	                 button.click();
			 Thread.sleep(500);
	              }
	              else {
	                 System.out.println("Submit button is disabled");
	              }
				  String exp_btn = "background: green;";
				  String act_btn= button.getAttribute("style");
				
				  Assert.assertEquals(act_btn,exp_btn);
				  System.out.println("Submit button test case is pass");
            	     }
            	 catch(AssertionError e){
            		
            		System.out.println("Submit button test case is fail");	
            	 } 
//----------------------------------Radio button male is check----------------------------------------// 
		     WebElement male_button = driver.findElement(By.cssSelector("#male"));
		     WebElement female_button = driver.findElement(By.cssSelector("#female"));
	             driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
			     
			     if( male_button.isEnabled() ) {
	                         System.out.println("Radio button is enabled");
	                         male_button.click();
		         	 Thread.sleep(500);
					 
				     if( male_button.isSelected() && ( !female_button.isSelected())) {
		              
		                 System.out.println("Male button is selected");
		              }
		              else {
		                 System.out.println("Female button  is not selected");
		              }
	                    }
	                    else {
	                          System.out.println("Radio button is disabled");
	                     }
//------------------------------------------Radio button female is check------------------------------------//
			 WebElement male_but = driver.findElement(By.cssSelector("#male"));
			 WebElement female_but = driver.findElement(By.cssSelector("#female"));
			 driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
			     
				 if( female_but.isEnabled() ) {
	                              System.out.println("Radio button is enabled");
	                              female_but .click();
				      Thread.sleep(500);
					 
					 if(  female_but.isSelected() && ( !male_but.isSelected())  )
		                    {
		                       System.out.println("female button is selected");
		                     }
		                   else {
		                       System.out.println("male button is not selected");
		                        }
				   		
	                            }
	                        else {
	                              System.out.println("Radio button is disabled");
	                             }
//----------------------------------------------check box Testcase-1---------------------------------------------// 
			    WebElement check_box1 = driver.findElement(By.cssSelector(".Automation "));
			    WebElement check_box2 = driver.findElement(By.cssSelector(".Performance "));	
			    driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              
	                        if(  check_box1.isEnabled() ) {
	                             System.out.println("Check box is enabled");
	                             check_box1.click();
				     Thread.sleep(500);
					 
					 if( check_box1.isSelected() && (!check_box2.isSelected())  )
		                   {
		                 System.out.println("Automation Testing checkbox is selected");
		                   }
		              else {
		                 System.out.println("Automation Testing checkbox is not selected");
		              }
	                         }
	                   else {
	                         System.out.println("Check box is disabled");
	                        }
//-------------------------------------------------Testcase-2.......................................//
				     WebElement automation_box1 = driver.findElement(By.cssSelector(".Automation "));
					 WebElement performance_box2 = driver.findElement(By.cssSelector(".Performance "));	
				     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		              
		              if(performance_box2.isEnabled()) {
		                 System.out.println("Check box is enabled");
		                 performance_box2.click();
						 Thread.sleep(500);
						 
						 if( performance_box2.isSelected() && (!automation_box1.isSelected())  )
			              {
			                 System.out.println("Performance Testing checkbox is selected");
			              }
			              else {
			                 System.out.println("Performance Testing checkbox is not selected");
			              }
		              }
		              else {
		                 System.out.println("Check box is disabled");
		              }
//--------------------------------------------Testcase-3-----------------------------------//	
				     WebElement automation = driver.findElement(By.cssSelector(".Automation "));
					 WebElement performance = driver.findElement(By.cssSelector(".Performance "));	
				     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		             if( (automation.isEnabled()) && (performance.isEnabled()))
		              {
		                 System.out.println("Check box is enabled");
		                 automation.click();
		                 performance.click();
						 Thread.sleep(500);
						 
						 if( performance.isSelected() && (automation.isSelected()))
			              {
			                 System.out.println("Automation and Performance check box is selected");
			              }
			              else {
			                 System.out.println("Performance Testing checkbox is not selected");
			              }
		              }
		              else {
		                 System.out.println("Check box is disabled");
		              }
//-----------------------------------------------Testcase-4----------------------------------------//	
				     WebElement automation_1 = driver.findElement(By.cssSelector(".Automation "));
					 WebElement performance_2 = driver.findElement(By.cssSelector(".Performance "));	
				     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				     if( (automation_1.isEnabled()) && (performance_2.isEnabled())) {
		                 System.out.println("Check box is enabled");
		                 automation.click();
		                 performance.click();
						 Thread.sleep(500);
						 
						 if((!automation_1.isSelected()) && (!performance_2.isSelected()))
			              {
			                 System.out.println("Automation and Performance check box is not selected");
			              }
			              else {
			                 System.out.println("Performance and performance check box is  selected");
			              }
		              }
		              else {
		                 System.out.println("Check box is disabled");
		              
		              }
//---------------------------------------Drop_down manual testing check--------------------------------------//	
				   WebElement dropdown_4 = driver.findElement(By.id("testingDropdown")); 
				   Thread.sleep(500);
				   WebElement dropdown_manual = driver.findElement(By.xpath("//*[@id=\"manual\"]")); 
				   Thread.sleep(500);
				   driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				   if( dropdown_4.isEnabled() ) {
		                 System.out.println("Drop down button is enabled");
		                 dropdown_4.click();
		                 dropdown_manual.click();
						 Thread.sleep(500);
						 if(dropdown_manual.isSelected()) {
							 String Exp_1 ="Manual Testing";
							 String Act_1 =dropdown_manual.getText();
							 dropdown_manual.click();
							 if(Exp_1.equals(Act_1)) {
								 System.out.println("Drop down manual testing text  is selected");
								 
							 }
							 else {
								 System.out.println("Drop down manual testing  is fail");
							 }
						 }
				        else {
						System.out.println("Drop down is not selected");
						 }
						 
						
		              }
		             else {
		                 System.out.println("Drop down button  is disabled");
		              }							   				   
//-----------------------------------Double-click to generate alert box check---------------------------------//			 
				Actions action = new Actions(driver);
				WebElement btn = driver.findElement(By.id("dblClkBtn"));
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              if( btn.isEnabled()){ 
	            	 System.out.println("Double click to generate alert box button is enabled");
	                 action.doubleClick(btn).perform();
					 Thread.sleep(500);
					 String ext_2 ="hi, JavaTpoint Testing";
					 String act_2 = driver.switchTo().alert().getText();
					 driver.switchTo().alert().accept();
					 Thread.sleep(500);
					 Assert.assertEquals(ext_2, act_2);
					 System.out.println("Double click the button to generate alert box message is verified");    
						
	              }
	              else {
	                 System.out.println("Double click to generate alert box button is disabled");
				    
	              }        	     
//-------------------------------------Generate alert box check------------------------------------------//				
	            Thread.sleep(500);
                Actions act = new Actions(driver);
				WebElement box = driver.findElement(By.xpath("/html/body/div/div[11]/div/p/button"));
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              if( box.isEnabled() ) {
	            	 System.out.println("Generate alert box button is enabled");
	                 action.click(box).perform();
					 Thread.sleep(500);
					 String ext_3 ="hi, JavaTpoint Testing";
					 String act_3 = driver.switchTo().alert().getText();
					 Thread.sleep(500);
					 Assert.assertEquals(ext_3, act_3);
					 System.out.println("Generate alert box  message is verified");
					 driver.switchTo().alert().accept();
					 
					
	              }
	              else {
	                 System.out.println("Generate alert box button is disabled");
				     
	              }          		     		    
//-----------------------------------Generate confirm box check----------------------------------------//
                Actions confirm = new Actions(driver);
				WebElement generate_confirm = driver.findElement(By.xpath("/html/body/div/div[12]/div/p[1]/button"));
				WebElement confirm_box = driver.findElement(By.xpath("//*[@id=\"demo\"]"));
				
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	              if( generate_confirm.isEnabled() ) {
	            	  generate_confirm.click();
	            	 System.out.println("Generate confirm box button is enabled");	
					 Thread.sleep(500);
					 String ext_4 ="Press a button!";
					 String act_4 = driver.switchTo().alert().getText();
					 Thread.sleep(500);
					 Assert.assertEquals(ext_4, act_4);
					 System.out.println("Generate confirm alert box  message is verified");
					 driver.switchTo().alert().dismiss();
					 
					 String actual_5 = "You pressed OK!";
					 String expect_5 = confirm_box.getText();
					 Assert.assertEquals(actual_5, expect_5);
					 driver.switchTo().alert().accept();
					 Thread.sleep(500);
					 System.out.println("alert message is accepted");	
					 
	              }
	              else {
	                 System.out.println("Generate confirm box button is disabled");
				    
	              }			       

	}

	}
