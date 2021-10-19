package com.gantt.springboot.rest.exceptions;

public class TaskNotFoundException extends RuntimeException {

	public TaskNotFoundException(String exception) {
		super(exception);
	}

}
