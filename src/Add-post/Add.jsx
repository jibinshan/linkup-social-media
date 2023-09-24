import React, {  useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../navbar/navbar'
import './add.css'

function Add() {
  const [file,setFile] = useState(null) 
  
  const handlefilechange = (e) => {
  

      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    
  };
  console.log(file);
  
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
  return (
    <div>
      {isTabletOrMobile ? 
      <Navbar>
         <div className="addres" >
           <div className="add-containerres">
              <input type="file" placeholder='select post' onChange={handlefilechange}/>
              <img src={file ?  URL.createObjectURL(file) : ''} alt='' className={file ? 'image' : ''}/>
             {file  &&  <input type="text" name=""  className='input-field' placeholder='Add Your Description'/> } 
              <button>Add</button>
           </div>
        </div>
      </Navbar>
      
      :  
       <Navbar>
      <div className="add" >
        <div className="add-containerres">
           <input type="file" placeholder='select post' onChange={handlefilechange}/>
           {file !== null && (
            <>
              <img src={URL.createObjectURL(file)} alt="" className="image" />
            </>
          )}
           {file  &&  <input type="text" name=""  className='input-field' placeholder='Add Your Description'/> } 
           <button onClick={()=>console.log('clicked')}>Add</button>
        </div>
     </div>
   </Navbar>}
       </div>
  )
}

export default Add
