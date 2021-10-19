package com.gantt.springboot.rest.dao;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Resource")
public class Resource {

	@Id
	private Integer id;

	private String text;
	
	
	private Integer parent;


	
	public Resource() {
		super();
	}

	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}


	public Integer getParent() {
		return parent;
	}


	public void setParent(Integer parent) {
		this.parent = parent;
	}
	
	
	


	
}
