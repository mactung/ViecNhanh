const view = {
    currentComponent : null,
};

view.showComponents = function (name){
    // name = 'jobSeekerRegister';
    switch (name) {
        case 'welcome page':{
            let app = document.getElementById('app')
            app.innerHTML = components.welcomePage

            let employerRegisterBtn = document.getElementById('employer-sign-up-btn')
            employerRegisterBtn.onclick = employerRegisterBtnClickHandle

            let jobSeekerRegisterBtn = document.getElementById('job-seeker-sign-up-btn')
            jobSeekerRegisterBtn.onclick = jobSeekerRegisterBtnClickHandle



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
                console.log(dataUser);
                controller.register(dataUser)
                

            }


            break;
        }
            
    
        default:
            break;
    }
}

view.setText = function (id,message){
    document.getElementById(id).innerHTML = message;
}