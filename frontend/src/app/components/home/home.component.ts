import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base.page';
import { Title } from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { DashboardService } from 'src/app/services/DashboardService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePage implements OnInit {

  readonly colors = ['#2c3e50','#18bc9c','#2384c6','#c3e6cb','#dc3545','#6c757d'];

  constructor(private title: Title, private dashboardService : DashboardService) {
    super(title);
    super.setTitle("Home");
  }

  ngOnInit() {
    let effortsData = [];  
    this.dashboardService.getPriorityAndEfforts().subscribe(
      (data) => { effortsData.push(data); },
      (err) => { console.error("Error while fetching data of priority and efforts")},
      () => {
        this.createLineChart(effortsData);
       }
    );
     
	let machineLoadingData = []; 
	this.dashboardService.getMachineLoadingStat().subscribe(
		(data) => { machineLoadingData.push(data); },
      	(err) => { console.error("Error while fetching data of schedule adherence")},
      	() => {
        	this.createBarChart(machineLoadingData);
       	}
	)  
    
	let workOrdersCountData = [];
	this.dashboardService.getWorkOrdersCountStat().subscribe(
		(data) => { workOrdersCountData.push(data); },
      	(err) => { console.error("Error while fetching data of work orders count")},
      	() => {
        	this.createPieChart(workOrdersCountData,'chDonut1');
       	}
	)
	
	let workOrdersEffortsData = [];
	this.dashboardService.getWorkOrdersEffortsStat().subscribe(
		(data) => { workOrdersEffortsData.push(data); },
      	(err) => { console.error("Error while fetching data of work orders efforts")},
      	() => {
        	this.createPieChart(workOrdersEffortsData,'chDonut2');
       	}
	)

	let scheduleAdherenceData = [];
	this.dashboardService.getScheduleAdhrenceStat().subscribe(
		(data) => { scheduleAdherenceData.push(data); },
      	(err) => { console.error("Error while fetching data of schedule adherence")},
      	() => {
        	this.createPieChart(scheduleAdherenceData,'chDonut3');
       	}
	)
  }

  createPieChart(pieChartData,chartId){
	let labels : string[] = [];
	let chartData : number[] = [];
	if(pieChartData && pieChartData.length > 0){
		pieChartData.forEach(element => {
		  labels.push(element['text']);
		  chartData.push(element['progress']*100);
		});
	  }
	let pieChartConfig = this.getChartConfig(labels,chartData);
    var pieChart = new Chart(chartId, pieChartConfig);
  }

  createLineChart(lineChartData){
    let labels : string[] = [];
    let chartData : number[] = [];
    if(lineChartData && lineChartData.length > 0){
      lineChartData.forEach(element => {
		labels.push(element['text']);
		chartData.push(element['progress']*100);
      });
    }
    console.log("labels ="+labels); 
    var myLineChart = new Chart('chLine', {
      type: 'line',
      data: {
			  labels: labels,
			  datasets: [{
				data: chartData,
				backgroundColor: 'transparent',
				borderColor: this.colors[0],
				borderWidth: 4,
				pointBackgroundColor: this.colors[0]
			  }]
			},
      options: {
				scales: {
				  xAxes: [{
					ticks: {
					  beginAtZero: false
					}
				  }],
				  yAxes: [{
                   ticks: { beginAtZero: true,steps: 10,stepValue: 10,min: 0,max: 100}
               }]
				},
				legend: {
				  display: false
				},
				tooltips: {
					callbacks: {
						label: function(tooltipItem, data) {
							return 'Scheduled Date :'+lineChartData[tooltipItem.index].start_date; 
							//['Scheduled Date : 25-Aug-2018','Expiry Date : 25-Oct-2018'];
						}
					}
				},
				responsive: true
			  }
    });
  }

  createBarChart(barChartData){
	let labels : string[] = [];
	let availabilityData : number[] = [];
	let maintenanceData : number[] = [];
	let mttrData : number[] = [];
    if(barChartData && barChartData.length > 0){
		barChartData.forEach(element => {
		labels.push(element['text']);
		availabilityData.push(element['availability']*100);
		maintenanceData.push(element['maintenance']*100);
		mttrData.push(element['mttr']*100);
      });
    }
	var barChart = new Chart('chBar', {
		type: 'bar',
		data: {
				  labels: labels,
				  datasets: [{
					data: availabilityData,
					backgroundColor: this.colors[1]
				  },
				  {
					data: maintenanceData,
					backgroundColor: this.colors[0]
				  },
				  {
					data: mttrData,
					backgroundColor: this.colors[2]
				  }
				  ]
			  },
		options: {
				  legend: {
					display: false
				  },
				  scales: {
					xAxes: [{ barPercentage: 0.4, categoryPercentage: 0.5 }],
					yAxes: [{
						 ticks: {
							 beginAtZero: true, steps: 10, stepValue: 10, min: 0, max: 100
						 }
					 }]
				  },
				  tooltips: {
					  callbacks: {
						  label: function(tooltipItem, data) {
							  let availability = 'Availability : '+
							  	barChartData[tooltipItem.index].availability*100+'%';
							  let maintenance = 'Maintenance : '+
							  	barChartData[tooltipItem.index].maintenance*100+'%';
							  let mttr = 'MTTR : '+barChartData[tooltipItem.index].mttr*100+'%';
							  return  [availability,maintenance,mttr];
						  }
					  }
				  }
			  }
	  });
  }

  getChartConfig(labels,data){
    return {
      type: 'pie',
      data: {
				labels: labels,
				datasets: [
				  {
					backgroundColor: this.colors.slice(0,3),
					borderWidth: 0,
					data: data
				  }
				]
			},
      options:  {
        cutoutPercentage: 85, 
        legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
      }
    }
  } 

}
