package com.gantt.springboot.rest.dao;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "TaskTrail")
public class TaskTrail  implements Cloneable{

    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long trailId;
    
    private Long id;

	private String text;
	
	private String taskText;
	
    private String  poDetails;
    
    
	


	public Long getTrailId() {
		return trailId;
	}

	public void setTrailId(Long trailId) {
		this.trailId = trailId;
	}

	public String getPoDetails() {
		return poDetails;
	}

	public void setPoDetails(String poDetails) {
		this.poDetails = poDetails;
	}

	public String getTaskText() {
		return taskText;
	}

	public void setTaskText(String taskText) {
		this.taskText = taskText;
	}


	private String start_date;

	private Double progress;

	private Double duration;

	private Long parent;
	
	private Integer priority;

	private String type;

	private Integer owner_id;
	
	private String linkOperation;
	
	
	private String resource;
	
	private String resourceGroup;
	
	
	private String status;
	
	private double completedHours;
	
	
	
	public double getCompletedHours() {
		return completedHours;
	}

	public void setCompletedHours(double completedHours) {
		this.completedHours = completedHours;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	private LocalDateTime startDateTime;
	
	
	
	
	
	public LocalDateTime getStartDateTime() {
		return startDateTime;
	}

	public void setStartDateTime(LocalDateTime startDateTime) {
		
		this.startDateTime = startDateTime;
	}

	public String getResource() {
		return resource;
	}

	public void setResource(String resource) {
		this.resource = resource;
	}

	public String getResourceGroup() {
		return resourceGroup;
	}

	public void setResourceGroup(String resourceGroup) {
		this.resourceGroup = resourceGroup;
	}

	public String getLinkOperation() {
		return linkOperation;
	}

	public void setLinkOperation(String linkOperation) {
		this.linkOperation = linkOperation;
	}


	@Transient
	private String predecessor;

	public TaskTrail() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPredecessor() {
		return predecessor;
	}

	public void setPredecessor(String predecessor) {
		this.predecessor = predecessor;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getStart_date() {
		return start_date;
	}

	public void setStart_date(String start_date) {
		this.start_date = start_date;
	}

	public Double getProgress() {
		return progress;
	}

	public void setProgress(Double progress) {
		this.progress = progress;
	}

	public Double getDuration() {
		return duration;
	}

	public void setDuration(Double duration) {
		this.duration = duration;
	}

	public Long getParent() {
		return parent;
	}

	public void setParent(Long parent) {
		this.parent = parent;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getOwner_id() {
		return owner_id;
	}

	public void setOwner_id(Integer owner_id) {
		this.owner_id = owner_id;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	
	  public Object clone()throws CloneNotSupportedException{  
			return (TaskTrail)super.clone();  
		   }

	@Override
	public String toString() {
		return "Task [id=" + id + ", text=" + text + ", start_date="
				+ start_date + ", progress=" + progress + ", duration="
				+ duration + ", parent=" + parent + ", priority=" + priority
				+ ", type=" + type + ", owner_id=" + owner_id
				+ ", linkOperation=" + linkOperation + ", resource=" + resource
				+ ", resourceGroup=" + resourceGroup + ", status=" + status
				+ ", completedHours=" + completedHours + ", startDateTime="
				+ startDateTime + ", predecessor=" + predecessor + "]";
	}
	  
	  
	  
	  
	  
}
