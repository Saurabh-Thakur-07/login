import { useState,useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const currentEmail = "test@gmail.com";
    const currentPassword = "test@321";  

    if(isLogin){

    }
    else{
      fetch('http://mobapi.stjosephdehradun.in/Api/Auth/Login/',
      {
        mode: 'no-cors',
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Max-Age':'86400',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With'
        },
        body: JSON.stringify(
          {
            "email": "test",
            "password": "test@321"
          })
      }).then(response => response.json())
      .then((data) => console.log(data+" successfully executed "))    
      .catch(error => console.log("Error detected: " + error))
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
