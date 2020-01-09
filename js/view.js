const view = {
    currentComponent : null,
};

view.showComponents = function (name){
    
    switch (name) {
        case 'welcome page':{
            let app = document.getElementById('app')
            app.innerHTML = components.welcomePage
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