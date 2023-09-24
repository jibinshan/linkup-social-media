import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import './profilephoto.css'
import Post from '../Home/Post'
import { useNavigate } from 'react-router'

function Profilephoto() {
    const navigate = useNavigate()
    const hanndlebackclick = ()=>{
        navigate(-1)
    }
  return (
    <div>
       <div className="header">
        <div className='back'>
           <BiArrowBack onClick={hanndlebackclick}/>
        </div>
        </div>      
        <div className="poster">
            <Post/>
        </div>
    </div>
  )
}

export default Profilephoto
