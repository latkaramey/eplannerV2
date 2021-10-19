package com.gantt.springboot.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff, Integer> {

	public Staff findByLabel(String label);

	public Staff findByKey(int staffCount);

}
