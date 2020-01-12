model = {
    inforCurrentUser : null,
    postedJobs: null,
    appliedJobs : null,
    listJobs : null,
};

model.saveInforCurrentUser = function (inforUser){
    model.inforCurrentUser = inforUser;
}
model.saveListJobs = function (jobs){
    model.listJobs = jobs;
    console.log(model.listJobs);
    
}


