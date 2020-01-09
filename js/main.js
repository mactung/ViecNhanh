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
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    
}