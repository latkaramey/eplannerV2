package util;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtil {

	public static LocalDateTime convertStartDate(String startDate) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		return LocalDateTime.parse(startDate,formatter);
	}

	public static LocalDateTime convertEndDate(String end_date) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");

		return LocalDateTime.parse(end_date, formatter);

	}
	
	
	public static LocalDateTime convertToDate(String anydate) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		return LocalDateTime.parse(anydate, formatter);

	}
	
	
	public static String convertDateToString(LocalDateTime anyDate) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
	      return 	anyDate.format(formatter);

	}
	
	
	
	
	public static String dateOpsConverter(String inputDate )
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		LocalDateTime convertedDate = 	LocalDateTime.parse(inputDate,formatter);	
		return convertedDate.format(formatter);
		
	}
	
	public static String dateOpsConverter(String startDate,String endDate ,String newStartDate)
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		LocalDateTime convertedStartDate = 	LocalDateTime.parse(startDate,formatter);	
		LocalDateTime convertedEndDate = 	LocalDateTime.parse(endDate,formatter);	
		LocalDateTime convertedNewStartDate = 	LocalDateTime.parse(newStartDate,formatter);	
		
		 LocalDateTime convertedNewEndDate = endDateCalculator(convertedStartDate, convertedEndDate,
				convertedNewStartDate);
		
		return convertedNewEndDate.format(formatter);
		
	}

	public static LocalDateTime endDateCalculator(LocalDateTime convertedStartDate, LocalDateTime convertedEndDate,
			LocalDateTime convertedNewStartDate) {
		Duration duration = Duration.between(convertedEndDate, convertedStartDate);
		 long diff = Math.abs(duration.toMinutes());	
		 LocalDateTime  convertedNewEndDate	=convertedNewStartDate.plusMinutes(diff);
		return convertedNewEndDate;
	}
	
	
	
	



}
