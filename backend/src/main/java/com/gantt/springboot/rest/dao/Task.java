package com.gantt.springboot.rest.dao;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "Task")
public class Task implements Cloneable {

	@Id
	private Long id;

	private String text;

	private String taskText;

	private String poDetails;

	private String start_date;

	private String end_date;

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
	
	
	private String initialStartDate;
	
	
	public String getInitialStartDate() {
		return initialStartDate;
	}

	public void setInitialStartDate(String initialStartDate) {
		this.initialStartDate = initialStartDate;
	}

	private String initialEndDate;
	
	
	public String getInitialEndDate() {
		return initialEndDate;
	}

	public void setInitialEndDate(String initialEndDate) {
		this.initialEndDate = initialEndDate;
	}

	private String stage;
	
	
	

	public String getStage() {
		return stage;
	}

	public void setStage(String stage) {
		this.stage = stage;
	}

	public String getEnd_date() {
		return end_date;
	}

	public void setEnd_date(String end_date) {
		this.end_date = end_date;
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

	public Task() {
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

	public Object clone() throws CloneNotSupportedException {
		return (Task) super.clone();
	}

	

	@Override
	public String toString() {
		return "Task [id=" + id + ", text=" + text + ", taskText=" + taskText + ", poDetails=" + poDetails
				+ ", start_date=" + start_date + ", end_date=" + end_date + ", progress=" + progress + ", duration="
				+ duration + ", parent=" + parent + ", priority=" + priority + ", type=" + type + ", owner_id="
				+ owner_id + ", linkOperation=" + linkOperation + ", resource=" + resource + ", resourceGroup="
				+ resourceGroup + ", status=" + status + ", completedHours=" + completedHours + ", stage=" + stage
				+ ", startDateTime=" + startDateTime + ", predecessor=" + predecessor + ", getStage()=" + getStage()
				+ ", getEnd_date()=" + getEnd_date() + ", getPoDetails()=" + getPoDetails() + ", getTaskText()="
				+ getTaskText() + ", getCompletedHours()=" + getCompletedHours() + ", getStatus()=" + getStatus()
				+ ", getStartDateTime()=" + getStartDateTime() + ", getResource()=" + getResource()
				+ ", getResourceGroup()=" + getResourceGroup() + ", getLinkOperation()=" + getLinkOperation()
				+ ", getId()=" + getId() + ", getPredecessor()=" + getPredecessor() + ", getText()=" + getText()
				+ ", getStart_date()=" + getStart_date() + ", getProgress()=" + getProgress() + ", getDuration()="
				+ getDuration() + ", getParent()=" + getParent() + ", getType()=" + getType() + ", getOwner_id()="
				+ getOwner_id() + ", getPriority()=" + getPriority() + ", hashCode()=" + hashCode() + ", getClass()="
				+ getClass() + ", toString()=" + super.toString() + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(completedHours);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((duration == null) ? 0 : duration.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((linkOperation == null) ? 0 : linkOperation.hashCode());
		result = prime * result + ((owner_id == null) ? 0 : owner_id.hashCode());
		result = prime * result + ((parent == null) ? 0 : parent.hashCode());
		result = prime * result + ((poDetails == null) ? 0 : poDetails.hashCode());
		result = prime * result + ((predecessor == null) ? 0 : predecessor.hashCode());
		result = prime * result + ((priority == null) ? 0 : priority.hashCode());
		result = prime * result + ((progress == null) ? 0 : progress.hashCode());
		result = prime * result + ((resource == null) ? 0 : resource.hashCode());
		result = prime * result + ((resourceGroup == null) ? 0 : resourceGroup.hashCode());
		result = prime * result + ((startDateTime == null) ? 0 : startDateTime.hashCode());
		result = prime * result + ((start_date == null) ? 0 : start_date.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + ((taskText == null) ? 0 : taskText.hashCode());
		result = prime * result + ((text == null) ? 0 : text.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		if (Double.doubleToLongBits(completedHours) != Double.doubleToLongBits(other.completedHours))
			return false;
		if (duration == null) {
			if (other.duration != null)
				return false;
		} else if (!duration.equals(other.duration))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (linkOperation == null) {
			if (other.linkOperation != null)
				return false;
		} else if (!linkOperation.equals(other.linkOperation))
			return false;
		if (owner_id == null) {
			if (other.owner_id != null)
				return false;
		} else if (!owner_id.equals(other.owner_id))
			return false;
		if (parent == null) {
			if (other.parent != null)
				return false;
		} else if (!parent.equals(other.parent))
			return false;
		if (poDetails == null) {
			if (other.poDetails != null)
				return false;
		} else if (!poDetails.equals(other.poDetails))
			return false;
		if (predecessor == null) {
			if (other.predecessor != null)
				return false;
		} else if (!predecessor.equals(other.predecessor))
			return false;
		if (priority == null) {
			if (other.priority != null)
				return false;
		} else if (!priority.equals(other.priority))
			return false;
		if (progress == null) {
			if (other.progress != null)
				return false;
		} else if (!progress.equals(other.progress))
			return false;
		if (resource == null) {
			if (other.resource != null)
				return false;
		} else if (!resource.equals(other.resource))
			return false;
		if (resourceGroup == null) {
			if (other.resourceGroup != null)
				return false;
		} else if (!resourceGroup.equals(other.resourceGroup))
			return false;
		if (startDateTime == null) {
			if (other.startDateTime != null)
				return false;
		} else if (!startDateTime.equals(other.startDateTime))
			return false;
		if (start_date == null) {
			if (other.start_date != null)
				return false;
		} else if (!start_date.equals(other.start_date))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (taskText == null) {
			if (other.taskText != null)
				return false;
		} else if (!taskText.equals(other.taskText))
			return false;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}

}
