package mainproject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import org.junit.Assert;

public class Autotesting {
	public static void main(String arg[]) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");

	
		WebDriver driver = new ChromeDriver();

		
			String dhivya = "https://accounts.google.com/AddSession/identifier?hl=en-GB&continue=https%3A%2F%2Fmail.google.com%2Fmail&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession";
			driver.get(dhivya);
			
			WebElement email_id = driver.findElement(By.cssSelector("#identifierId"));
			
			
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			
			 email_id.click();
			 email_id.clear();
			 email_id.sendKeys("edfkj987");

			WebElement next = driver.findElement(By.cssSelector("#identifierNext"));
			 next.click();
			 
			Thread.sleep(1000);
			String ActualInput ="Couldn't find your Google Account";
			String ExpectedInput = driver.findElement(By.xpath("//*[@id=\"view_container\"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[2]/div[2]/div")).getText();

		try {
			Assert.assertEquals(ActualInput,ExpectedInput);
			System.out.println("pass");
		}
		catch(AssertionError e){			
			System.out.println("fail");			
		}
		

		
		WebElement password = driver.findElement(By.cssSelector(".Xb9hP"));
		
		 password.click();
		 password.clear();
		 password.sendKeys("edkgn986");
		 
		 WebElement login = driver.findElement(By.cssSelector("#passwordNext"));
		 login.click();
		 
		 Thread.sleep(1000);
			String actualInput ="Wrong password. Try again or click ‘Forgot password’ to reset it.";
			String expectedInput = driver.findElement(By.xpath("//*[@id=\"view_container\"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[2]/div[2]/span")).getText();

		try {
			Assert.assertEquals(actualInput,expectedInput);
			System.out.println("pass");
		}
		catch(AssertionError e){			
			System.out.println("fail");			
		}
	
		
		
	}
	
}



