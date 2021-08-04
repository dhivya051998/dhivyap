package mainproject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class MainProject {
	
	public static void main(String arg[]) {
//		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\Admin\\Downloads\\chromedriver.exe");
		System.setProperty("webdriver.gecko.driver",  "C:\\Users\\Admin\\Downloads\\geckodriver.exe");
//		WebDriver driver = new ChromeDriver();
//		String dhivya = "https://mail.google.com/mail/u/0/#inbox";
//		driver.get(dhivya);
		
		WebDriver driver = new FirefoxDriver();
		String dhivya = "https://mail.google.com/mail/u/0/#inbox";
		driver.get(dhivya);
	}
}