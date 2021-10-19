package com.gantt.springboot.rest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParamRepository extends JpaRepository<Params, String> {

	Optional<List<Params>> findByParamCode(String paramcode);
	
	
}
