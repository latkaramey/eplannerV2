package com.gantt.springboot.rest.controller;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gantt.springboot.rest.dao.Task;
import com.gantt.springboot.rest.dao.TaskRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TimerResourcce {

	@Autowired
	TaskRepository taskRepo;

	DecimalFormat df = new DecimalFormat("#.##");

	@PutMapping("/start/{taskID}")
	public Task startTime(@PathVariable String taskID) {
	//	System.out.println("printing task id =====" + taskID);
		Optional<Task> task = taskRepo.findById(Long.parseLong(taskID));
		if (task.isPresent()) {

			task.get().setStartDateTime(LocalDateTime.now());
			task.get().setStatus("In Progress");
			taskRepo.save(task.get());
		}
		return task.get();
	}

	@PutMapping("/hold/{taskID}")
	public Task holdTime(@PathVariable String taskID) {

		Optional<Task> task = taskRepo.findById(Long.parseLong(taskID));
		if (task.isPresent()) {
			//if (task.get().getStatus().equals("IN PROGRESS")) {
				Task actualTask = task.get();

				double minutes = ChronoUnit.MINUTES.between(task.get().getStartDateTime(), LocalDateTime.now());
				double hrs = task.get().getCompletedHours() + (minutes / 60);
			//	System.out.println("printing completed hours => " + hrs);
				actualTask.setCompletedHours(Double.valueOf(df.format(hrs)));
				double progress = actualTask.getCompletedHours() / actualTask.getDuration();
				actualTask.setProgress(Double.valueOf(df.format(progress)));
			//	System.out.println(actualTask.getCompletedHours());
				actualTask.setStatus("On hold");
				taskRepo.save(actualTask);
		//	}
		}
		return task.get();
	}

	@PutMapping("/finish/{taskID}")
	public List<Task> finishTime(@PathVariable Long taskID) {
		Optional<Task> task = taskRepo.findById(taskID);
		if (task.isPresent()) {
			task.get().setStatus("COMPLETED");
			
	
			taskRepo.save(task.get());
		}
		return taskRepo.findByStatusAndResourceAndResourceGroup("COMPLETED",task.get().getResource(),task.get().getResourceGroup());
	}

}