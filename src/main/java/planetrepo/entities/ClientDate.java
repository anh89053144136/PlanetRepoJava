package planetrepo.entities;

import java.util.Calendar;
import java.util.Date;

public class ClientDate {
	public ClientDate() { }
	
	public ClientDate(Date arg) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(arg);
		
		this.day = calendar.get(Calendar.DAY_OF_MONTH);
		this.month = calendar.get(Calendar.MONTH);
		this.year = calendar.get(Calendar.YEAR);
		
		this.hour = calendar.get(Calendar.HOUR);
		this.minute = calendar.get(Calendar.MINUTE);
	}
	
	public int day;
	
	public int month;
	
	public int year;
	
	public int hour;
	
	public int minute;
}
