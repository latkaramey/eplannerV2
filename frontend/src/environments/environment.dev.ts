const environments = [
    {
        name : 'local',
        host : 'localhost',
        port : '4200',
        apibase : 'http://localhost:5000/eplanner'
    }
]

const currentEnv = environments.find((item : any) =>{
    return item.host === window.location.hostname && (item.port === '' || item.port === window.location.port)
});






const host = currentEnv ? currentEnv.apibase : null;

if(!host){
    console.warn('Environment setup not done', window.location.hostname, window.location.port);
}

export const environment = {

    



    appTitle : 'e-Planner(DEV) | Company Name',
    host : host,
    production : false,
    api : {
        resource : `${host}/resource`,
        getResources : `${host}/resources`,
        getTasks : `${host}/tasks`,
        getMachineStatus : `${host}/getMachineStatus`,
        getGanttTasks : `${host}/tasks`,
        getLinks : `${host}/links`,
        getStaff : `${host}/staff`,
        getDepartments : `${host}/departments`,
        singletaskUrl: `${host}/task`,
        tasks:`${host}/tasks`,
        loadPlan:`${host}/rawInput`,
        auth:`${host}/auth`,
        login:`${host}/auth/signin`,
        signup:`${host}/auth/signup`,
        department:`${host}/department`,
        alignedTask:`${host}/alignedtasks`,
        start: `${host}/start`,
        hold: `${host}/hold`,
        finish: `${host}/finish`  , 
        loadResourceLib:`${host}/resourcelib`   ,
        autoSchedule:`${host}/autoSchedule` ,
        autoScheduleFlag:`${host}/autoScheduleFlag`,
        cleanup: `${host}/cleanup` ,
        getPriorityAndEffortsStat : `${host}/priorityAndEffortsStat`,
        getMachineLoadingStat : `${host}/machineLoadingStat`,
        getWorkOrdersCountStat : `${host}/workOrdersCountStat`,
        getWorkOrdersEffortsStat : `${host}/workOrdersEffortsStat`,
        getScheduleAdhrenceStat : `${host}/scheduleAdherenceStat`


    }

   

}

