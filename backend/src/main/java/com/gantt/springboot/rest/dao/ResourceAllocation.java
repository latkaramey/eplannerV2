package com.gantt.springboot.rest.dao;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ResourceAllocation")
public class ResourceAllocation {
	public ResourceAllocation() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long key;

	private String department;

	private String resourceName;

	private long taskID;

	private LocalDateTime startDate;

	public void setLastDate(LocalDateTime lastDate) {
		this.lastDate = lastDate;
	}

	private LocalDateTime lastDate;
	
	
	
    

	public long getTaskID() {
		return taskID;
	}

	public void setTaskID(long taskID) {
		this.taskID = taskID;
	}

	public Long getKey() {
		return key;
	}

	public void setKey(Long key) {
		this.key = key;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getLastDate() {
		return lastDate;
	}

	
	

	

}
