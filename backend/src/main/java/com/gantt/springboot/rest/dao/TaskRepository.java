package com.gantt.springboot.rest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{

	List<Task> findByResource(String machineResource);
	
	List<Task> findByResourceAndResourceGroup(String machineResource, String resourceGroup);

	List<Task> findByStatus(String string);

	List<Task> findByStatusAndResourceAndResourceGroup(String string, String resource, String resourceGroup);

	
	List<Task> findAllByType(String type);

	List<Task> findByParent(Long parent);
	
	
	@Query("SELECT MAX(t.priority) FROM Task t where t.parent = :parent") 
   Integer findMaxPriority(@Param("parent") long parent);
	
	@Query("SELECT stage FROM Task t where t.parent = :parent") 
	String findParentStage(@Param("parent") long parent);
	
	
	
	
	
	@Modifying
	@Query("Update Task set owner_id = null,resource = null") 
	void updateOwnerResource();
	
	
}
