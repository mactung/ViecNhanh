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
    console.log(dataPost);
    
    try {
        await firebase
        .firestore()
        .collection('postFindEmployee')
        .add(dataPost)
        $("#add-job-modal").modal('hide');
        $('.alert').alert()

    }catch (err){
        setText('post-noti',err)
    }
}

controller.submitJobOffer = async function(userId,postId){
    await firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .update({
            jobOffers: firebase.firestore.FieldValue.arrayUnion(postId)
        })
}

controller.loadJobOffers = async function(){
    let jobsList = []
    let jobsPendingList = []
    for(let offer of model.inforCurrentUser.jobOffers){
        let data = await firebase
            .firestore()
            .collection('postFindEmployee')
            .doc(offer)
            .get()
        job = transformDoc(data)
        jobsList.push(job)
    }    
    for(let offer of model.inforCurrentUser.jobsPending){
        let data = await firebase
            .firestore()
            .collection('postFindEmployee')
            .doc(offer)
            .get()
        job = transformDoc(data)
        jobsPendingList.push(job)
    } 
    model.saveListJobOffers(jobsList);
    model.saveListPendingJobs(jobsPendingList)
    console.log('loaded offers');
    
}

controller.declineOffer = async function(postId){
    document.getElementById(`${postId}-container`).innerHTML = ''
    await firebase
        .firestore()
        .collection('users')
        .doc(model.inforCurrentUser.id)
        .update({
            jobOffers: firebase.firestore.FieldValue.arrayRemove(postId)
        })
}

controller.acceptOffer = async function(postId){
    document.getElementById(`${postId}-accept`).outerHTML = ''
    document.getElementById(`${postId}-decline`).outerHTML = ''
    document.getElementById(`${postId}-pending`).innerHTML = 'Pending'


    await firebase
        .firestore()
        .collection('users')
        .doc(model.inforCurrentUser.id)
        .update({
            jobsPending: firebase.firestore.FieldValue.arrayUnion(postId),
            jobOffers : firebase.firestore.FieldValue.arrayRemove(postId)
        })
    await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(postId)
        .update({
            offersAccepted: firebase.firestore.FieldValue.arrayUnion(model.inforCurrentUser.id)
        })
}

controller.loadPostedJobs = async function(){
    let currentUser = firebase.auth().currentUser.email
    let postedJobsList = await firebase
        .firestore()
        .collection('postFindEmployee')
        .where('postOwner','==',currentUser)
        .get()
    
    let docs = postedJobsList.docs
    let jobsList = transformDocs(docs)
    model.savepostedJobs(jobsList)
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
    model.saveAppliedJobs(jobsList)
}


controller.applyJob = async function(idPost, emailUserApply){
    await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(idPost)
        .update({
            applications: firebase.firestore.FieldValue.arrayUnion(emailUserApply)
        })
    await firebase.firestore()
            .collection('users')
            .doc(model.inforCurrentUser.id)
            .update({
                jobApply: firebase.firestore.FieldValue.arrayUnion(idPost),
            })
}

controller.cancelJobApplying = async function (idPost, emailUserCancel){
    
    await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(idPost)
        .update({
            applications: firebase.firestore.FieldValue.arrayRemove(emailUserCancel)
        })
    await firebase.firestore()
        .collection('users')
        .doc(model.inforCurrentUser.id)
        .update({
            busy: false,
            jobApply: firebase.firestore.FieldValue.arrayRemove(idPost),
        })
}


controller.deletePostedJob = async function(postId){
    await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(postId)
        .delete()

    let getEmployee = await firebase
        .firestore()
        .collection('users')
        .where('jobOffers','array-contains',postId)
        .get()
    let docs = getEmployee.docs
    let listEmployees = transformDocs(docs)

    for(let employee of listEmployees){
        await firebase
            .firestore()
            .collection('users')
            .doc(employee.id)
            .update({
                jobOffers: firebase.firestore.FieldValue.arrayRemove(postId)
            })
    }
    
}

controller.jobDone = async function(postId){
    await firebase
        .firestore()
        .collection('postFindEmployee')
        .doc(postId)
        .update({
            status : 'done'
        })
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

