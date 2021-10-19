package util;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.time.temporal.TemporalField;
import java.time.temporal.TemporalUnit;
import java.util.Locale;

import org.dhatim.businesshours.BusinessHours;

public class POC {
	
	
	public static LocalDateTime convertEndDate(String end_date) {
		
		//end_date = end_date.concat(":00");
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		System.out.println( LocalDateTime.parse(end_date, formatter));

		return LocalDateTime.parse(end_date, formatter);

	}
	
	
	
public static LocalDateTime convertSpecialStartDate(String end_date) {
		
		//end_date = end_date.concat(":00");
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("YYYY-MM-DD'T'hh:mm:ssTZD");
		System.out.println( LocalDateTime.parse(end_date, formatter));

		return LocalDateTime.parse(end_date, formatter);

	}
	




	
	public static void main(String[] args) {
		
		String s = "2020-07-15T02:30:00.000Z";
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		System.out.println( LocalDateTime.parse(s, formatter));
		
		
		
//		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
//		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyy", Locale.ENGLISH);
//		LocalDate date = LocalDate.parse("2020-07-15T02:30:00.000Z", inputFormatter);
//		String formattedDate = outputFormatter.format(date);
//		System.out.println(formattedDate); // prints 10-04-2018
//		
//		LocalDate date = LocalDate.now();
//		System.out.println(date);
		//LocalDateTime dateTime = LocalDateTime.parse("2020-07-15T02:30:00.000Z 06:00");
//		 Instant instant = Instant.parse("2020-07-15T02:30:00.000Z 06:00");
//		 System.out.println(instant);
		
		//convertEndDate("22-07-2020 18:00");
		//convertSpecialStartDate("2020-07-15T02:30:00.000Z 06:00");
		
		
	//	System.out.println( LocalDateTime.now().getHour());
//		int duration = 105;
//		LocalDateTime startDate =  LocalDateTime.of(2020, 8, 31, 6, 0);
//		
//		
//		//LocalDateTime scheduleStartDate =startDate.plus(duration, ChronoUnit.HOURS) ;
//		
//		BusinessHours br = new BusinessHours("wday{Mon-Sat} hour{6-23}");
//		
//		System.out.println((duration+6)/18);
//		System.out.println((duration+6)%18);
//		
//		long dayAddition = (duration+6)/18;
//		long dayHours = (duration+6)%18;
//		LocalDateTime scheduleEndDate;
//		
//		 if(dayAddition > 1)
//		 {
//		    scheduleEndDate =startDate.plus(dayAddition, ChronoUnit.DAYS) ;
//			 scheduleEndDate = scheduleEndDate.plus(dayHours,ChronoUnit.HOURS);
//			 
//		 }
//		 else
//		 {
//			 scheduleEndDate =startDate.plus(duration, ChronoUnit.HOURS) ;
//		
//		 }
//		boolean tr = br.isOpen(scheduleEndDate);
//		
//		if(!tr)
//		{
//			System.out.println("possible sunday");
//			//Possibly to handle sunday
//			scheduleEndDate = scheduleEndDate.plus(1,ChronoUnit.DAYS);
//		}
//			
//	
//		System.out.println(scheduleEndDate);
		
		
		//boolean tr = br.isOpen(scheduleStartDate);
		
		
		
//		if(tr)
//		{
//			
//		}
//		else
//		{
//			System.out.println(scheduleStartDate.getHour()- 18);
//			LocalDateTime endDate = startDate.plusDays(1).plusHours(scheduleStartDate.getHour()- 18);
//			System.out.println(endDate.getHour());
//			System.out.println(endDate);
//		}
	
	}

}
