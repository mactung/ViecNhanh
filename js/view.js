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
            employerRegisterBtn.onclick = employerRegisterBtnClickHandler

            let jobSeekerRegisterBtn = document.getElementById('job-seeker-sign-up-btn')
            jobSeekerRegisterBtn.onclick = jobSeekerRegisterBtnClickHandler

            let loginBtn = document.getElementById('already-have-account-btn')
            loginBtn.onclick = () =>{
                view.showComponents('login')
            }



            function employerRegisterBtnClickHandler(){
                view.showComponents('employerRegister');
            }
            
            function jobSeekerRegisterBtnClickHandler(){
                view.showComponents('jobSeekerRegister');
            }
            
            break;
        }
        case 'jobSeekerRegister':{
            let app = document.getElementById('app');
            app.innerHTML = components.jobSeekerRegister;
            let formRegister = document.getElementById('form-register');
            formRegister.onsubmit = registerSubmitHandler;

            function registerSubmitHandler (event){
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
                    createdAt: new Date().toISOString(),
                    jobOffers: [],
                    jobsPending: [],
                    jobsDone: [],
                    permissionUser: 'employee',
                    
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
            registerSubmitBtn.onclick = registerSubmitHandler;

            function registerSubmitHandler (event){
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
                    createdAt: new Date().toISOString(),
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
            formLogIn.onsubmit = loginBtnSubmitHandler

            function loginBtnSubmitHandler(e) {
                e.preventDefault();
                controller.logIn({email: formLogIn.email.value, password : formLogIn.password.value})
            }
            break;
        }
        case 'employer':{
            let previousTab = 0;
            let app = document.getElementById('app');
            app.innerHTML = components.employer;
            controller.loadEmployees()
            view.displayInforUser()
            view.postJobHandler()
            controller.loadPostedJobs()

            document.getElementById('menu-btn').innerHTML = `
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

            let findEmployeeBtn = document.getElementById('find-empployee')
            findEmployeeBtn.onclick = findEmployeeBtnClickHandler
            document.getElementsByClassName('tab')[0].classList.add('active')

            let profileEmployerBtn = document.getElementById('personal-profile')
            profileEmployerBtn.onclick = profileEmployerBtnClickHandler

            let jobsPostedBtn = document.getElementById('posted-jobs')
            jobsPostedBtn.onclick = jobsPostedBtnClickHandler
            
            

            

            function findEmployeeBtnClickHandler () {
                document.getElementsByClassName('tab')[previousTab].classList.remove('active')
                document.getElementsByClassName('tab')[0].classList.add('active')
                previousTab = 0
                document.getElementById('main-content').innerHTML = components.listEmployee + components.postJob;
                controller.loadEmployees()
                view.postJobHandler()
                

            }
            function profileEmployerBtnClickHandler () {
                document.getElementsByClassName('tab')[previousTab].classList.remove('active')
                document.getElementsByClassName('tab')[1].classList.add('active')
                previousTab = 1
                document.getElementById('main-content').innerHTML = components.employerProfile;
            }
            function jobsPostedBtnClickHandler () {
                document.getElementsByClassName('tab')[previousTab].classList.remove('active')
                document.getElementsByClassName('tab')[2].classList.add('active')
                previousTab = 2
                document.getElementById('main-content').innerHTML = components.postedJob;
                view.showPostedJobs()

            }

            

            

            break;

        }
        case 'employee':{
            
            let app = document.getElementById('app');
            app.innerHTML = components.jobSeeker;
            controller.loadListJobs()
            controller.loadJobOffers()
            controller.showJobApplications()
            view.displayInforUser()

            document.getElementById('menu-btn').innerHTML = `
                <div id="find-job" class="tab">
                        <span>Tìm việc</span>
                    </div>
                    <div id="application-jobs" class="tab">
                        <span>Công việc đã chọn</span>
                    </div>
                    <div id="employee-profile" class="tab">
                        <span>Trang cá nhân</span>
                    </div>
                    <div id="job-offers" class="tab">
                        <span>Thông báo việc làm</span>
                    </div>
                    `

            let findJobBtn = document.getElementById('find-job')
            findJobBtn.onclick = findJobBtnClickHandler

            let profileEmployeeBtn = document.getElementById('employee-profile')
            profileEmployeeBtn.onclick = profileEmployeeBtnClickHandler

            let applicationJobsBtn = document.getElementById('application-jobs')
            applicationJobsBtn.onclick = applicationJobsBtnClickHandler

            let jobOfferBtn = document.getElementById('job-offers')      
            jobOfferBtn.onclick = jobOfferBtnClickHandler

            
    
            function findJobBtnClickHandler() {
                document.getElementById('main-content').innerHTML = components.listJobs;
                view.showListJobs()
            }
            function profileEmployeeBtnClickHandler() {
                document.getElementById('main-content').innerHTML = components.employeeProfile;
                
            }
            function applicationJobsBtnClickHandler() {
                document.getElementById('main-content').innerHTML = components.application;
                view.showAppliedJobs()
            }
            function jobOfferBtnClickHandler(){
                document.getElementById('main-content').innerHTML = components.jobOffers
                // controller.loadJobOffers()
                view.showJobOffers()
                view.showPendingJobs()
                view.showJobsDone()
            }

            break;

        }
            
    
        default:
            break;
    }
}

view.showJobsDone = function(){
    for(let job of model.listJobsDone){
        let html = `
    <div class="job-offers-detail-container" id="${job.id}-container">
        <div class="job-offers-detail-container-2">
            <div class="job-offers-detail-left">
                <a href="#">${job.postOwner}</a>
            </div>
            
            <div class="job-offers-detail-center">
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
                    <span>Mô tả công việc:</span>
                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                </div>
                    
                
            </div>
                <div id="${job.id}-pending">Done</div>
                <button class="btn btn-danger">Delete</button>
        </div>    
    </div>`

    document.getElementById('job-offers-container').innerHTML += html
    }
}

view.showPendingJobs = function(){
    for(let job of model.listPendingJobs){
        let html = `
    <div class="job-offers-detail-container" id="${job.id}-container">
        <div class="job-offers-detail-container-2">
            <div class="job-offers-detail-left">
                <a href="#">${job.postOwner}</a>
            </div>
            
            <div class="job-offers-detail-center">
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
                    <span>Mô tả công việc:</span>
                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                </div>
                    
                
            </div>
                <div id="${job.id}-pending">Pending</div>

        </div>    
    </div>`

    document.getElementById('job-offers-container').innerHTML += html
    }
}

view.showJobOffers = function(){
    for(let job of model.listJobOffers){
        let html = `
    <div class="job-offers-detail-container" id="${job.id}-container">
        <div class="job-offers-detail-container-2">
            <div class="job-offers-detail-left">
                <a href="#">${job.postOwner}</a>
            </div>
            
            <div class="job-offers-detail-center">
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
                    <span>Mô tả công việc:</span>
                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                </div>
                    
                
            </div>
                <button class="btn btn-success" id="${job.id}-accept" onclick="controller.acceptOffer('${job.id}')">Accept</button>
                <button class="btn btn-danger" id="${job.id}-decline" onclick="controller.declineOffer('${job.id}')">Decline</button>
                <div id="${job.id}-pending"></div>
        </div>    
    </div>`

    document.getElementById('job-offers-container').innerHTML += html
    }
    // for(let job of model.listJobOffers){
    //     document.getElementById(`${job.id}-accept`).onclick = acceptOfferClickHandler;
    //     document.getElementById(`${job.id}-decline`).onclick = declineOfferClickHandler;

    //     function acceptOfferClickHandler(){
    //         console.log('clicked');
    //         controller.acceptOffer(job.id)
            
    //     }

    //     function declineOfferClickHandler(){
    //         console.log('clicked');
    //         controller.declineOffer(job.id)
    //     }
    // }
}

view.showListJobs = function(){
    for (let job of model.listJobs) {
        let textButton = 'Apply';
        let btnClass = 'btn-primary'
        if(job.applications.includes(firebase.auth().currentUser.email)){
            textButton = 'Cancel'
            btnClass = 'btn-info'
        }
        let html = `
        <div class="detail-wrapper" >
                        
                            
                            <a href="#">${job.postOwner}</a>
                            <div class="detail-inline-wrapper">
                                <span>Loại CV:</span>
                                <span  id="jobTitle">${job.jobTitle}</span>
                            </div>
                            <div class="detail-inline-wrapper">
                                <span>Địa chỉ:</span>
                                <span  id="address">${job.address}</span>
                            </div>
                            <div class="detail-inline-wrapper">
                                <span>Lương</span>
                                <div  id="salary">${job.salary}</div>
                            </div>
                            <div class="detail-inline-wrapper">
                                <span>Thời gian:</span>
                                <span id="time">${job.time}</span>
                            </div>
                            <div class="detail-inline-wrapper">
                                <span>Mo ta cong viec:</span>
                                <span id="jobDescription">${job.jobDescription}</span>
                            </div>
                            
                            <button class="btn ${btnClass}" id="${job.id}">${textButton}</button>
                            
                    </div>`

                    
        document.getElementById('jobs-list-container').innerHTML += html
        
    }
    for (let job of model.listJobs){
        document.getElementById(job.id).onclick = applyBtnClickHandler
        function applyBtnClickHandler() {
            if (document.getElementById(job.id).innerHTML == 'Apply'){
                controller.applyJob(job.id, model.inforCurrentUser.email) 
                document.getElementById(job.id).innerHTML = 'Cancel'
                document.getElementById(job.id).className = 'btn btn-danger' 
                
            }else {
                console.log(model.inforCurrentUser.email);
                controller.cancelJobApplying(job.id, model.inforCurrentUser.email)
                document.getElementById(job.id).innerHTML = 'Apply'
                document.getElementById(job.id).className = 'btn btn-primary' 

            }

        }
    }
    
}

view.showAppliedJobs = function(){
    for(let job of model.appliedJobs){
        let html = `
        <div class="list-container" id="${job.id}-container">
                        <div class="applied-job-detail-container-2">
                            <div class="applied-job-detail-left">
                                <a href="#">${job.postOwner}</a>
                            </div>
                            
                            <div class="applied-job-detail-center">
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
                                    <span>Mô tả công việc:</span>
                                    <div class="job-detail" id="time">${job.jobDescription}</div>
                                </div>
                            </div>
                            <button class="btn btn-danger" id="${job.id}")">Cancel</button>
                    </div>`
        
        document.getElementById('applied-jobs-list-container').innerHTML += html
    }
    for (let job of model.appliedJobs){
        document.getElementById(job.id).onclick = jobApplicationCancelClickHandle
        function jobApplicationCancelClickHandle(){
            console.log(job.id);           
            controller.cancelJobApplying(job.id, model.inforCurrentUser.email)
            document.getElementById(`${job.id}-container`).outerHTML = ''
        }      
    }
}

view.showListEmployees = function () {
    
    for (let employee of model.listEmployees) {
        let html = `
                    <div class="detail-wrapper">
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
                            
                            <button class="btn btn-info" id="${employee.id}">Choose</button>
                    </div>`
        document.getElementById('employees-list-container').innerHTML += html
    }
    for (let employee of model.listEmployees) {
        document.getElementById(employee.id).onclick = ChooseBtnClickHandler
        function ChooseBtnClickHandler() {
            $("#choose-job-modal").modal('show');
            view.showJobChoose()
            for(let job of model.postedJobs){
                document.getElementById(job.id).onclick = chooseJobFinalClickHandler
                document.getElementById('choose-job-modal').onclick = () => {
                    $("#choose-job-modal").modal('hide'); 
                    document.getElementById('choose-job-list-container').innerHTML = ''
                }
                
                function chooseJobFinalClickHandler(){
                    controller.submitJobOffer(employee.id,job.id)
                    $("#choose-job-modal").modal('hide'); 
                    document.getElementById('choose-job-list-container').innerHTML = ''
                    
                }
            }
            // controller.chosseEmployee(job.id, model.inforCurrentUser.email)

        }
    }
}


view.showPostedJobs = function(){
    for (let job of model.postedJobs) {
        let html = `
        <div class="posted-job-detail-container" id="${job.id}-container">
                        <div class="posted-job-detail-container-2">
                            <div class="posted-job-detail-left">
                                <a href="#">${job.postOwner}</a>
                            </div>
                            
                            <div class="posted-job-detail-center">
                                <div class="detail-inline-wrapper">
                                    <span>Loại CV:</span>
                                    <div class="job-detail" id="jobTitle">${job.jobTitle}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Địa chỉ:</span>
                                    <div class="job-detail" id="address">${job.address}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Lương</span>
                                    <div class="job-detail" id="salary">${job.salary}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Thời gian:</span>
                                    <div class="job-detail" id="time">${job.time}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Mô tả công việc:</span>
                                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                                </div>
                                
                                <ul id="${job.id}-list-employee-applying">        
                                </ul>
                                    
                                
                            </div>
                            <button class="btn btn-danger" id="${job.id}-delete">Delete</button>
                            <button class="btn btn-success" id="${job.id}-done">Done</button>
                            <div id="job-status"></div>
                    </div>`
        document.getElementById('posted-jobs-list-container').innerHTML += html

        for (let employee of job.applications){
            document.getElementById(`${job.id}-list-employee-applying`).innerHTML += `<li>
            <span>${employee}</span>
            <button>Accept</button>
            </li>`
        }    
    }

    for(let job of model.postedJobs){
        document.getElementById(`${job.id}-delete`).onclick = jobDeleteClickHandler
        document.getElementById(`${job.id}-done`).onclick = jobDoneClickHandler

        function jobDeleteClickHandler(){            
            controller.deletePostedJob(job.id)
            document.getElementById(`${job.id}-container`).outerHTML = ''
        }   

        function jobDoneClickHandler(){
            controller.jobDone(job.id)
            document.getElementById(`${job.id}-done`).outerHTML = ''
            document.getElementById(`${job.id}-delete`).outerHTML = ''
            document.getElementById('job-status').innerHTML = 'Done'
        }
    }
}


view.showJobChoose = function(){
    for (let job of model.postedJobs) {
        let html = `
        <div class="posted-job-detail-container" id="${job.id}-container">
                        <div class="posted-job-detail-container-2">
                            <div class="posted-job-detail-left">
                                <a href="#">${job.postOwner}</a>
                            </div>
                            
                            <div class="posted-job-detail-center">
                                <div class="detail-inline-wrapper">
                                    <span>Loại CV:</span>
                                    <div class="job-detail" id="jobTitle">${job.jobTitle}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Địa chỉ:</span>
                                    <div class="job-detail" id="address">${job.address}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Lương</span>
                                    <div class="job-detail" id="salary">${job.salary}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Thời gian:</span>
                                    <div class="job-detail" id="time">${job.time}</div>
                                </div>
                                <div class="detail-inline-wrapper">
                                    <span>Mô tả công việc:</span>
                                    <div class="job-detail" id="jobDescription">${job.jobDescription}</div>
                                </div>
                                
                                <ul id="${job.id}-list-employee-applying">        
                                </ul>
                                    
                                
                            </div>
                            <button class="btn btn-info" id="${job.id}">Choose</button>
                    </div>`
        document.getElementById('choose-job-list-container').innerHTML += html  
    }

}

view.postJobHandler = function(){
    let postBtn = document.getElementById('post-job')
    postBtn.onclick = () => { $("#add-job-modal").modal('show'); console.log("click") }
    let formPost = document.getElementById('form-post-job')
    formPost.onsubmit = submitFormPostHandler

    function submitFormPostHandler(e) {
        let currentUser = firebase.auth().currentUser.email
        e.preventDefault()
        dataPost = {
            jobTitle: formPost.jobTitle.value,
            address: formPost.address.value,
            time: formPost.time.value,
            jobDescription: formPost.description.value,
            salary: formPost.salary.value,
            postOwner: currentUser,
            applications: [],
            offersAccepted: [],
            status : 'undone'
        }
        controller.addJob(dataPost)
    }
}
view.displayInforUser = function () {
    view.setText('fullName', model.inforCurrentUser.fullName)
    view.setText('gender', model.inforCurrentUser.gender)
    view.setText('dateOfBirth', model.inforCurrentUser.dateOfBirth)
    view.setText('mobileNumber', model.inforCurrentUser.mobileNumber)
    view.setText('email', model.inforCurrentUser.email)
    view.setText('city', model.inforCurrentUser.city)
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
