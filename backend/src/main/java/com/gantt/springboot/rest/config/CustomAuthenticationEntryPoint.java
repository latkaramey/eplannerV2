package com.gantt.springboot.rest.config;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

	private final org.slf4j.Logger log = LoggerFactory.getLogger(CustomAuthenticationEntryPoint.class);

	@Override
	public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			AuthenticationException e) throws IOException, ServletException {
		// System.out.println("Pre-authenticated entry point called. Rejecting access");
		httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN, "Bad credentials");
	}

}


