package mainproject;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class Drag_drop {
	
	public static void main(String arg[]) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");

		
		WebDriver driver = new ChromeDriver();

		
			String dhivya = "https://the-internet.herokuapp.com/drag_and_drop";
			driver.get(dhivya);
			
			driver.manage().window().maximize();
			
//			Thread.sleep(1000);
	
			Actions action = new Actions(driver); 
			
			WebElement From = driver.findElement(By.xpath("//*[@id=\"column-a\"]"));
			driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		
			
			WebElement To = driver.findElement(By.xpath("//*[@id=\"column-b\"]"));
			driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		
			
			
//			action.clickAndHold(From).moveToElement(To).release(To).build().perform();

			action.dragAndDrop(From, To).build().perform();
			
	}
}
