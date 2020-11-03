async function googleLogin () {

            console.log('In googleLogin()');
            // Google provider object is created here. 
            const googleAuth =  new firebase.auth.GoogleAuthProvider();                 
            // using the object we will authenticate the user. 
            let userData = await firebase.auth().signInWithPopup(googleAuth); 
            console.log(userData);
}
