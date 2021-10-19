package com.gantt.springboot.rest.dao;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Params")
public class Params {
	
	
	public Params()
	{
		
	}
	
	@Id
	private String key;
	
	private String paramCode;
	
	public String getParamCode() {
		return paramCode;
	}

	public void setParamCode(String paramCode) {
		this.paramCode = paramCode;
	}

	private String value;

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Params [key=" + key + ", value=" + value + "]";
	}
	
	
	
	

}
