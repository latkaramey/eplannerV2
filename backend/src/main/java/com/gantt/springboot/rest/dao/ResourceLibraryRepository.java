package com.gantt.springboot.rest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceLibraryRepository extends JpaRepository<ResourceLibrary, Integer>{

	
 
	List<ResourceLibrary> findByDepartment(String department);
    
    
    ResourceLibrary findByDepartmentAndResourceName(String department,String resourceName);
    
    ResourceLibrary findByResourceName(String resourceName);
    
    @Modifying
    @Query("update ResourceLibrary r set r.optimalAvailableDate = null") 
    void updateResourceDate();
    
 
    
}
