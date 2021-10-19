package com.gantt.springboot.rest.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	Optional<User> findByusername(String username);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
