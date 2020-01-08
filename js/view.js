const view = {};

view.showComponents = function (name){
    switch (name) {
        case 'home page':{
            let app = document.getElementById('app')
            app.innerHTML = components.homePage
            break;
        }
        case 'employer':{
            let app = document.getElementById('app')
            app.innerHTML = components.nav + components.employerMain
            break;
        }
            
    
        default:
            break;
    }
}