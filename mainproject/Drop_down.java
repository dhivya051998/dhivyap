package mainproject;

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
//URL check//
		
			String dhivya = "https://www.testandquiz.com/selenium/testing.html";
			driver.get(dhivya);
            driver.manage().window().maximize();
			
//Link check//
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
            	
 //Text box check//
			    WebElement text_box = driver.findElement(By.cssSelector("#fname"));
				
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
				 text_box.click();
				 text_box.clear();
				 text_box.sendKeys("amdkjjf3857#$");
				 
				 
//Button check//				 
				 WebElement button = driver.findElement(By.cssSelector("#idOfButton"));
				 
				 driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				 
				 button.click();
				 
				 
//Radio button check// 
				 WebElement radio_button = driver.findElement(By.cssSelector("#female"));
					
					
			     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
				 radio_button.click();
				 
				 
				 if (radio_button.isSelected()) {					
			            System.out.println("pass");					

			        } else {			
			            System.out.println("fail");					
			        }		
				 
				 WebElement radio_but = driver.findElement(By.cssSelector("#male"));
					
					
			     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
				 radio_but.click();
				 
				 
				 if (radio_but.isSelected()) {					
			            System.out.println("pass");					

			        } else {			
			            System.out.println("fail");					
			        }		
				 
//Check_box check//			        
				 WebElement check_box = driver.findElement(By.cssSelector(".Automation "));
					
					
			     driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
				 check_box.click();
				 
				 if(check_box.isSelected())
				 { 
				     System.out.println("pass"); 
				 } 
				 else 
				 {
				     System.out.println("fail"); 
				  } 
				 
//Drop_down check//				 
				 WebElement dropdown = driver.findElement(By.id("testingDropdown")); 
				 
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
				dropdown.click();
				 
				
			    WebElement manual = driver.findElement(By.id("manual")); 
				 
			    driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
					
			    manual.click();
				
			    
			    if(manual.isSelected())
				 { 
				     System.out.println("pass"); 
				 } 
				 else 
				 {
				     System.out.println("fail"); 
				  } 
//Double-click to generate alert box check//			 
				
				Actions action = new Actions(driver);
				
				WebElement btn = driver.findElement(By.id("dblClkBtn"));
				
				driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
				
				action.doubleClick(btn).perform();
				
				driver.switchTo().alert().accept(); 
				
			  
				
				
				
			

				
				

				  

	}

}
