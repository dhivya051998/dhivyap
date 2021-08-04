package mainproject;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Cliqtesting {
	
	public static void main(String arg[]) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");

		
		WebDriver driver = new ChromeDriver();
		
		String app = "https://accounts.zoho.com/signin?servicename=ZohoChat&serviceurl=/index.do";
		driver.get(app);
		

		WebElement email_id = driver.findElement(By.cssSelector("#login_id"));
//	    WebElement message = driver.findElement(By.cssSelector("#otp"));
		
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		 email_id.click();
		 email_id.clear();
		 email_id.sendKeys("");
		 
		 WebElement next = driver.findElement(By.cssSelector("#nextbtn"));
		 
		 next.click();
		 
		 Thread.sleep(1000);
			String ActualInput ="Please enter your email address or mobile number";
								
			String ExpectedInput = driver.findElement(By.xpath("//*[@id=\"getusername\"]/span/div[2]")).getText();
//			System.out.println(ExpectedInput);

		try {
			Assert.assertEquals(ActualInput,ExpectedInput);
			System.out.println("pass");
		}
		catch(AssertionError e){			
			System.out.println("fail");			
		}
		
		
		WebElement email = driver.findElement(By.cssSelector("#login_id"));
	   
		
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		 email.click();
		 email.clear();
		 email.sendKeys("jshdd8760");
		 
		 WebElement submit = driver.findElement(By.cssSelector("#nextbtn"));
		 
		 submit.click();
		 
		 Thread.sleep(1000);
			String actualInput ="This account cannot be found. Please use a different account or for a new account";
								
			String expectedInput = driver.findElement(By.xpath("//*[@id=\"getusername\"]/span/div[2]")).getText();
//			System.out.println(expectedInput);

		try {
			Assert.assertEquals(ActualInput,ExpectedInput);
			System.out.println("pass");
		}
		catch(AssertionError e){			
			System.out.println("fail");			
		}
		
		
        WebElement number = driver.findElement(By.cssSelector("#login_id"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		 number.click();
		 number.clear();
		 number.sendKeys("dhivyap18598@gmail.com");
		 
		 WebElement input = driver.findElement(By.cssSelector("#nextbtn"));
		 
		 input.click();
		 
		 Thread.sleep(1000);
			String actual ="Resend OTP";
								
			String expected = driver.findElement(By.xpath("//*[@id=\"otp_container\"]/div[2]/div[2]/span[4]")).getText();
//			System.out.println(expected);

		try {
			Assert.assertEquals(ActualInput,ExpectedInput);
			System.out.println("pass");
		}
		catch(AssertionError e){			
			System.out.println("fail");			
		}
		
		 WebElement num = driver.findElement(By.cssSelector("#otp"));
		   
			
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
			 num.click();
			 num.clear();
			 num.sendKeys("");
		 
			 WebElement box = driver.findElement(By.cssSelector("#nextbtn"));
			 
			 box.click();
			 
			 Thread.sleep(1000);
				String act_input ="Please enter the OTP";
									
				String exp_input = driver.findElement(By.xpath("//*[@id=\"otp_container\"]/div[2]/div[1]")).getText();
//				System.out.println(exp_input);

			try {
				Assert.assertEquals(ActualInput,ExpectedInput);
				System.out.println("pass");
			}
			catch(AssertionError e){			
				System.out.println("fail");			
			}
			
			 WebElement num_1 = driver.findElement(By.cssSelector("#otp"));
			   
				
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			
				 num_1.click();
				 num_1.clear();
				 num_1.sendKeys("4310605");
				 
				 WebElement div = driver.findElement(By.cssSelector("#nextbtn"));
				 
				 div.click();
				 
				 Thread.sleep(1000);
					String act_input_1 ="Incorrect OTP.Please try again.";
										
					String exp_input_1 = driver.findElement(By.xpath("//*[@id=\"otp_container\"]/div[2]/div[1]")).getText();
//					System.out.println(exp_input_1);

				try {
					Assert.assertEquals(ActualInput,ExpectedInput);
					System.out.println("pass");
				}
				catch(AssertionError e){			
					System.out.println("fail");			
				}
				
//				driver.quit();
				
		
		
		
		

	}

}
