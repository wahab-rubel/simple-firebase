
import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { useState } from 'react';


function Login() {
  const [user, setUser] = useState(null);
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
    console.log(result.user)
    setUser(result.user)
    })
    .catch((error) => {
    console.log("Error during login:", error);
    setUser(null)
    });
 }

 const handelGithubSignIn = () =>{
  signInWithPopup(auth, githubProvider)
  .then(result =>{
    console.log(result.user);
    setUser(result.user)
  })
  .catch((error) => {
    console.log('ERROR', error)
  })
 }

 const handleSignOut = ()=>{
  signOut(auth)
  .then(() =>{
  console.log('sign out done')
  setUser(null)
  })
  .catch(error => console.log(error))
 }
 // if user exists ? signout : sign in
  return (
    <div >
      {/* <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}
      {
        user ?  
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <>
        <button onClick={handleLogin}>Login with Google</button>
        <button onClick={handelGithubSignIn}>Login with Github</button>
        </>
      }
      {user && 
      <div>
        <h1>Name: {user.displayName}</h1>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
      }
    </div>
  )
}

export default Login
