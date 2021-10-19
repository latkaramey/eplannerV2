package com.gantt.springboot.rest.controller;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gantt.springboot.rest.dao.Department;
import com.gantt.springboot.rest.dao.DepartmentRepository;
import com.gantt.springboot.rest.dao.LinkRepository;
import com.gantt.springboot.rest.dao.Machine;
import com.gantt.springboot.rest.dao.ParamRepository;
import com.gantt.springboot.rest.dao.Resource;
import com.gantt.springboot.rest.dao.ResourceAllocationRepository;
import com.gantt.springboot.rest.dao.ResourceLibrary;
import com.gantt.springboot.rest.dao.ResourceLibraryRepository;
import com.gantt.springboot.rest.dao.ResourceRepository;
import com.gantt.springboot.rest.dao.ResourceRequest;
import com.gantt.springboot.rest.dao.Staff;
import com.gantt.springboot.rest.dao.StaffRepository;
import com.gantt.springboot.rest.dao.TaskRepository;
import com.gantt.springboot.rest.exceptions.ResourceNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ResourceController {

	@Autowired
	private ResourceRepository resourceRepository;

	@Autowired
	private ResourceLibraryRepository libRepo;

	@Autowired
	private StaffRepository staffRepository;

	@Autowired
	private DepartmentRepository departmentRepository;

	@Autowired
	private LinkRepository linkRepository;
	
	@Autowired
	private  TaskRepository taskRepository;
	
	@Autowired
	private ResourceAllocationRepository resourceAllocationRepository;
	
	@Autowired
	ResourceLibraryRepository resourceLib;
	
	
	@Autowired
	ParamRepository paramRepo;
	
	@GetMapping("/resources")
	public List<Resource> retrieveAllResources() {
		return resourceRepository.findAll();
	}
	
	
	
	@DeleteMapping("/cleanup")
	public void cleanUpAll()
	{
		paramRepo.deleteAll();
		linkRepository.deleteAll();
		resourceAllocationRepository.deleteAll();
		resourceRepository.deleteAll();
		departmentRepository.deleteAll();
		staffRepository.deleteAll();
		libRepo.deleteAll();
		taskRepository.deleteAll();	
		
		
	}
	
	

	@GetMapping("/resources/{id}")
	public Resource retrieveResource(@PathVariable Integer id) {
		Optional<Resource> resource = resourceRepository.findById(id);

		if (!resource.isPresent())
			throw new ResourceNotFoundException("id-" + id);

		return resource.get();
	}

	@DeleteMapping("/resources/{id}")
	public void deleteResource(@PathVariable Integer id) {
		resourceRepository.deleteById(id);
	}

	@PostMapping("/resources")
	public ResponseEntity<Object> createResource(@RequestBody Resource resource) {
		Resource savedResource = resourceRepository.save(resource);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedResource.getId()).toUri();

		return ResponseEntity.created(location).build();

	}

	@PutMapping("/resources/{id}")
	public ResponseEntity<Object> updateResource(@RequestBody Resource resource, @PathVariable Integer id) {

		Optional<Resource> resourceOptional = resourceRepository.findById(id);

		if (!resourceOptional.isPresent())
			return ResponseEntity.notFound().build();

		resource.setId(id);

		resourceRepository.save(resource);

		return ResponseEntity.noContent().build();
	}

	@GetMapping("/staff")
	public List<Staff> retrieveAllStaff() {
		return staffRepository.findAll();
	}

	@GetMapping("/departments")
	public List<Department> retrieveAllDepartments() {
		return departmentRepository.findAll();
	}

	@PutMapping("/department")
	public ResponseEntity<Object> updateDepartment(@RequestBody ResourceRequest resource) {
		Department department = departmentRepository.findByLabel(resource.getGroup());
		Map<String,ResourceLibrary> resourceMap = new HashMap<>();
		List<ResourceLibrary> rb = resourceLib.findAll();
		rb.forEach(r -> resourceMap.put(r.getResourceName(), r) );

		List<Machine> machineList = department.getMachineList();

		for (Machine m : machineList) {
			if (m.getMachineName().equals(resource.getMachine())) {
				m.setMachineStatus(resource.getMachineStatus());
				ResourceLibrary rl = resourceMap.get(resource.getMachine());
				rl.setResourceStatus(resource.getMachineStatus());
				resourceLib.save(rl);
				//System.out.println("printing the machine status ===> "+m.getMachineStatus());
				
			}
		}

		department.setMachineList(machineList);

		//System.out.println("Reaching to department object " + resource);

		departmentRepository.save(department);
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/resourcelib")
	public ResponseEntity<Object> buildLibrary(@RequestBody List<ResourceLibrary> resourcelib) {
			libRepo.saveAll(resourcelib);
			return ResponseEntity.noContent().build();
	}

}
