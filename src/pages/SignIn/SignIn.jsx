import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setToken } from '../../Redux/authSlice';


function SignIn() {
   const dispatch = useDispatch();

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');


   const navigate = useNavigate();
   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   };
   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };
   const handleSignIn = (event) => {
      event.preventDefault();
      const userData = {
         email: username,
         password: password
      };

      fetch('http://localhost:3001/api/v1/user/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)
      })
         .then(response => response.json())
         .then(data => {
            console.log(data);

            if (data.status !== 200) { 
               setError(true);
               return;
            }
            else {
               dispatch(setToken(data.body.token));
               navigate("/user");
            }
         })
         .catch(error => {
            console.error(error);
         });
   };

   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
               <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input className={error ? 'sign-in__error-border' : ''} type="email" id="username" value={username} onChange={handleUsernameChange} required />
               </div>

               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input className={error ? 'sign-in__error-border' : ''} type="password" id="password" value={password} onChange={handlePasswordChange} required />
               </div>

               {error && <p className="sign-in__error-message">Username or password incorrect</p>}

               <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>


               <button className="sign-in-button" type="submit">Sign In</button>
            </form>



         </section>
      </main>
   );
}

export default SignIn;