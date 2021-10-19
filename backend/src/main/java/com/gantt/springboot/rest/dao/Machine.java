package com.gantt.springboot.rest.dao;

import javax.persistence.Column;
import javax.persistence.Embeddable;


@Embeddable
public class Machine {

	public Machine() {

	}

	public Machine(String machineName) {
		super();
		//this.machineKey = machineKey;
		this.machineName = machineName;
	}

//	@Column(name="machine_key")
//	private Integer machineKey;
	
	
	@Column(name="machine_name")
	private String machineName;
	
	
	@Column(name="machine_status")
	private String machineStatus ="Available";
	

//	public Integer getMachineKey() {
//		return machineKey;
//	}
//
//	public void setMachineKey(Integer machineKey) {
//		this.machineKey = machineKey;
//	}

	public String getMachineName() {
		return machineName;
	}

	public void setMachineName(String machineName) {
		this.machineName = machineName;
	}

	public String getMachineStatus() {
		return machineStatus;
	}

	public void setMachineStatus(String machineStatus) {
		this.machineStatus = machineStatus;
	}

	
	
	
}
