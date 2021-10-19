package com.gantt.springboot.rest.service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gantt.springboot.rest.dao.Department;
import com.gantt.springboot.rest.dao.DepartmentRepository;
import com.gantt.springboot.rest.dao.Link;
import com.gantt.springboot.rest.dao.LinkRepository;
import com.gantt.springboot.rest.dao.Machine;
import com.gantt.springboot.rest.dao.ParamRepository;
import com.gantt.springboot.rest.dao.Params;
import com.gantt.springboot.rest.dao.Staff;
import com.gantt.springboot.rest.dao.StaffRepository;
import com.gantt.springboot.rest.dao.Task;
import com.gantt.springboot.rest.dao.TaskRepository;
import com.gantt.springboot.rest.model.RawInput;

import util.TaskStatus;

import com.gantt.springboot.rest.exceptions.DuplicateProjectException;

@Service
public class TaskPopService implements InitializingBean {

	@Autowired
	TaskRepository taskRepo;

	@Autowired
	LinkRepository linkRepo;

	@Autowired
	DepartmentRepository depRepo;

	@Autowired
	StaffRepository staffRepo;

	Boolean duplicate = false;

	@Autowired
	ParamRepository paramRepo;

	Map<String, Long> relationMap;

	// Long i = (long) 0 ;

	public void splitandPushV2(List<RawInput> inputList) throws ParseException, CloneNotSupportedException {

		Set filterProject = new HashSet<>();

		inputList.forEach(item -> filterProject.add(item.getStage() + "~" + item.getWorkOrder()));

		List<Task> taskList = new ArrayList<>();

		Map<String, Long> subRelationMap = new HashMap<>();
		String lastdate = null;
		String lastWorkOrder = null;
		String poDetails = null;

		Long i = System.currentTimeMillis() / 1000;

		for (RawInput inputItem : inputList) {
			Task task = new Task();
			if (inputItem.getStartDate() != null) {
				lastdate = inputItem.getStartDate() + " 06:00";

			}

			if (inputItem.getWorkOrder() != null) {
				lastWorkOrder = inputItem.getWorkOrder();

			}

			if (inputItem.getPoDetails() != null) {
				poDetails = inputItem.getPoDetails();
			}

			task.setStage(inputItem.getStage());
			
			task.setStatus(task.getStage());
			task.setPriority(Integer.parseInt((inputItem.getPriority() == null ? "0" : inputItem.getPriority())));

			task.setStart_date(lastdate);
			task.setPoDetails(poDetails);
			//task.setStatus(calstatus(lastdate));
			
			
//			switch(task.getStage())
//				
//				{
//			
//				 case "Planning":
//					 task.setStatus(TaskStatus.valueOf("PLANNED").toString()); 
//					 
//					 
//				 case "Release":
//					 task.setStatus(TaskStatus.valueOf("RELEASED").toString()); 
//				
//				 case "Scheduled":
//					 task.setStatus(TaskStatus.valueOf("SCHEDULED").toString()); 	 
//				
//				}
				
			
			
			
			task.setType(inputItem.getOperation());
			task.setResourceGroup(inputItem.getResourceGroup());
			// task.setResource(inputItem.getResource());

			if (relationMap.get(inputItem.getStage()) == null) {
				relationMap.put(inputItem.getStage(), i);

				task.setId(i);
				task.setType("project");
				task.setText(inputItem.getStage());

				taskList.add(task);
				i++;

				Task subProject = (Task) task.clone();

				subProject.setText(inputItem.getWorkOrder());
				subProject.setId(i);
				subProject.setParent(task.getId());

				taskList.add(subProject);
				subRelationMap.put(inputItem.getWorkOrder(), subProject.getId());
				i++;

				Task subTask = (Task) task.clone();
				subTask.setTaskText(
						inputItem.getStage() + "-" + inputItem.getWorkOrder() + "-" + inputItem.getOperation());
				subTask.setText(inputItem.getOperation());
				subTask.setId(i);
				subTask.setParent(subProject.getId());

				subTask.setDuration(convertNumber(inputItem.getEstimatedTime(), inputItem.getSetupTime(),
						inputItem.getTearDownTime(), inputItem.getTransferTime()));

				subTask.setType("task");

				subTask.setPredecessor(
						inputItem.getStage() + "~" + inputItem.getWorkOrder() + "~" + inputItem.getPredecessor());
				subTask.setLinkOperation(
						inputItem.getStage() + "~" + inputItem.getWorkOrder() + "~" + inputItem.getOperation());

				taskList.add(subTask);

				i++;

			}

			else {

				// if (subRelationMap.get(inputItem.getWorkOrder()) == null)
				if (inputItem.getWorkOrder() == null) {
					// subRelationMap.put(lastWorkOrder, i);
					task.setType("task");
					task.setParent(subRelationMap.get(lastWorkOrder));
					task.setText(inputItem.getOperation());
					task.setTaskText(inputItem.getStage() + "-" + lastWorkOrder + "-" + inputItem.getOperation());
					task.setId(i);
					taskList.add(task);
					task.setDuration(convertNumber(inputItem.getEstimatedTime(), inputItem.getSetupTime(),
							inputItem.getTearDownTime(), inputItem.getTransferTime()));
					task.setPredecessor(inputItem.getStage() + "~" + lastWorkOrder + "~" + inputItem.getPredecessor());
					task.setLinkOperation(inputItem.getStage() + "~" + lastWorkOrder + "~" + inputItem.getOperation());

					taskList.add(task);
					i++;

				}

				else {

					subRelationMap.put(inputItem.getWorkOrder(), i);
					task.setParent(relationMap.get(inputItem.getStage()));
					task.setText(inputItem.getWorkOrder());
					task.setType("project");

					task.setId(i);
					taskList.add(task);
					i++;

					//
					Task subTask = (Task) task.clone();
					subTask.setText(inputItem.getOperation());
					subTask.setTaskText(
							inputItem.getStage() + "-" + inputItem.getWorkOrder() + "-" + inputItem.getOperation());
					subTask.setId(i);
					subTask.setParent(task.getId());
					subTask.setType("task");
					subTask.setPredecessor(
							inputItem.getStage() + "~" + inputItem.getWorkOrder() + "~" + inputItem.getPredecessor());
					subTask.setLinkOperation(
							inputItem.getStage() + "~" + inputItem.getWorkOrder() + "~" + inputItem.getOperation());

					subTask.setDuration(convertNumber(inputItem.getEstimatedTime(), inputItem.getSetupTime(),
							inputItem.getTearDownTime(), inputItem.getTransferTime()));

					taskList.add(subTask);
					i++;

					//

				}

			}
		}

		taskRepo.findAll().forEach(item -> {
			if (null != item.getTaskText()) {
				filterProject.add(item.getTaskText());
			}
		});

		taskList.stream().distinct().forEach(ip -> {
			if (null != ip.getTaskText() && filterProject.contains((ip.getTaskText()))) {
				duplicate = true;

				throw new DuplicateProjectException("Below Project is duplicated" + ip.getTaskText());
			}

		});

		if (!duplicate) {

			// resourcePopulator(taskList);

			// taskList.stream().distinct().filter(task ->
			// task.getType().equals("task")).forEach(task ->

			// task.setOwner_id(staffRepo.findByLabel(task.getResource()).getKey()));

			populateLinks(taskList);

			taskRepo.saveAll(taskList);

		}

		List<Params> paramList = new ArrayList<>();

		relationMap.forEach((key, value) -> {
			Params par = new Params();
			par.setKey(key);
			par.setValue(value.toString());
			par.setParamCode("persistentStage");
			paramList.add(par);

		});

		paramRepo.saveAll(paramList);

	}

	private String calstatus(String lastdate) throws ParseException {

		DateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		Date startDate = formatter.parse(lastdate);

		Date currentDate = new Date();

		if (startDate.compareTo(currentDate) <= 0) {
			return "In Progress";
		} else if (startDate.compareTo(currentDate) > 0)

		{
			return "To be started";
		}

		return null;
	}

	private void resourcePopulator(List<Task> taskList) {

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

	private void populateLinks(List<Task> taskList) {

		List<Task> inputLinkTask = taskList.stream().distinct().filter(task -> task.getType().equals("task"))
				.collect(Collectors.toList());

		Map<String, Long> linkMap = new HashMap<>();
		Map<String, Long> reverseLinkMap = new HashMap<>();

		inputLinkTask.forEach(inputLink -> {
			linkMap.put(inputLink.getLinkOperation(), inputLink.getId());
			reverseLinkMap.put(inputLink.getPredecessor(), inputLink.getId());
		});

		List<Link> links = new ArrayList<Link>();
		
		Long counter = linkRepo.findMaxId();
		if (counter == null || counter == 0) {
			counter = (long) 1;
		} else {
			counter++;
		}

		for (Task task : inputLinkTask) {
			Link link = new Link();
			link.setId(counter);
			link.setSource(linkMap.get(task.getPredecessor()));
			// link.setTarget(reverseLinkMap.get(task.getLinkOperation())==null?null:reverseLinkMap.get(task.getLinkOperation())-1);
			link.setTarget(task.getId());
			link.setType(0);
			links.add(link);
			counter++;
		}

		// System.out.println(reverseLinkMap.toString());

		// links = links.stream().filter(link->(link.getSource()!=null &&
		// link.getTarget()!= null)).collect(Collectors.toList());

		linkRepo.saveAll(links);

	}

	Double convertNumber(String... attribs) {
		Double duration = (double) 0;

		for (String s : attribs) {

			if (null != s) {
				duration = duration + Double.parseDouble(s);

			}

		}

		return duration;

	}

	@Override
	public void afterPropertiesSet() throws Exception {

		relationMap = new HashMap<>();
		Optional<List<Params>> params = paramRepo.findByParamCode("persistentStage");

		if (params.isPresent()) {

			System.out.println("Hitting if ");

			params.get().forEach(param -> relationMap.put(param.getKey(), Long.parseLong(param.getValue())));

		} else {
			System.out.println("Hitting Else ");

		}
	}

}
