package com.gantt.springboot.rest.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gantt.springboot.rest.dao.Department;
import com.gantt.springboot.rest.dao.DepartmentRepository;
import com.gantt.springboot.rest.dao.Machine;
import com.gantt.springboot.rest.dao.ResourceAllocation;
import com.gantt.springboot.rest.dao.ResourceAllocationRepository;
import com.gantt.springboot.rest.dao.ResourceLibrary;
import com.gantt.springboot.rest.dao.ResourceLibraryRepository;
import com.gantt.springboot.rest.dao.Staff;
import com.gantt.springboot.rest.dao.StaffRepository;
import com.gantt.springboot.rest.dao.Task;
import com.gantt.springboot.rest.dao.TaskRepository;
import com.gantt.springboot.rest.exceptions.NoResourceException;

import util.DateUtil;

@Service
public class ResourceMapperService {

	@Autowired
	TaskRepository taskRepo;

	@Autowired
	ResourceLibraryRepository resourceLib;
	@Autowired
	ResourceAllocationRepository allocResource;

	@Autowired
	StaffRepository staffRepo;

	@Autowired
	DepartmentRepository depRepo;

	public void mapResource(Task task, Map<String, List<String>> rdmap) {

		List<ResourceAllocation> allocationRecords = allocResource.findByDepartment(task.getResourceGroup());

		if (null == allocationRecords || allocationRecords.size() == 0) {

			ResourceAllocation ralloc = new ResourceAllocation();
			ralloc.setDepartment(task.getResourceGroup());
			ralloc.setTaskID(task.getId());

			ralloc.setStartDate(DateUtil.convertStartDate(task.getStart_date()));

			if (null != task.getEnd_date()) {
				ralloc.setLastDate(DateUtil.convertEndDate(task.getEnd_date()));
			} else {
				Long hrs = Double.valueOf(task.getDuration()).longValue();
				ralloc.setLastDate(ralloc.getStartDate().plusHours(hrs));
			}
			if (null != rdmap.get(task.getResourceGroup())) {
				task.setResource(rdmap.get(task.getResourceGroup()).get(0));
			} else {
				throw new NoResourceException(
						"All the resources of department " + task.getResourceGroup() + " are under maintanance");
			}

			ResourceLibrary rlib = resourceLib.findByDepartmentAndResourceName(task.getResourceGroup(),
					task.getResource());

			rlib.setOptimalAvailableDate(ralloc.getLastDate());

			ralloc.setResourceName(task.getResource());
			allocResource.save(ralloc);
			taskRepo.save(task);
		}

		else {

			List<String> totalAvailableResources = rdmap.get(task.getResourceGroup());
			List<String> transactionResources = allocResource.findResourceNameByDepartment(task.getResourceGroup());

			List<String> tobeAllocated = (List<String>) CollectionUtils.subtract(totalAvailableResources,
					transactionResources);

			if (null != tobeAllocated && tobeAllocated.size() > 0)

			{
				String i = tobeAllocated.get(0);
				System.out.println("In Second group --->");
				task.setResource(i);

				ResourceAllocation ralloc = new ResourceAllocation();
				ralloc.setDepartment(task.getResourceGroup());
				ralloc.setTaskID(task.getId());
//				if (task.getStart_date().indexOf(" ") == -1) {
//					task.setStart_date(task.getStart_date() + (" 06:00"));
//				}

				ralloc.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
				if (null != task.getEnd_date()) {
					ralloc.setLastDate(DateUtil.convertEndDate(task.getEnd_date()));
				} else {
					Long hrs = Double.valueOf(task.getDuration()).longValue();
					ralloc.setLastDate(ralloc.getStartDate().plusHours(hrs));
				}
				ResourceLibrary rlib = resourceLib.findByDepartmentAndResourceName(task.getResourceGroup(),
						task.getResource());
				rlib.setOptimalAvailableDate(ralloc.getLastDate());

				ralloc.setResourceName(task.getResource());
				allocResource.save(ralloc);
				taskRepo.save(task);

			}

			else {
				System.out.println("In third  group ---> ");
				List<ResourceLibrary> rLibList = resourceLib.findByDepartment(task.getResourceGroup());
				rLibList = rLibList.stream().filter(rlib -> !rlib.getResourceStatus().equalsIgnoreCase("maintanance"))
						.collect(Collectors.toList());
				rLibList.sort((o1, o2) -> o1.getOptimalAvailableDate().compareTo(o2.getOptimalAvailableDate()));
				task.setResource(rLibList.get(0).getResourceName());

				ResourceAllocation ralloc = new ResourceAllocation();
				ralloc.setDepartment(task.getResourceGroup());
				ralloc.setTaskID(task.getId());
				ralloc.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
				if (null != task.getEnd_date()) {
					ralloc.setLastDate(DateUtil.convertEndDate(task.getEnd_date()));
				} else {
					Long hrs = Double.valueOf(task.getDuration()).longValue();
					ralloc.setLastDate(ralloc.getStartDate().plusHours(hrs));
				}
				ralloc.setResourceName(task.getResource());
				ResourceLibrary rlib = resourceLib.findByDepartmentAndResourceName(task.getResourceGroup(),
						task.getResource());
				rlib.setOptimalAvailableDate(ralloc.getLastDate());
				allocResource.save(ralloc);
				taskRepo.save(task);

			}

		}

	}

	public void resourcePopulator(List<Task> taskList) {
	

		List<Department> deptList = new ArrayList<>();
		Map<String, String> rgmap = new HashMap<>();

		Map<String, Set> rgReverse = new HashMap<>();

		Set<String> resourceSet = new HashSet<>();
		Set<String> resourceGroupSet = new HashSet<>();
		List<Task> inputResourceTask = taskList.stream().distinct().collect(Collectors.toList());

		inputResourceTask.forEach(inputResTask -> {
			rgmap.put(inputResTask.getResource(), inputResTask.getResourceGroup());
			resourceSet.add(inputResTask.getResource());
			resourceGroupSet.add(inputResTask.getResourceGroup());

			if (rgReverse.get(inputResTask.getResourceGroup()) != null) {
				rgReverse.get(inputResTask.getResourceGroup()).add(inputResTask.getResource());
			} else {
				Set<String> reverseResourceSet = new HashSet<>();
				reverseResourceSet.add(inputResTask.getResource());

				rgReverse.put(inputResTask.getResourceGroup(), reverseResourceSet);
			}

		});

		int groupCount = 1;
		Iterator<String> it = resourceGroupSet.iterator();
		while (it.hasNext()) {
			Department dept = new Department();
			dept.setKey(groupCount);
			dept.setLabel(it.next());
			populateMachines(dept, rgReverse);
			deptList.add(dept);

			groupCount++;
		}

		depRepo.saveAll(deptList);

		Iterator<String> itr = resourceSet.iterator();

		List<Staff> staffList = new ArrayList<>();
		int staffCount = deptList.size() + 1;
		while (itr.hasNext()) {
			String staffLabel = itr.next();
			Staff stf = staffRepo.findByLabel(staffLabel);
			if (null == stf) {
				Staff staff = new Staff();
				staff.setKey(staffCount);

				staff.setLabel(staffLabel);

				staff.setDepartment(depRepo.findByLabel(rgmap.get(staffLabel)).getKey());

				staffList.add(staff);
			}
			staffCount++;
		}

		staffRepo.saveAll(staffList);

	}

	private void populateMachines(Department dept, Map<String, Set> rgReverse) {

		rgReverse.get(dept.getLabel()).forEach(m -> {
			Machine m1 = new Machine((String) m);
			dept.getMachineList().add(m1);
		});

	}

	public void loadOwner(List<Task> taskList) {
		taskList.stream().distinct().filter(task -> task.getType().equals("task")).forEach(task ->

		task.setOwner_id(staffRepo.findByLabel(task.getResource()).getKey()));
		taskRepo.saveAll(taskList);
	}

}
