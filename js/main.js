window.onload = init ;
function init () {
    firebase.auth().onAuthStateChanged(user => {
        if (view.currentComponent == 'welcome page') {
            return
        }
        if (user && user.emailVerified) {
            if (user.permision == 'employer') {
                
            }
            view.showComponents('welcome page')
        } else {
            view.showComponents('welcome page')
        }
    })
}