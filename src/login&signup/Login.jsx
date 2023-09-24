import React, { useState } from 'react'
import LsContainer from './LsContainer'
import { UseInputHooks } from '../customhooks/UseInputHooks'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const {handlechange:handleinputchange,fields} = UseInputHooks({
      username:'',
      password:'',
    })
    
    const [errorfields,setErrorFields] = useState({
      username:false,
      password:false,
  })
  const errors = (e)=>{
      let error = {
      username:false,
      password:false,
      
      }
      if(fields.username === ''){
         error.username = true
      }
       if(fields.password === ''){
          error.password = true
       }
       setErrorFields(error)
       if ( Object.values(error).some((errors)=>errors === true)) {
        return false
       }
        return true
      }
      const handlesubmit =(e)=>{
        e.preventDefault()
       console.log(fields);
        if(errors()){
           console.log('valid');
           navigate('/home')
           return;
         }
          console.log('invalid');
        
      }  
      const handlechange = (e)=>{
          handleinputchange(e)
          handleblur(e)
      }    
      const handleblur = (e)=>{
        const {name,value} = e.target
          let err = false;
          if (name === 'username' && value === '') {
               err = true;
          }else if (name === 'password' && (value === '' || value.length < 10) ) {
            err = true
          } 
          setErrorFields((prev)=>({
            ...prev,
            [name]:err,
          }))
      }
  return (
    <LsContainer>
            <form onSubmit={handlesubmit}>

            <h1>LOGIN</h1>
               <div>
               <label htmlFor="">Username</label>
               <input
               type="text" 
               placeholder='Username'
               name ="username"
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.username && <p>this is required</p>}
               </div>
               <div>
               <label htmlFor="">Password</label>
               <input
               type="password"  
               placeholder='Password'
               name ="password"
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.password && <p>this is required and not strong</p>}
               </div>
               <button type='submit'>Login</button>
              <Link to='/signup'>Signup</Link>
            </form>
    </LsContainer>
  )
}

export default Login
