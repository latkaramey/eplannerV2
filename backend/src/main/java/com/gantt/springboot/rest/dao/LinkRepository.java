package com.gantt.springboot.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkRepository extends JpaRepository<Link, Long>{

	@Query("SELECT MAX(link.id) FROM Link link ") 
	   Long findMaxId(); 
}
