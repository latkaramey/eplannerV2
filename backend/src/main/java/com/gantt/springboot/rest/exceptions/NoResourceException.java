package com.gantt.springboot.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class NoResourceException extends RuntimeException {

	public NoResourceException(String exception) {
		super(exception);
	}

}
