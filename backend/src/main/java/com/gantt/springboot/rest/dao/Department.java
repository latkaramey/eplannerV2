package com.gantt.springboot.rest.dao;

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
@Table(name = "Department")
public class Department {
	public Department()
	{
		
	}
	
	@Id
	private Integer  key;
	
	
	private String label;
	
	@ElementCollection
	private List<Machine> machineList = new ArrayList<>();


	public List<Machine> getMachineList() {
		return machineList;
	}


	public void setMachineList(List<Machine> machineList) {
		this.machineList = machineList;
	}


	public Integer getKey() {
		return key;
	}


	public void setKey(Integer key) {
		this.key = key;
	}


	public String getLabel() {
		return label;
	}


	public void setLabel(String label) {
		this.label = label;
	}
	

}
