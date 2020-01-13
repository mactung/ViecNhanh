model = {
    inforCurrentUser : null,
    postedJobs: null,
    appliedJobs : null,
    listJobs : null,
    listEmployees : null,
};

model.saveInforCurrentUser = function (inforUser){
    model.inforCurrentUser = inforUser;
}
model.saveListJobs = function (jobs){
    model.listJobs = jobs;
    console.log(model.listJobs);
    
}
model.saveListEmployees= function (employees){
    model.listEmployees = employees;
    console.log(model.listEmployees);
    
}


