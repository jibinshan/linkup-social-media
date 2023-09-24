import React, { useState} from 'react'
import LsContainer from './LsContainer'
import { UseInputHooks } from '../customhooks/UseInputHooks'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const {handlechange:handleinputchange,fields} = UseInputHooks({
    username:'',
    email:'',
    phone:'',
    birthday:'',
    password:'',
  })
  const [errorfields,setErrorfields] = useState({
    username:false,
    email:false,
    birthday:false,
    password:false,
    phone:false,
})
const errors = (e)=>{
    let error = {
    username:false,
    email:false,
    birthday:false,
    password:false,
    phone:false, 
    }
    if(fields.username === ''){
       error.username = true
    }
    if(fields.email === ''){
        error.email = true
     }
     if(fields.phone === ''){
        error.phone = true
     }
     if(fields.birthday === ''){
        error.birthday = true
     }
     if(fields.password === ''){
        error.password = true
     }
     setErrorfields(error)
   if ( Object.values(error).some((errors)=>errors === true)) {
      return false
     }
      return true
     
    }
    const handleblur = (e)=>{
      const num = /[0-9]/;
      const {name,value} = e.target
        let err = false;
        if (name === 'username' && value === '') {
             err = true;
        }else if (name === 'email' && value === '' ) {
          err = true
        } else if (name === 'phone' && (value === '' || !value.match(num) || value.length < 10)) {
                    err = true 
          } else if (name === 'birthday' && value === ''  ) {
         err = true
       } else if (name === 'password' &&  (value === '' || value.length < 10) ) {
         if (value.length < 10) {
            err = true
         }
         
       } 
        setErrorfields((prev)=>({
          ...prev,
          [name]:err,
        }))
    }
    const handlesubmit =(e)=>{
      e.preventDefault()
     console.log(fields);
      if(errors()){
         console.log('valid');
         navigate('/login')
         return;
         
       }
        console.log('invalid');
      
    }  
    const handlechange = (e)=>{
      handleinputchange(e)
      handleblur(e)
    }    
  return (
 <LsContainer>
  <form onSubmit={handlesubmit}>

     <h1>Signup</h1>
               <div>
               <label htmlFor="">Username</label>
               <input
               type="text" 
               placeholder='Username'  
               name='username'
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.username && <p>please complete this field </p> }
               </div>
               <div>
               <label htmlFor="">Email</label>
               <input 
               type="email" 
               placeholder='Email'
               name='email'
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.email && <p>please complete this field </p> }
               </div>
               <div>
               <label htmlFor="">Phone</label>
               <input 
               type="phone" 
               placeholder='Phone'
               name='phone'
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.phone && <p>complete this field with atleast 10 characters only numbers</p> }
               </div>
               <div>
               <label htmlFor="">Birthday</label>
               <input
               type="text" 
               placeholder='Birthday'
               name='birthday'
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.birthday && <p>please complete this field </p> }
               </div>
               <div>
               <label htmlFor="">Password</label>
               <input 
               type="password"  
               placeholder='Password'
               name='password'
               onChange={handlechange}
               onBlur={handleblur}
               />
               {errorfields.password && <p>please complete this field with strong password</p> }
               </div>
               <button type='submit'>Signup</button>
               <Link to='/login'>Login</Link>
               </form>
 </LsContainer>
  )
}

export default Signup
