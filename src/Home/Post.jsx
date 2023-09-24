import React,{useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import {GrLike} from 'react-icons/gr'
import {BiComment,BiShare} from 'react-icons/bi'
import Comment from './Comment'
import './post.css'

function Post() {
    const [state,setState] = useState({
        like:false,
        Comment:false,
      })
      const handlelikeclick = ()=>{
           setState((prev)=>({
            ...prev,
            like: !prev.like
           })) 
          }
          console.log(state);
          
      const handlecommentclick = ()=>{
        setState((prev)=>({
            ...prev,
            Comment:!prev.Comment,
        }))
      }
      const handleclosebutton = ()=>{
        setState((prev)=>({
         ...prev,
         Comment:!prev.Comment 
        }))
      }
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
      return (
        <div className={isTabletOrMobile ? 'postres' : 'post'}>
      {state.Comment? <Comment handleclosebutton={handleclosebutton}/> :''}
        <div className='username'>
            <img src="Screenshot 2023-09-18 155355.png" alt="" />
           <h3>Actor.Vijay</h3>
        </div>
        <img src="Screenshot 2023-09-18 155355.png" alt="" />
        <div className='icons'>
          <GrLike 
          className={state.like ? 'liked':'not-liked' }
          onClick={handlelikeclick}
          />
          <BiComment onClick={handlecommentclick}/>
          <BiShare/>
        </div>
      </div>
    
  )
}

export default Post
