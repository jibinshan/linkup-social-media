import { useState,createContext } from "react"

export const Verifycontext =createContext()

export const Verificationcontext = ({children})=>{
   const {fields} = UseInputHooks({
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
       
      }
      const handlesubmit =(e)=>{
        e.preventDefault()
       console.log(fields);
        if(errors()){
           console.log('valid');
           alert('successfully')
           return;
         }
          console.log('invalid');
        
      }      
  return(
     <Verifycontext.Provider value={{errorfields,handlesubmit,fields}} >
        {children}
     </Verifycontext.Provider>      
        ) 
}

export const UseInputHooks = (initial)=>{
    const [fields,setfields] = useState(initial);
      const handlechange = (e)=>{
        setfields((prev)=>({
              ...prev,
              [e.target.name]:e.target.value
        }))
      }
      
      return {
        fields,
        handlechange,
      
        
      }
}