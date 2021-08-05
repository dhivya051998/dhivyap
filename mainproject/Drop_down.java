package mainproject;

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;


import org.apache.bcel.generic.Select;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Drop_down {
	
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
    			System.out.println("pass");
    		}
    		catch(AssertionError e){			
    			
    			System.out.println("fail");			
    		}
			    
            	driver.navigate().back();
            	
 //-------------------------------------Text box check---------------------------------------------//
            	
            	try {
			        WebElement text_box = driver.findElement(By.cssSelector("#fname"));
				
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
			         boolean text_enabled = text_box.isEnabled();
				 
				 System.out.println(text_enabled);
	              
	              if( text_enabled==true )
	              {
	                 System.out.println("Element is enabled");
	              }
	              else
	                 System.out.println("Element is not enabled");
	              
	              
				
				 text_box.click();
				 text_box.clear();
				 text_box.sendKeys("amdkjjf3857#$");
				
				 Thread.sleep(500);
				 String expected = "amdkjjf3857#$";
				 String actual= text_box.getAttribute("value");
 
				 Assert.assertEquals(actual,expected);
				 System.out.println("pass");
            	}
            	catch(AssertionError e){
            		
            		System.out.println("fail");	
            	}
				
				 
				 
//-------------------------------------Button check----------------------------------------------//
            	
            	try {
				 WebElement button = driver.findElement(By.cssSelector("#idOfButton"));
				 
				 driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				 
				 boolean b_enable = button.isEnabled();
				 
				  System.out.println(b_enable);
	              
	              if( b_enable==true )
	              {
	                 System.out.println("Button is enabled");
	              }
	              else
	                 System.out.println("Button is not enabled");
				 
				 button.click();
				 
				 
				
				 Thread.sleep(500);
				 String exp_btn = "background: green;";
				 String act_btn= button.getAttribute("style");
				 
 
				 Assert.assertEquals(act_btn,exp_btn);
				 System.out.println("pass");
            	}
            	catch(AssertionError e){
            		
            		System.out.println("fail");	
            	}
				
            	
            	

				 
//----------------------------------Radio button is not selected----------------------------------------// 
				 
				 
				 WebElement radio_button = driver.findElement(By.cssSelector("#female"));
						
			         driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
			     
			         boolean but_enabled = radio_button .isEnabled();
				 
				 System.out.println( but_enabled);
	              
	              if(  but_enabled==true )
	              {
	                 System.out.println("Radio button is enabled");
	              }
	              else
	                 System.out.println("Radio button is not enabled");
	              
					
//				 radio_button.click();
				 
				  boolean buttonDisplayed = radio_button.isSelected();
				  System.out.println(buttonDisplayed);
	              
	              if( buttonDisplayed==true )
	              {
	                 System.out.println("female is selected");
	              }
	              else
	                 System.out.println("female is not selected");
	              
	              
//-------------------------------Radio button is selected----------------------------------------------//
					 	
	                             WebElement radio_but = driver.findElement(By.cssSelector("#female"));
					
				     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
						
					 radio_but.click();
					 
					  boolean select = radio_button.isSelected();
					  System.out.println(select);
		              
		              if( select==true )
		              {
		                 System.out.println("female is selected");
		              }
		              else
		                 System.out.println("female is not selected");
						 	     

				 
//--------------------------------------------Check_box is selected check------------------------------------------//			 
				 
				  
				 WebElement check_box = driver.findElement(By.cssSelector(".Automation "));
					
					
			         driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
				 check_box.click();
				 
				 boolean value = radio_button.isSelected();
				 
				 System.out.println(value);
				 if( value==true )
	              {
	                 System.out.println("Automation Testing is selected");
	              }
	              else
	                 System.out.println("Performance Testing is not selected");
				 
				 
				
				 
				 
//---------------------------------------Drop_down check--------------------------------------//	
				 
				 WebElement dropdown = driver.findElement(By.id("testingDropdown")); 
				 
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
				dropdown.click();
				 
				
			    WebElement manual = driver.findElement(By.id("manual")); 
				 
			    driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
			    manual.click();
				
			    
//			    if(manual.isSelected())
//				 { 
//				     System.out.println("pass"); 
//				 } 
//				 else 
//				 {
//				     System.out.println("fail"); 
//				  } 
//-----------------------------------Double-click to generate alert box check---------------------------------//			 
				
				Actions action = new Actions(driver);
				
				WebElement btn = driver.findElement(By.id("dblClkBtn"));
				
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
				action.doubleClick(btn).perform();
				
				driver.switchTo().alert().accept(); 
				
			  
				
				
				
			

				
				

				  

	}

	}
