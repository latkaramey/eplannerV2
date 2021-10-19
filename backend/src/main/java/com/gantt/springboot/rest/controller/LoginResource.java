package com.gantt.springboot.rest.controller;

import java.util.Collection;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.gantt.springboot.rest.model.UserResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
// @CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class LoginResource {

	@GetMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200/")
	public ResponseEntity<UserResponse> loginUser() {

		UserResponse resp = new UserResponse();

		Object principal = SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();

		String username = ((UserDetails) principal).getUsername();

		resp.setusername(username);
		Collection<? extends GrantedAuthority> roleLst = ((UserDetails) principal)
				.getAuthorities();

		for (GrantedAuthority sga : roleLst) {
			resp.setUserRole(sga.toString());
		}

		return new ResponseEntity<>(resp, HttpStatus.OK);

	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("OPTIONS");
		config.addAllowedMethod("GET");
		config.addAllowedMethod("POST");
		config.addAllowedMethod("PUT");
		config.addAllowedMethod("DELETE");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}
}
