import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {


    const [user,setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    const githubProvider =new GithubAuthProvider()

    const handleGoogleSignIn = () =>{
        console.log("Google Sign in clicked");
        signInWithPopup(auth,provider)
        .then((result) =>{
            console.log(result.user);

            setUser(result.user)
            
        })
        .catch(error => {
            console.log(error);
            
        })
        
    }

    const handleGithubSignIn =() =>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loggedInUser = result.user
            console.log(loggedInUser);

            if (!loggedInUser.email && loggedInUser?.providerData?.length) {
                console.log("user email is not directly provided");
                
               if (loggedInUser.providerData[0].email) {
                
                loggedInUser.email = loggedInUser.providerData[0].email   
                setUser(loggedInUser)
               } 
            }



        })
        .catch((error) => {
            console.log(error);
            
        })
    }

    const handleSignOut =() =>{
        signOut(auth).then(() =>{
            console.log("signout complete");
            setUser(null)
        })
        .catch(error => {
            console.log(error);
            
        })
    }


    return (
        <div>
            <h3 className='font-black'>Please Login</h3>
            {/* <button className='p-2 bg-slate-300 rounded cursor-pointer' onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleSignOut} className='p-2 bg-slate-300 rounded cursor-pointer mx-3'>Sign Out</button> */}

            {
                user?
                <button onClick={handleSignOut} className='p-2 bg-slate-300 rounded cursor-pointer'>Sign Out</button>:
                <>
                <button className='p-2 mx-3 bg-slate-300 rounded cursor-pointer' onClick={handleGoogleSignIn}>Sign In With Google</button> 

                <button className='p-2 bg-slate-300 rounded cursor-pointer' onClick={handleGithubSignIn}>Sign In With Github</button> 
                
                

                </>
            }

{
    user &&
        <div>
            <h1>Name: {user.displayName}</h1>
            <h1> Email :{user.email}</h1>
            <h1> Uid: {user.uid}</h1>
            <img src={user.photoURL} alt="" />
        </div>
}
        </div>

        
    );
};

export default Login;