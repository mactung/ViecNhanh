model = {
    inforCurrentUser : null,
    postedJobs: null,
    appliedJobs : null,
    listJobs : null,
    listEmployees : null,
    listJobOffers : null,
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
model.savepostedJobs= function (postedJobs){
    model.postedJobs = postedJobs;
    console.log(model.postedJobs); 
}

model.saveListJobOffers = function (jobOffers){
    model.listJobOffers = jobOffers
    console.log(model.listJobOffers);
    
}


