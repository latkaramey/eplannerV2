package com.gantt.springboot.rest.controller;

import java.net.URI;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Stack;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
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
import com.gantt.springboot.rest.dao.Link;
import com.gantt.springboot.rest.dao.LinkRepository;
import com.gantt.springboot.rest.dao.ParamRepository;
import com.gantt.springboot.rest.dao.Params;
import com.gantt.springboot.rest.dao.ResourceAllocation;
import com.gantt.springboot.rest.dao.ResourceAllocationRepository;
import com.gantt.springboot.rest.dao.ResourceLibrary;
import com.gantt.springboot.rest.dao.ResourceLibraryRepository;
import com.gantt.springboot.rest.dao.ResourceRequest;
import com.gantt.springboot.rest.dao.StaffRepository;
import com.gantt.springboot.rest.dao.Task;
import com.gantt.springboot.rest.dao.TaskRepository;
import com.gantt.springboot.rest.dao.TaskTrailRepository;
import com.gantt.springboot.rest.exceptions.TaskNotFoundException;
import com.gantt.springboot.rest.model.RawInput;
import com.gantt.springboot.rest.service.ResourceMapperService;
import com.gantt.springboot.rest.service.TaskPopService;

import util.DateUtil;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskResource {

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
	private DepartmentRepository depRepo;

	@Autowired
	private TaskTrailRepository trailRepo;

	@Autowired
	private LinkRepository linkRepo;

	@Autowired
	TaskPopService taskservice;

	@Autowired
	ResourceMapperService mapService;

	@Autowired
	StaffRepository staffRepo;

	@Autowired
	ResourceAllocationRepository allocResource;

	@Autowired
	ResourceLibraryRepository resourceLib;

	@Autowired
	ParamRepository paramRepo;
	
	 @Value("${release.priority}")
	private Integer releasePriority;
	
	
	 @Value("${planning.priority}")
	private Integer  planningPriority;

	// static boolean autoschedule = false;

	@GetMapping("/tasks")
	public List<Task> retrieveAllTasks() {

		List<Task> formattedList = taskRepository.findAll();

//		Collections.sort(formattedList, new Comparator<Task>() {
//			
//			 @Override
//	            public int compare(Task o1, Task o2) {
//	                return o1.getPriority() - o2.getPriority();
//	            }
//			
//		});

		formattedList.sort((o1, o2) ->DateUtil.convertToDate( o1.getStart_date()).compareTo (DateUtil.convertToDate(o2.getStart_date())));
		return formattedList;
	}

	@GetMapping("/autoScheduleFlag")
	public Params autoScheduleFlag() {

		Params pr;

		Optional<Params> param;
		if (paramRepo.existsById("schedulebylib")) {

			param = paramRepo.findById("schedulebylib");
			pr = param.get();
			return pr;
		}

		else {

			pr = new Params();
			pr.setKey("schedulebylib");
			pr.setValue("ON");
			paramRepo.save(pr);
			return pr;

		}

	}

	@GetMapping("/tasks/{id}")
	public Task retrieveTask(@PathVariable Long id) {
		Optional<Task> task = taskRepository.findById(id);

		if (!task.isPresent())
			throw new TaskNotFoundException("id-" + id);

		return task.get();
	}

	@DeleteMapping("/tasks/{id}")
	public void deleteTask(@PathVariable Long id) {
		// System.out.println("Reaching in DELETE");

		taskRepository.deleteById(id);
	}

	@PostMapping("/rawInput/{selectedStage}")
	public ResponseEntity<Object> createTasks(@RequestBody List<RawInput> inputList, @PathVariable String selectedStage)
			throws CloneNotSupportedException, ParseException {
		System.out.println("reaching to raw input stage");
		taskservice.splitandPushV2(inputList);
		Params pr;
		pr = new Params();
		Optional<Params> param;
		param = paramRepo.findById("schedulebylib");
		pr.setKey("schedulebylib");
		pr.setValue("ON");
		paramRepo.save(pr);
		
		return ResponseEntity.noContent().build();
		// taskservice.splitandPush(inputList,selectedStage);
	}

	@PostMapping("/task")
	public ResponseEntity<Object> createTask(@RequestBody Task task) {
		
		List<Department> depts = depRepo.findAll();
	
		Map<Integer,String> depMap = new HashMap<>();
		
		depts.forEach(dep-> depMap.put(dep.getKey(), dep.getLabel()));

		// System.out.println("printing the task ====> " + task);
		
		if(null == task.getPriority())
		{
			
	System.out.println("printing updated task "+task);
			Task ptask = taskRepository.findById(task.getParent()).get();
			task.setPriority(ptask.getPriority());
			task.setPoDetails(ptask.getPoDetails());
			task.setStage(ptask.getStage());
			task.setStatus(ptask.getStatus());
			task.setInitialStartDate(task.getStart_date());
			task.setInitialEndDate(task.getEnd_date());
			
			task.setResourceGroup(depMap.get(Integer.parseInt(task.getResourceGroup())));
			String stage = ptask.getStage() ==null?"": ptask.getStage();
			String text = ptask.getText() == null?"":ptask.getText();
			String ttext = task.getText() == null?"":task.getText();
			
			task.setLinkOperation(stage+ "~"+text+"~"+ttext);
			task.setTaskText(stage+ "~"+text+"~"+ttext);
			
			if(taskRepository.findById(task.getId()).isPresent())
			{
				System.out.println("printing the task ====> " + task);
			}
			else
			{
				task.setResourceGroup(depMap.get(Integer.parseInt(task.getResourceGroup())));
			taskRepository.saveAndFlush(task);
			}
			
			
		}
		
		
		
		

		Task savedTask = taskRepository.save(task);
		
		
		

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedTask.getId())
				.toUri();

		return ResponseEntity.created(location).build();

	}

	@PutMapping("/tasks/{id}")
	public ResponseEntity<Object> updateTask(@RequestBody Task poptask, @PathVariable Long id) {
//		if (autoschedule) {
//			return ResponseEntity.noContent().build();
//		}
		List<Department> depts = depRepo.findAll();
		
		Map<Integer,String> depMap = new HashMap<>();
		
		depts.forEach(dep-> depMap.put(dep.getKey(), dep.getLabel()));
		
		System.out.println("calling api "+ id + " "+LocalDateTime.now() );

		Optional<Task> taskOptional = taskRepository.findById(id);

		// System.out.println("printing updated task == " + taskOptional.get());

		if (!taskOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		} else {

			Task originalTask = taskOptional.get();

//			System.out.println(task.getEnd_date() + task.getTaskText());
//
//			System.out.println("Here is  my  original start date " + task.getStart_date());

			if (poptask.getStart_date().contains("T")) {
				dateManipulationStartDate(poptask);

			}

			if (poptask.getEnd_date().contains("T")) {
				dateManipulationEndDate(poptask);

			}
//			
//			if (poptask.getParent()!= null &&  poptask.getText() != null && poptask.getType().equalsIgnoreCase("project") )
//			{

//				System.out.println("poptask =>" +poptask );
//				System.out.println("originalTask =>" +originalTask );
//				
//			}
//			
//			
//			
//			
			if (!(poptask.getParent().equals(originalTask.getParent())) && poptask.getParent() != 0) {

				System.out.println("going inside manage migration == ");
				manageMigration(poptask, originalTask);

			}

			else {

				if (poptask.getType().equalsIgnoreCase("project")
						&& (!poptask.getPriority().equals(originalTask.getPriority()))) {
					System.out.println("going inside priority migration == "+poptask.getId());
					managePriority(poptask, originalTask);

				}

				poptask.setId(id);
				
				if(null == poptask.getPriority())
				{
			
					Task ptask = taskRepository.findById(poptask.getParent()).get();
					poptask.setPriority(ptask.getPriority());
					ptask.setInitialStartDate(ptask.getStart_date());
					ptask.setInitialEndDate(ptask.getInitialEndDate());
					
				}
				
				if(poptask.getResourceGroup()!= null &&(!(originalTask.getResourceGroup()) .equalsIgnoreCase (poptask.getResourceGroup())))
				{
					poptask.setResourceGroup(depMap.get(Integer.parseInt(poptask.getResourceGroup())));
				}
				
				
				poptask.setInitialStartDate(poptask.getStart_date());
				poptask.setInitialEndDate(poptask.getEnd_date());
				taskRepository.save(poptask);
			}
			return ResponseEntity.noContent().build();

		}

	}

	private void manageMigration(Task poptask, Task originalTask) {
		// TODO Auto-generated method stub
		System.out.println("Inside manage migration method");
		Integer newPriority = taskRepository.findMaxPriority(poptask.getParent()) + 1;
		String parentStage = taskRepository.findParentStage(poptask.getParent());
		poptask.setPriority(newPriority);
		poptask.setStage(parentStage);

		List<Task> updateParentList = taskRepository.findByParent(originalTask.getId());
		updateParentList.add(poptask);
		updateParentList.forEach(changedTask -> {
			changedTask.setStage(parentStage);
			changedTask.setPriority(newPriority);
			changedTask.setOwner_id(null);
			changedTask.setResource(null);
//			changedTask.setResourceGroup(null);

		});

		taskRepository.saveAll(updateParentList);
	}

	private void managePriority(Task poptask, Task originalTask) {
		List<Task> peerList = new ArrayList<>();

		Task parentTask = taskRepository.getOne(poptask.getParent());

	    peerList = taskRepository.findByParent(parentTask.getId());

		peerList.sort((o1, o2) -> o1.getPriority().compareTo(o2.getPriority()));

//		Collections.swap(peerList, poptask.getPriority()-1, originalTask.getPriority()-1);
//		Collections.rotate(peerList, ((poptask.getPriority()-1)-(originalTask.getPriority()-1)));

		if (originalTask.getStage().equalsIgnoreCase("Planning")) {
			peerList.remove((originalTask.getPriority() - planningPriority) - 1);
			peerList.add((poptask.getPriority() - planningPriority) - 1, poptask);
		} else if (originalTask.getStage().equalsIgnoreCase("Release")) {
			peerList.remove((originalTask.getPriority() - releasePriority) - 1);
			peerList.add((poptask.getPriority() - releasePriority) - 1, poptask);
		} else {
			peerList.remove((originalTask.getPriority() - 1));
			peerList.add(poptask.getPriority() - 1, poptask);
		}

		for (int i = 0; i < peerList.size(); i++) {
			peerList.get(i).setPriority(i + 1);

		}

		peerList.forEach(peer -> {
			if (peer.getStage().equalsIgnoreCase("Planning")) {
				peer.setPriority(peer.getPriority() + planningPriority);
			} else if (peer.getStage().equalsIgnoreCase("Release")) {
				peer.setPriority(peer.getPriority() + releasePriority);
			}

		});

		peerList.forEach(p -> {
			List<Task> childList = taskRepository.findByParent(p.getId());
			childList.forEach(cp -> {
				cp.setPriority(p.getPriority());
			});
			taskRepository.saveAll(childList);
		});

		taskRepository.saveAll(peerList);
		// Collections.swap(list, i, j);
	}

	private void dateManipulationEndDate(Task task) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		LocalDateTime convDate = LocalDateTime.parse(task.getEnd_date(), formatter);
		 System.out.println("Here is my converted End date" + convDate);

		DateTimeFormatter otherformatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		task.setEnd_date(convDate.format(otherformatter));

		Task origTask = taskRepository.getOne(task.getId());
	//	if (origTask.getInitialEndDate() == null || origTask.getInitialEndDate().isEmpty()) {
			task.setInitialEndDate(task.getEnd_date());
		//}

		// System.out.println("Here is my converted final start date" +
		// task.getEnd_date());
	}

	private void dateManipulationStartDate(Task task) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		LocalDateTime convDate = LocalDateTime.parse(task.getStart_date(), formatter);
		 System.out.println("Here is my converted start date" + convDate);

		DateTimeFormatter otherformatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		task.setStart_date(convDate.format(otherformatter));

		Task origTask = taskRepository.getOne(task.getId());
		//if (origTask.getInitialStartDate() == null || origTask.getInitialStartDate().isEmpty()) {
			task.setInitialStartDate(task.getStart_date());
		//}

		// System.out.println("Here is my converted final start date" +
		// task.getStart_date());
	}

	@PostMapping("/autoSchedule")
	@Transactional
	public ResponseEntity<Object> autoSchedule() {
		cleanup();
		Optional<Params> param = paramRepo.findById("schedulebylib");
		Params pr;
		pr = param.get();
//		pr.setValue("ON");
//		paramRepo.save(pr);

		freshSchedule();
		
		pr.setValue("OF");
		paramRepo.save(pr);

		System.out.println("Coming here in auto schedule flag");

		return ResponseEntity.noContent().build();

	}

	private void freshSchedule() {
		// TODO Auto-generated method stub
		
		System.out.println("Printing the actual count in alloc table"+allocResource.count());
		List<Task> taskList = new ArrayList<>();
		List<Link> linksList = new ArrayList<>();

		 taskList = taskRepository.findAllByType("task");

		// New Addition on 5 Sep 2021

		taskList.forEach(task -> {
			task.setStart_date(task.getInitialStartDate());
			task.setEnd_date(task.getInitialEndDate());
			task.setResource(null);
			task.setOwner_id(null);
			if(task.getType().equalsIgnoreCase("project"))
			{
				task.setResourceGroup(null);
			}
		});
		taskRepository.saveAll(taskList);

		// New Addition End

		Map<String, LinkedList<String>> rdmap = new HashMap<>();
		List<ResourceLibrary> resourcelib = null;
		resourcelib = resourceLib.findAll();
		resourcelib = resourcelib.stream()
				.filter(resource -> !resource.getResourceStatus().equalsIgnoreCase("maintanance"))
				.collect(Collectors.toList());

		resourcelib.forEach(rel -> {
			if (rdmap.get(rel.getDepartment()) == null) {
				LinkedList<String> resourceList = new LinkedList<>();
				resourceList.add(rel.getResourceName());
				rdmap.put(rel.getDepartment(), resourceList);
			} else {
				rdmap.get(rel.getDepartment()).add(rel.getResourceName());
			}

		});
		
		

	    linksList = linkRepo.findAll();
		Map<Long, Long> targetSourcelinkMap = new HashMap<>();
		Map<Long, Long> sourceTargetlinkMap = new HashMap<>();
		linksList.forEach(lk -> {
			targetSourcelinkMap.put(lk.getTarget(), lk.getSource());
			if ((null != lk.getSource()) && (!lk.getSource().equals(0))) {
				sourceTargetlinkMap.put(lk.getSource(), lk.getTarget());
			}

		});

		 taskList.sort((o1, o2) -> o1.getPriority().compareTo(o2.getPriority()));

		taskList.forEach(task -> {

			if (targetSourcelinkMap.get(task.getId()) == null) {
				// System.out.println("this is a root task" + task.getId());

				ResourceAllocation resourceAllocation = new ResourceAllocation();
				resourceAllocation.setDepartment(task.getResourceGroup());
				resourceAllocation.setResourceName(rdmap.get(task.getResourceGroup()).getFirst());
				resourceAllocation.setTaskID(task.getId());

				LocalDateTime maxResourceDate = allocResource
						.findMaxEndDate((rdmap.get(task.getResourceGroup()).getFirst()));

				if (maxResourceDate == null) {
					resourceAllocation.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
					resourceAllocation.setLastDate(DateUtil.convertStartDate(task.getEnd_date()));

				} else {
					System.out.println("printing start date of task ="+task);
					LocalDateTime taskStartDate = DateUtil.convertStartDate(task.getStart_date());
					LocalDateTime taskEndDate = DateUtil.convertStartDate(task.getEnd_date());
					if (taskStartDate.isBefore(maxResourceDate)) {

						LocalDateTime newTaskStartDate = maxResourceDate.plusHours(1);
						LocalDateTime newEndDate = DateUtil.endDateCalculator(taskStartDate, taskEndDate,
								newTaskStartDate);
						resourceAllocation.setStartDate(newTaskStartDate);
						resourceAllocation.setLastDate(newEndDate);
						task.setStart_date(DateUtil.convertDateToString(newTaskStartDate));
						task.setEnd_date(DateUtil.convertDateToString(newEndDate));

					}
					else
					{
						resourceAllocation.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
						resourceAllocation.setLastDate(DateUtil.convertStartDate(task.getEnd_date()));
					}

				}

				task.setResource(resourceAllocation.getResourceName());

				taskRepository.save(task);

				allocResource.save(resourceAllocation);
				Collections.rotate(rdmap.get(task.getResourceGroup()), 1);

			}

			else {
				// System.out.println("this is not a root task" + task.getId());
				LocalDateTime startDate = DateUtil.convertToDate(task.getStart_date());
				LocalDateTime endDate = DateUtil.convertToDate(task.getEnd_date());
				Optional<Task> parentTaskOptional = taskRepository.findById(targetSourcelinkMap.get(task.getId()));
				Task parentTask = parentTaskOptional.get();
				LocalDateTime parentEndDate = DateUtil.convertToDate(parentTask.getEnd_date());

				task.setStart_date(DateUtil.convertDateToString(parentEndDate));

				LocalDateTime newEndDate = DateUtil.endDateCalculator(startDate, endDate, parentEndDate);
				task.setEnd_date(DateUtil.convertDateToString(newEndDate));

				ResourceAllocation resourceAllocation = new ResourceAllocation();
				resourceAllocation.setTaskID(task.getId());
				resourceAllocation.setDepartment(task.getResourceGroup());
				resourceAllocation.setResourceName(rdmap.get(task.getResourceGroup()).getFirst());

				LocalDateTime maxResourceDate = allocResource
						.findMaxEndDate((rdmap.get(task.getResourceGroup()).getFirst()));

				if (maxResourceDate == null) {
					resourceAllocation.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
					resourceAllocation.setLastDate(DateUtil.convertStartDate(task.getEnd_date()));

				} else {
					LocalDateTime taskStartDate = DateUtil.convertStartDate(task.getStart_date());
					LocalDateTime taskEndDate = DateUtil.convertStartDate(task.getEnd_date());
					if (taskStartDate.isBefore(maxResourceDate)) {

						LocalDateTime newTaskStartDate = maxResourceDate.plusHours(1);
						LocalDateTime newTaskEndDate = DateUtil.endDateCalculator(taskStartDate, taskEndDate,
								newTaskStartDate);

						task.setStart_date(DateUtil.convertDateToString(newTaskStartDate));
						task.setEnd_date(DateUtil.convertDateToString(newTaskEndDate));
						resourceAllocation.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
						resourceAllocation.setLastDate(DateUtil.convertStartDate(task.getEnd_date()));

					} else {

						resourceAllocation.setStartDate(DateUtil.convertStartDate(task.getStart_date()));
						resourceAllocation.setLastDate(DateUtil.convertStartDate(task.getEnd_date()));
					}

				}

				task.setResource(resourceAllocation.getResourceName());

				taskRepository.save(task);
				allocResource.save(resourceAllocation);
				Collections.rotate(rdmap.get(task.getResourceGroup()), 1);

			}

		});

		mapService.resourcePopulator(taskList);

		taskList.forEach(task ->
		{
			task.setOwner_id(staffRepo.findByLabel(task.getResource()).getKey());
			task.setInitialStartDate(task.getStart_date());
			task.setInitialEndDate(task.getEnd_date());
		}

		
		
				
				
				);
	

		taskRepository.saveAll(taskList);
		
		

	}
//
//	private void autoadjustAlgo(List<Task> taskList, Map<Integer, List<Task>> ownerTaskMap) {
//		taskList.forEach(task -> {
//			if (ownerTaskMap.get(task.getOwner_id()) == null) {
//				List<Task> taskLongList = new ArrayList<>();
//
//				taskLongList.add(task);
//				ownerTaskMap.put(task.getOwner_id(), taskLongList);
//
//			} else {
//				ownerTaskMap.get(task.getOwner_id()).add(task);
//			}
//
//		});
//		// System.out.println(ownerTaskMap);
//
//		autoAdjustTaskResource(ownerTaskMap);
//	}
//
//	private void forwardScheduling(List<Task> taskList) {
//
//		Map<String, LocalDateTime> resourceBlockMap = new HashMap<>();
//
//		List<Link> linksList = linkRepo.findAll();
//		Map<Long, Long> targetSourcelinkMap = new HashMap<>();
//		Map<Long, Long> sourceTargetlinkMap = new HashMap<>();
//		linksList.forEach(lk -> {
//			targetSourcelinkMap.put(lk.getTarget(), lk.getSource());
//			if ((null != lk.getSource()) && (!lk.getSource().equals(0))) {
//				sourceTargetlinkMap.put(lk.getSource(), lk.getTarget());
//			}
//
//		});
//
//		List<Task> problematicTask = new ArrayList<>();
//
//		taskList.forEach(task -> {
//
//			LocalDateTime startDate = DateUtil.convertToDate(task.getStart_date());
//			LocalDateTime endDate = DateUtil.convertToDate(task.getEnd_date());
//
//			if (targetSourcelinkMap.get(task.getId()) != null) {
//				Optional<Task> parentTaskOptional = taskRepository.findById(targetSourcelinkMap.get(task.getId()));
//				if (parentTaskOptional.isPresent()) {
//					Task parentTask = parentTaskOptional.get();
//					LocalDateTime parentEndDate = DateUtil.convertToDate(parentTask.getEnd_date());
//
//					if (startDate.isBefore(parentEndDate)) {
//
//						LocalDateTime newEndDate = DateUtil.endDateCalculator(startDate, endDate, parentEndDate);
//
//						if (resourceBlockMap.get(task.getResource()) == null) {
//							resourceBlockMap.put(task.getResource(), newEndDate);
//
//						}
//
//						else {
//
//							if (parentEndDate.isAfter(resourceBlockMap.get(task.getResource()))) {
//
//							} else {
//								problematicTask.add(task);
//								parentEndDate = resourceBlockMap.get(task.getResource());
//								newEndDate = DateUtil.endDateCalculator(startDate, endDate, parentEndDate);
//								resourceBlockMap.put(task.getResource(), newEndDate);
//							}
//
//						}
//
//						task.setStart_date(DateUtil.convertDateToString(parentEndDate));
//						task.setEnd_date(DateUtil.convertDateToString(newEndDate));
//						taskRepository.save(task);
//
//					}
//				}
//
//			}
//		});
//
//		problematicTask.forEach(task -> {
//			System.out.println("This is problematic task -->" + task.getText() + "----" + task.getId());
//
//			taskRecurse(task, sourceTargetlinkMap);
//
//		});
//
//	}
//
//	private void taskRecurse(Task parentask, Map<Long, Long> sourceTargetlinkMap) {
//		// TODO Auto-generated method stub
//		if (sourceTargetlinkMap.get(parentask.getId()) != null) {
//
//			Optional<Task> taskOptional = taskRepository.findById(sourceTargetlinkMap.get(parentask.getId()));
//			if (taskOptional.isPresent()) {
//				Task childTask = taskOptional.get();
//				LocalDateTime startDate = DateUtil.convertToDate(childTask.getStart_date());
//				LocalDateTime endDate = DateUtil.convertToDate(childTask.getEnd_date());
//
//				LocalDateTime parentEndDate = DateUtil.convertToDate(parentask.getEnd_date());
//
//				LocalDateTime newEndDate = DateUtil.endDateCalculator(startDate, endDate, parentEndDate);
//
//				childTask.setStart_date(DateUtil.convertDateToString(parentEndDate));
//				childTask.setEnd_date(DateUtil.convertDateToString(newEndDate));
//				taskRepository.save(childTask);
//				System.out.println("Inside recurse --> " + childTask.getText() + "----" + childTask.getId());
//				taskRecurse(childTask, sourceTargetlinkMap);
//			}
//
//		}
//
//	}

	private void cleanup() {
		depRepo.deleteAll();
		staffRepo.deleteAll();

		allocResource.deleteAll();
		
		resourceLib.updateResourceDate();
		taskRepository.updateOwnerResource();
	}

	private void autoAdjustTaskResource(Map ownerTaskMap) {

		ownerTaskMap.forEach((key, value) ->

		reshuffleTask((List<Task>) value)

		);

//		System.out.println(task.getTaskText()+"-------"+task.getStart_date() +"----"+task.getEnd_date());
//		System.out.println(task.getTaskText()+"-------"+   DateUtil.convertEndDate(task.getStart_date()).plusDays(1)   +"----"+DateUtil.convertEndDate(task.getEnd_date()).plusDays(1));
//	
//		DateTimeFormatter otherformatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
//		task.setStart_date(DateUtil.convertEndDate(task.getStart_date()).plusDays(1).format(otherformatter));
//		task.setEnd_date(DateUtil.convertEndDate(task.getEnd_date()).plusDays(1).format(otherformatter));
//		

	}

	private void reshuffleTask(List<Task> singleOwnerTask) {

		// System.out.println("before ---->");
		// singleOwnerTask.forEach(i->System.out.println(i.getText()+"---------"+i.getStart_date()
		// +"-----"+i.getEnd_date()));
		// System.out.println("after ---->");
		singleOwnerTask.sort((o1, o2) -> o1.getPriority().compareTo(o2.getPriority()));

		for (int i = 0; i < singleOwnerTask.size() - 1; i++) {

			String endDate = DateUtil.dateOpsConverter(singleOwnerTask.get(i + 1).getStart_date(),
					singleOwnerTask.get(i + 1).getEnd_date(), singleOwnerTask.get(i).getEnd_date());

			singleOwnerTask.get(i + 1).setStart_date(singleOwnerTask.get(i).getEnd_date());
			singleOwnerTask.get(i + 1).setEnd_date(endDate);
			// taskRepository.save(singleOwnerTask.get(i + 1));

		}

		taskRepository.saveAll(singleOwnerTask);

	}

	@PutMapping("/alignedtasks")
	public List<Task> retrieveAlignedTasks(@RequestBody ResourceRequest resource) {
		List<Task> filteredTask = new ArrayList<>();
		String machineResource = resource.getMachine();
		String resourceGroup = resource.getGroup();
		filteredTask = taskRepository.findByResourceAndResourceGroup(machineResource, resourceGroup).stream()
				.filter(t -> t.getType().equals("task")).collect(Collectors.toList());

		filteredTask = filteredTask.stream()
				.filter(t ->

				t.getStatus().equalsIgnoreCase("Schedule") || t.getStatus().equalsIgnoreCase("In Progress")
						|| t.getStatus().equalsIgnoreCase("On hold") || t.getStatus().equalsIgnoreCase("COMPLETED"))
				.collect(Collectors.toList());
		
		filteredTask = filteredTask.stream().filter(t->{
			LocalDateTime exDate = DateUtil.convertToDate(t.getStart_date());
			return exDate.isBefore(LocalDateTime.now().plusDays(1));
			
		}).collect(Collectors.toList());
		;
		return filteredTask;
	}

}
