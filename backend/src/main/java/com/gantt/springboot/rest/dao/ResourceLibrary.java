package com.gantt.springboot.rest.dao;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.AttributeOverride;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.Column;


@Entity
@Table(name = "ResourceLibrary")
public class ResourceLibrary {
	public ResourceLibrary()
	{
		
	}
	
	@Id
	private Integer  key;
	
	
	
	
	private String department;
	
	@Override
	public String toString() {
		return "ResourceLibrary [department=" + department + ", resourceName=" + resourceName
				+ ", optimalAvailableDate=" + optimalAvailableDate + "]";
	}

	private String resourceName;
	
	
	private String resourceStatus= "Available";
	
	
	
	private LocalDateTime optimalAvailableDate;
	
	
	

	public String getResourceStatus() {
		return resourceStatus;
	}

	public void setResourceStatus(String resourceStatus) {
		this.resourceStatus = resourceStatus;
	}

	public Integer getKey() {
		return key;
	}

	public void setKey(Integer key) {
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

	public LocalDateTime getOptimalAvailableDate() {
		return optimalAvailableDate;
	}

	public void setOptimalAvailableDate(LocalDateTime optimalAvailableDate) {
		this.optimalAvailableDate = optimalAvailableDate;
	}


}
