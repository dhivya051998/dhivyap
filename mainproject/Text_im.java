package mainproject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import junit.framework.Assert;

public class Text_im {
	
	public static void main(String arg[]) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        String a ="https://www.testim.io/";
        driver.get(a);
        driver.manage().window().maximize();
        
        
        try {
        WebElement heading_text = driver.findElement(By.id("type-heading"));
        WebElement head_text = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div/div/div[1]/div[1]/span"));
        Thread.sleep(1000);
       
            if(heading_text.isEnabled()) {
            	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            	System.out.println(" heading text is enabled");
            	String expectedAlert = "Accelerate authoring";
            	String actualAlert   = head_text.getText();								
     			Assert.assertEquals(expectedAlert,actualAlert);
     			System.out.println("Accelerate text is displayed");
     			
           	            	
            }
            else {
            	System.out.println("heading text is disabled");
            }
           

            
        }
        catch(AssertionError e) {
            	System.out.println("Accelerate text is not displayed");
            	
            }
            driver.navigate().refresh();
//---------------------------------------button check------------------------------------------//
        try {
        	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            WebElement start_button = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div/div/div[2]/a[1]"));
            Thread.sleep(1000);
            if(start_button.isEnabled()) {
            	System.out.println("Start button is enabled");
            	start_button.click();
            	Thread.sleep(500);
            	
            	String expected ="https://app.testim.io/#/signup";
             	String actual =driver.getCurrentUrl();
             	Assert.assertEquals(actual,expected);
     			System.out.println("Start button testcase is pass");
     			
     			
            
            }
            else {
            	System.out.println("Start button is disabled");
            }
        }
        catch(AssertionError e){
        	System.out.println("Start button testcase is fail");
        }
               	
            
        
            driver.navigate().back();
//--------------------------------button check_2---------------------------------------------// 
            
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
            WebElement schedule_button = driver.findElement(By.xpath("//*[@id=\"main\"]/div/div/div/div[2]/a[2]"));
            Thread.sleep(1000);
            if(schedule_button.isEnabled()) {
            	System.out.println("Demo button is enabled");
            	schedule_button.click();
            	Thread.sleep(500);
            	
            	 String Expected_1 ="https://www.testim.io/schedule-demo/";
             	String Actual_1 =driver.getCurrentUrl();
             	Assert.assertEquals(Actual_1,Expected_1);
     			System.out.println("Demo button testcase is pass");
            		
             
            }
            else {
            	System.out.println("Start button is disabled");
            }
            
            
           
 
            driver.navigate().back();
            driver.close();
           
            
	}
		

}
