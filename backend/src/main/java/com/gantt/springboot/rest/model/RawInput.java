package com.gantt.springboot.rest.model;

public class RawInput  {
	
	private String project,
	workOrder,
	operation,
	startDate,
	estimatedTime,
	setupTime,
	tearDownTime,
	transferTime,
	predecessor,
	resourceGroup,
	//resource,
	priority,
	stage,
	poDetails;
	
	
	

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getPoDetails() {
		return poDetails;
	}

	public void setPoDetails(String poDetails) {
		this.poDetails = poDetails;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getWorkOrder() {
		return workOrder;
	}

	public void setWorkOrder(String workOrder) {
		this.workOrder = workOrder;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEstimatedTime() {
		return estimatedTime;
	}

	public void setEstimatedTime(String estimatedTime) {
		this.estimatedTime = estimatedTime;
	}

	public String getSetupTime() {
		return setupTime;
	}

	public void setSetupTime(String setupTime) {
		this.setupTime = setupTime;
	}

	public String getTearDownTime() {
		return tearDownTime;
	}

	public void setTearDownTime(String tearDownTime) {
		this.tearDownTime = tearDownTime;
	}

	public String getTransferTime() {
		return transferTime;
	}

	public void setTransferTime(String transferTime) {
		this.transferTime = transferTime;
	}

	public String getPredecessor() {
		return predecessor;
	}

	public void setPredecessor(String predecessor) {
		this.predecessor = predecessor;
	}

	public String getResourceGroup() {
		return resourceGroup;
	}

	public void setResourceGroup(String resourceGroup) {
		this.resourceGroup = resourceGroup;
	}

	
	

	public String getStage() {
		return stage;
	}

	public void setStage(String stage) {
		this.stage = stage;
	}

	@Override
	public String toString() {
		return "RawInput [project=" + project + ", workOrder=" + workOrder
				+ ", operation=" + operation + ", startDate=" + startDate
				+ ", estimatedTime=" + estimatedTime + ", setupTime="
				+ setupTime + ", tearDownTime=" + tearDownTime
				+ ", transferTime=" + transferTime + ", predecessor="
				+ predecessor + ", resourceGroup=" + resourceGroup
				+ ", resource=" + "]";
	}
	

	
	
	
}
