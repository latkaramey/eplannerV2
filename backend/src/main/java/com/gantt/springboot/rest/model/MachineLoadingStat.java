package com.gantt.springboot.rest.model;

public class MachineLoadingStat {
	
	private Long id;
	
	
	private String text;
	
	private Double availability;
	
	
	private Double maintanance;
	
	
	private Double mttr;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}


	public Double getAvailability() {
		return availability;
	}


	public void setAvailability(Double availability) {
		this.availability = availability;
	}


	

	public Double getMaintanance() {
		return maintanance;
	}


	public void setMaintanance(Double maintanance) {
		this.maintanance = maintanance;
	}


	public Double getMttr() {
		return mttr;
	}


	public void setMttr(Double mttr) {
		this.mttr = mttr;
	}
	
	
	
	
	
	
	
	
	
	


}
