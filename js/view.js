const view = {
    currentComponent : null,
};

view.showComponents = function (name){
    view.currentComponent = name;
    switch (name) {
        case 'welcome page':{
            let app = document.getElementById('app')
            app.innerHTML = components.welcomePage

            let employerRegisterBtn = document.getElementById('employer-sign-up-btn')
            employerRegisterBtn.onclick = employerRegisterBtnClickHandle

            let jobSeekerRegisterBtn = document.getElementById('job-seeker-sign-up-btn')
            jobSeekerRegisterBtn.onclick = jobSeekerRegisterBtnClickHandle

            let loginBtn = document.getElementById('already-have-account-btn')
            loginBtn.onclick = () =>{
                view.showComponents('login')
            }



            function employerRegisterBtnClickHandle(){
                view.showComponents('employerRegister');
            }
            
            function jobSeekerRegisterBtnClickHandle(){
                view.showComponents('jobSeekerRegister');
            }
            
            break;
        }
        case 'jobSeekerRegister':{
            let app = document.getElementById('app');
            app.innerHTML = components.jobSeekerRegister;
            let formRegister = document.getElementById('form-register');
            formRegister.onsubmit = registerSubmitHandle;

            function registerSubmitHandle (event){
                event.preventDefault();
                
                let dataUser = {
                    firstName : formRegister.firstName.value,
                    lastName : formRegister.lastName.value,
                    email : formRegister.email.value,
                    password : formRegister.password.value,
                    mobileNumber : formRegister.mobileNumber.value,
                    gender : formRegister.gender.value,
                    dateOfBirth: formRegister.dateOfBirth.value,
                    city : formRegister.city.value,
                    district : formRegister.district.value,
                    jobs: [formRegister.job1.value, formRegister.job2.value, formRegister.job3.value],
                    permissionUser: 'jobSeeker',
                    
                }
                console.log(dataUser);
                controller.register(dataUser)
                

            }


            break;
        }
        case 'employerRegister':{
            let app = document.getElementById('app');
            app.innerHTML = components.employerRegister;
            let formRegister = document.getElementById('form-register');

            let registerSubmitBtn = document.getElementById('register-submit-btn');
            registerSubmitBtn.onclick = registerSubmitHandle;

            function registerSubmitHandle (event){
                event.preventDefault();
                
                let dataUser = {
                    firstName : formRegister.firstName.value,
                    lastName : formRegister.lastName.value,
                    email : formRegister.email.value,
                    password : formRegister.password.value,
                    mobileNumber : formRegister.mobileNumber.value,
                    city : formRegister.city.value,
                    district : formRegister.district.value,
                    permissionUser: 'employer',
                }
                let validateResults = [
                    view.validate(dataUser.email.includes('@'), 'email-error','Đây không phải email' ),
                    view.validate(dataUser.password === formRegister.confirmPassword, 'email-error','Đây không phải email' ),
                ]
                if(allPassed(validateResults)){
                    console.log(dataUser);
                    controller.register(dataUser)
                }
                

            }


            break;
        }
        case 'login':{
            let app = document.getElementById('app');
            app.innerHTML = components.logIn;

            let formLogIn = document.getElementById('log-in-form');
            formLogIn.onsubmit = loginBtnSubmitHandle

            function loginBtnSubmitHandle(e) {
                e.preventDefault();
                controller.logIn({email: formLogIn.email.value, password : formLogIn.password.value})
            }
            break;
        }
        case 'employer':{
            
            let app = document.getElementById('app');
            app.innerHTML = components.employer;
            controller.loadEmployees()

            document.getElementById('control-container').innerHTML = `
                <div id="find-empployee" class="tab">
                        <span>Tìm người</span>
                    </div>
                    <div id="personal-profile" class="tab">
                        <span>Thông tin cá nhân</span>
                    </div>
                    <div id="posted-jobs" class="tab">
                        <span>Công việc đã đăng</span>
                    </div>
            `
            document.getElementById('full-name-bar').innerHTML = 
                model.inforCurrentUser.fullName

            let findEmployeeBtn = document.getElementById('find-empployee')
            findEmployeeBtn.onclick = findEmployeeBtnClickHandle

            let profileEmployerBtn = document.getElementById('personal-profile')
            profileEmployerBtn.onclick = profileEmployerBtnClickHandle

            let jobsPostedBtn = document.getElementById('posted-jobs')
            jobsPostedBtn.onclick = jobsPostedBtnClickHandle
            let postBtn = document.getElementById('post-job')
            postBtn.onclick = () => { $("#add-job-modal").modal('show'); console.log("click");
             }
            

            

            function findEmployeeBtnClickHandle () {
                document.getElementById('main-content').innerHTML = components.listEmployee + components.postJob;
                controller.loadEmployees()
                let postBtn = document.getElementById('post-job')
                postBtn.onclick = () => { $("#add-job-modal").modal('show'); console.log("click")}

            }
            function profileEmployerBtnClickHandle () {
                document.getElementById('main-content').innerHTML = components.employerProfile;
            }
            function jobsPostedBtnClickHandle () {
                document.getElementById('main-content').innerHTML = components.postedJob;
                controller.showPostedJobs()
            }

            

            let formPost = document.getElementById('form-post-job')
            formPost.onsubmit = submitFormPostHandle
            
            function submitFormPostHandle(e){
                let currentUser = firebase.auth().currentUser.email
                e.preventDefault()
                dataPost = {
                    jobTitle: formPost.jobTitle.value,
                    address: formPost.address.value,
                    time: formPost.time.value,
                    jobDescription: formPost.description.value,
                    salary: formPost.salary.value,
                    postOwner: currentUser,
                    applications: []
                }
                controller.addJob(dataPost)
            }

            break;

        }
        case 'employee':{
            
            let app = document.getElementById('app');
            app.innerHTML = components.jobSeeker;
            // controller.showJobsList()
            controller.loadListJobs()

            document.getElementById('control-container').innerHTML = `
                <div id="find-job" class="tab">
                        <span>Tìm việc</span>
                    </div>
                    <div id="employee-profile" class="tab">
                        <span>Thông tin cá nhân</span>
                    </div>
                    <div id="application-jobs" class="tab">
                        <span>Công việc đã chọn</span>
                    </div>
            `
            document.getElementById('full-name-bar').innerHTML =
                model.inforCurrentUser.fullName

            let findJobBtn = document.getElementById('find-job')
            findJobBtn.onclick = findJobBtnClickHandle

            let profileEmployeeBtn = document.getElementById('employee-profile')
            profileEmployeeBtn.onclick = profileEmployeeBtnClickHandle

            let applicationJobsBtn = document.getElementById('application-jobs')
            applicationJobsBtn.onclick = applicationJobsBtnClickHandle
    
            function findJobBtnClickHandle() {
                document.getElementById('main-content').innerHTML = components.listJobs;
                controller.loadListJobs()
            }
            function profileEmployeeBtnClickHandle() {
                document.getElementById('main-content').innerHTML = components.employeeProfile;
                view.setText('fullName',model.inforCurrentUser.fullName)
                view.setText('gender',model.inforCurrentUser.gender)
                view.setText('dateOfBirth', model.inforCurrentUser.dateOfBirth)
                view.setText('mobileNumber', model.inforCurrentUser.mobileNumber)
                view.setText('email', model.inforCurrentUser.email)
                view.setText('self-description', model.inforCurrentUser.description)
                view.setText('city', model.inforCurrentUser.city)
            }
            function applicationJobsBtnClickHandle() {
                document.getElementById('main-content').innerHTML = components.application;
                controller.showJobApplications()
            }
            

            break;

        }
            
    
        default:
            break;
    }
}

view.showListJobs = function(){
    for (let job of model.listJobs) {
        let html = `
        <div class="job-detail-container" id="${job.id}">
                        <div class="job-detail-container-2">
                            <div class="job-detail-left">
                                <a href="#">${job.postOwner}</a>
                            </div>
                            
                            <div class="job-detail-center">
                                <div class="job-detail-wrapper">
                                    <span>Loại CV:</span>
                                    <div class="job-detail" id="jobTitle">${job.jobTitle}</div>
                                </div>
                                <div class="job-detail-wrapper">
                                    <span>Địa chỉ:</span>
                                    <div class="job-detail" id="address">${job.address}</div>
                                </div>
                                <div class="job-detail-wrapper">
                                    <span>Lương</span>
                                    <div class="job-detail" id="salary">${job.salary}</div>
                                </div>
                                <div class="job-detail-wrapper">
                                    <span>Thời gian:</span>
                                    <div class="job-detail" id="time">${job.time}</div>
                                </div>
                                <div class="job-detail-wrapper">
                                    <span>Mo ta cong viec:</span>
                                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                                </div>
                            </div>
                            <button class="apply-job-btn" onclick="jobApplyClickHandle(event,'${job.id}')">Apply</button>
                    </div>`
        document.getElementById('jobs-list-container').innerHTML += html
        // if (job.applications.indexOf(currentUser) < 0) {
        // }
    }
}
view.showListEmployees = function () {
    
    for (let employee of model.listEmployees) {
        let html = `
                    <div class="employees-detail-container" id="${employee.id}">
                        <div class="employees-detail-container-2">
                            <div class="employees-detail-left">
                                <div class="personal-info-wrapper">
                                    <span>Họ và tên:</span>
                                    <div class="personal-info-detail" id="jobType">${employee.fullName}</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>SĐT:</span>
                                    <div class="personal-info-detail" id="address">${employee.mobileNumber}</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>Ngày sinh: </span>
                                    <div class="personal-info-detail" id="salary">${employee.dateOfBirth}</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>Email: </span>
                                    <div class="personal-info-detail" id="date">${employee.email}</div>
                                </div>
                            </div>
                            <div class="employees-detail-center">
                                <div class="personal-info-wrapper">
                                    <span>Giới tính: </span>
                                    <div class="personal-info-detail" id="date">${employee.gender}</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>Địa chỉ: </span>
                                    <div class="personal-info-detail" id="date">${employee.city}</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>Job Tags: </span>
                                    <div class="personal-info-detail" id="date">abc</div>
                                </div>
                                <div class="personal-info-wrapper">
                                    <span>Rate</span>
                                    <div class="personal-info-detail" id="date">${employee.rate}</div>
                                </div>
                            </div>
                            <button class="choose-employee-btn">Choose</button>
                    </div>`
        document.getElementById('employees-list-container').innerHTML += html
    }
}

view.setText = function (id,message){
    document.getElementById(id).innerHTML = message;
}
view.validate = function(condition, idErrTag, message) {
    if(condition){
        view.setText(idErrTag, '')
        return true
    }else{
        view.setText(idErrTag, message)
        return false
    }
}
function allPassed(validateResults) {
    for (const result of validateResults) {
        if (!result) {
            return false
        }
        return true
    }
}

function jobApplyClickHandle(event,id) {
    event.preventDefault()
    controller.updateApplication(id)
    document.getElementById(id).outerHTML = ''
}

function jobCancelClickHandle(event,id) {
    event.preventDefault()
    controller.cancelApplication(id)
    document.getElementById(id).outerHTML = ''
}

function postedJobCancelClickHandle(event,id) {
    event.preventDefault()
    controller.cancelPostedJob(id)
    document.getElementById(id).outerHTML = ''
}