package com.gantt.springboot.rest.exceptions;

public class ResourceNotFoundException extends RuntimeException {

	public ResourceNotFoundException(String exception) {
		super(exception);
	}

}
