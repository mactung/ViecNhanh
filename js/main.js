window.onload = init ;
function init () {
    firebase.auth().onAuthStateChanged(async (user) => {
        
        if (user && user.emailVerified) {
            // controller.loadInforUser()
           await controller.loadInforUser()
            console.log(model.inforCurrentUser);

            if (model.inforCurrentUser.permissionUser == 'jobSeeker'){
                view.showComponents('jobSeeker')

            }else {
                view.showComponents('employer')
            }
            
        } else {
            view.showComponents('welcome page')
        }
    })
    
    // if (navigator.geolocation) {
    //     console.log(navigator.geolocation);
        
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         console.log(position.coords.latitude);
    //         console.log(position.coords.longitude);
            
    //     });
    // } else {
    //     x.innerHTML = "Geolocation is not supported by this browser.";
    // }
    
}