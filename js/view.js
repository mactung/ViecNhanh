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
                alert('asbfkjsab')
                controller.logIn({email: formLogIn.email.value, password : formLogIn.password.value})
            }
            break;
        }
        case 'employer':{
            
            let app = document.getElementById('app');
            app.innerHTML = components.employer;

            document.getElementById('control-container').innerHTML = `
                <div id="find-empployee" class="tab">
                        <span>Tìm người</span>
                    </div>
                    <div id="personal-info" class="tab">
                        <span>Thông tin cá nhân</span>
                    </div>
                    <div id="posted-jobs" class="tab">
                        <span>Công việc đã đăng</span>
                    </div>
            `

            break;

        }
        case 'jobSeeker':{
            
            let app = document.getElementById('app');
            app.innerHTML = components.jobSeeker;
            document.getElementById('control-container').innerHTML = `
                <div id="find-jobs" class="tab">
                        <span>Tìm việc</span>
                    </div>
                    <div id="personal-info" class="tab">
                        <span>Thông tin cá nhân</span>
                    </div>
                    <div id="applied-jobs" class="tab">
                        <span>Công việc đã chọn</span>
                    </div>
            `

            break;

        }
            
    
        default:
            break;
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