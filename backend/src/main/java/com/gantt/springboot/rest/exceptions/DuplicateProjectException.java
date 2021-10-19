package com.gantt.springboot.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicateProjectException extends RuntimeException {

	public DuplicateProjectException(String exception) {
		super(exception);
	}

}
