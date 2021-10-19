package com.gantt.springboot.rest.dao;

public class ResourceRequest {
	
	
	private String group;
	
	private String machine;
	
	private String machineStatus;
	
	private String reason;
	
	private String comments;

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getMachine() {
		return machine;
	}

	public void setMachine(String machine) {
		this.machine = machine;
	}

	public String getMachineStatus() {
		return machineStatus;
	}

	public void setMachineStatus(String machineStatus) {
		this.machineStatus = machineStatus;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "ResourceRequest [group=" + group + ", machine=" + machine
				+ ", machineStatus=" + machineStatus + ", reason=" + reason
				+ ", comments=" + comments + "]";
	}
	
	
	

}
