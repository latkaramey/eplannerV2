package com.gantt.springboot.rest.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceAllocationRepository extends JpaRepository<ResourceAllocation, Integer> {
	
	List<ResourceAllocation> findByDepartment(String department );
	
    @Query("SELECT r.resourceName FROM ResourceAllocation r where r.department = :department") 
    List<String> findResourceNameByDepartment(@Param("department") String department);
    
    @Query("SELECT max(r.lastDate) FROM ResourceAllocation r where r.resourceName = :resourceName") 
    LocalDateTime findMaxEndDate(String resourceName);
    
    
	
}
