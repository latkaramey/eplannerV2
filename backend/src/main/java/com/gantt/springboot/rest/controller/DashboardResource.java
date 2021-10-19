package com.gantt.springboot.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gantt.springboot.rest.dao.TaskRepository;
import com.gantt.springboot.rest.model.MachineLoadingStat;
import com.gantt.springboot.rest.model.PriorityAndEffortsStat;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardResource {

	@Autowired
	TaskRepository taskRepo;
	
	
	
	@GetMapping("/priorityAndEffortsStat")
	public ResponseEntity<List<PriorityAndEffortsStat>> getPriorityAndEffortsStat() {

		
		List<PriorityAndEffortsStat> psStat = new ArrayList<>();
		taskRepo.findAll().forEach(t -> {
			PriorityAndEffortsStat p = new PriorityAndEffortsStat();
			p.setId(t.getId());
			p.setDuration(t.getDuration());
			p.setProgress(t.getProgress());
			p.setStart_date(t.getStart_date());
			p.setText(t.getText() == null ? t.getTaskText() : t.getText());
			psStat.add(p);

		});
		
		
		return ResponseEntity.ok(psStat);

}
	
	@GetMapping("/machineLoadingStat")
	public ResponseEntity<List<MachineLoadingStat>> getMachineLoadingStat() {

		
		List<MachineLoadingStat> msStat = new ArrayList<>();
		
		
		MachineLoadingStat ms1 = new MachineLoadingStat();
		ms1.setAvailability(0.56);
		ms1.setId(1L);
		ms1.setMaintanance(0.50);
		ms1.setMttr(0.65);
		
		MachineLoadingStat ms2 = new MachineLoadingStat();
		ms2.setAvailability(0.40);
		ms2.setId(2L);
		ms2.setMaintanance(0.55);
		ms2.setMttr(0.69);
		
		
		MachineLoadingStat ms3 = new MachineLoadingStat();
		ms3.setAvailability(0.56);
		ms3.setId(3L);
		ms3.setMaintanance(0.40);
		ms3.setMttr(0.69);
		
		
		msStat.add(ms1);
		msStat.add(ms2);
		msStat.add(ms3);
		
		return ResponseEntity.ok(msStat);

}
	
	
	
	
	
}