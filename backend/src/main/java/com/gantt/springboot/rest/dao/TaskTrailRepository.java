package com.gantt.springboot.rest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskTrailRepository extends JpaRepository<TaskTrail, Long>{

	
	
	
}
