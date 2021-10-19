package util;

public enum TaskStatus {
	PLANNED("Planned"),
	RELEASED("Released"),
	SCHEDULED("Scheduled"),
	IN_PROGRESS("In Progress"),
	ON_HOLD("On hold"),
	COMPLETED("Completed");
	
	 private final String currentStatus;  
	

	 private TaskStatus(String status) {
		// TODO Auto-generated constructor stub
		this. currentStatus = status;
	}
	 
	 public String toString()
	 {
		 return  currentStatus;
	 }
	 
	 
}
