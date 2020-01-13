const controller = {};
controller.register = async function(registerInfor){
    let { email, password, mobileNumber, city, district, gender, permissionUser, fisrtName, lastName} = registerInfor
    let dataUser = {...registerInfor,
        createdAt: new Date().toISOString(),
        password: null,
        // geoLocation: {latitude, longitude},
        fullName : lastName + fisrtName,
        comments: [],
        rate: 4,
        }



    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.sendEmailVerification()

        await firebase.firestore().collection('users').add(dataUser)
        console.log(dataUser);
        

        view.setText(
            'register-success',
            'An email verification has been sended to your email address'
        )

    } catch (err) {
        // view.setText('register-error', err.message)
    }
}

controller.logIn = async function(logInInfor){
    let {email, password} = logInInfor
    try {
        let result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
        if (!result.user && !result.user.emailVerified) {
            throw new Error('You must verify email !')
        }
        console.log('success')
        view.showComponents('employer')
    } catch (err) {
        view.setText('log-in-error', err.message)
        
    }
}
controller.logOut = async function () {
    await firebase.auth().signOut()
    
}
controller.loadInforUser = async function() {
    let currentUser = firebase.auth().currentUser
    let {email} = currentUser;
    let result = await firebase.firestore()
        .collection('users')
        .where('email','==', email)
        .get()
    
    let docs = result.docs
    let user = transformDocs(docs)
    model.saveInforCurrentUser(...user)

}
controller.loadListJobs = async function () {
    let currentUser = firebase.auth().currentUser.email
    let currentJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .get()

    let docs = currentJobsList.docs
    let listJobs = transformDocs(docs)

    model.saveListJobs(listJobs)
    view.showListJobs()

}

controller.loadEmployees = async function () {
    let listEmployees = await firebase
        .firestore()
        .collection('users')
        .where('permissionUser', '==', 'employee')
        .get()
    let docs = listEmployees.docs
    let employees = transformDocs(docs)
    model.saveListEmployees(employees)
    view.showListEmployees()


}
controller.addJob = async function(dataPost){

    // let { titleJob, address, time, jobDescription, salary} = dataPost
    try {
        await firebase.firestore().collection('postFindEmployee').add(dataPost)
        $("#add-job-modal").modal('hide');

    }catch (err){
        setText('post-noti',err)
    }


}


controller.showPostedJobs = async function(){
    let currentUser = firebase.auth().currentUser.email
    let postedJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .where('postOwner','==',currentUser)
        .get()
    
    let docs = postedJobsList.docs
    let jobsList = transformDocs(docs)
    model.postedJob = jobsList

    for(let job of jobsList){
        let html = `
        <div class="posted-job-detail-container" id="${job.id}">
                        <div class="posted-job-detail-container-2">
                            <div class="posted-job-detail-left">
                                <a href="#">${job.postOwner}</a>
                            </div>
                            
                            <div class="posted-job-detail-center">
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
                            <button class="cancel-posted-job-btn" onclick="postedJobCancelClickHandle(event,'${job.id}')">Cancel</button>
                    </div>`
        document.getElementById('posted-jobs-list-container').innerHTML += html
    }
}

controller.showJobApplications = async function(){
    let currentUser = firebase.auth().currentUser.email
    let appliedJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .where('applications','array-contains',currentUser)
        .get()
    let docs = appliedJobsList.docs
    let jobsList = transformDocs(docs)
    for(let job of jobsList){
        let html = `
        <div class="applied-job-detail-container" id="${job.id}">
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
                            <button class="cancel-applied-job-btn" onclick="jobCancelClickHandle(event,'${job.id}')">Cancel</button>
                    </div>`
        
        document.getElementById('applied-jobs-list-container').innerHTML += html
    }
}



controller.updateApplication = async function(id){
    let currentUser = firebase.auth().currentUser.email
    let updateApplication = await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(id)
        .update({
            applications: firebase.firestore.FieldValue.arrayUnion(currentUser)
        })
}

controller.cancelApplication = async function(id){
    let currentUser = firebase.auth().currentUser.email
    let cancelApplication = await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(id)
        .update({
            applications: firebase.firestore.FieldValue.arrayRemove(currentUser)
        })
}

controller.cancelPostedJob = async function(id){
    let currentUser = firebase.auth().currentUser.email
    let cancelJob = await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(id)
        .delete()
}

function transformDocs(docs) {
    let datas = []
    for (let doc of docs) {
        let data = doc.data()
        data.id = doc.id
        datas.push(data)
    }
    return datas
}
function transformDoc(doc) {
    let data = doc.data()
    data.id = doc.id
    return data
}