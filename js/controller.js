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
controller.addJob = async function(dataPost){

    let { titleJob, address, time, jobDescription, salary} = dataPost
    try {
        await firebase.firestore().collection('postFindEmployee').add(dataPost)
        $("#add-job-modal").modal('hide');

    }catch (err){
        setText('post-noti',err)
    }


}

controller.showJobsList = async function(){
    let currentJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .get()
    let docs = currentJobsList.docs
    let jobsList = transformDocs(docs)
    for(let job of jobsList){
        let html = `
        <div class="job-detail-container">
                        <div class="job-detail-container-2">
                            <div class="job-detail-left">
                                <a href="#">User</a>
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
                            <button class="apply-job-btn">Apply</button>
                    </div>`
        document.getElementById('jobs-list-container').innerHTML += html       
    }   
}

controller.showPostedJobs = async function(){
    let currentUser = firebase.auth().currentUser.email
    let postedJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .where('users','array-contains',currentUser)
        .get()
    let docs = postedJobsList.docs
    let jobsList = transformDocs(docs)
    console.log(jobsList);    
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