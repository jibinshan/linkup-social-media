import React, { useState,useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import './comment.css'
function Comment({handleclosebutton,handlepostclick}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
  
    const [comment,setComment] = useState('')
    const [comments,setComments] = useState([])
    const handleinputchange = (e)=>{
          setComment(e.target.value)
    }
    const handleinputsubmit = ()=>{
        setComments(
            [
            ...comments,
            comment
        ]
        )
        console.log(comments);
    }
     useEffect(() => {
// Applying on mount
        document.body.style.overflow = "hidden";
// Applying on unmount    
        return () => {
          document.body.style.overflow = "visible";
        }
      }, [])
    
  return (
    <div className={isTabletOrMobile ? 'comment-containerres' :'comment-container'}>
      <div className={isTabletOrMobile ? 'closeres' : 'close'}>
         <button onClick={handlepostclick ? handlepostclick : handleclosebutton}>close</button>
      </div>
      <div className={isTabletOrMobile ? 'parent-commentres':"parent-comment"}>

        {isTabletOrMobile ? '' : <img src="Screenshot 2023-09-18 155355.png" alt="" />}
    <div className={isTabletOrMobile ? 'commentres' : 'Comment'}>
      <div className={isTabletOrMobile?'containersres': "containers"}>
        {  comments.map((comment,index)=>{
          return(
            <div key={index} className='map-container'>
         <div className='profile-container'>
               <img src="Screenshot 2023-09-18 155355.png" alt="" />
              <h5>Actor.Vijay</h5>
      </div>
                 <p >{comment}</p>
             </div>
        )
     })}
      </div>
      
    <div className={isTabletOrMobile ? 'submitres' :"submit"}>

      <input
       type="text" 
       value={comment}
       placeholder='share your comments'
       onChange={handleinputchange}
       />
      <button onClick={handleinputsubmit}>Post</button>
    </div>
       </div>
    </div>
      </div>
  )
}

export default Comment
