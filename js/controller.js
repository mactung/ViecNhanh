const controller = {};
controller.register = async function(registerInfor){
    let { email, password, mobileNumber, city, district, gender, permissionUser, fisrtName, lastName} = registerInfor
    let dataUser = {...registerInfor,
        createdAt: new Date().toISOString(),
        password: null,
        geoLocation: {latitude, longitude},
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
        view.setText('register-error', err.message)
    }
}

