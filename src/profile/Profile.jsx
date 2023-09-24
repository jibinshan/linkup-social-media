import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../navbar/navbar'
import './profile.css'
import { useNavigate } from 'react-router'
import Comment from '../Home/Comment'



function Profile() {
    const [posts,setPosts] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const navigate = useNavigate()
    const handlepostclick = ()=>{
        setPosts((prev)=>!prev)
        if (isTabletOrMobile) {
            
            navigate('/profilephoto')
        }
    }
    console.log(posts);
  return (
    <Navbar>
 
    
        <div className={isTabletOrMobile? 'profileres' : 'profile' }>
            {isTabletOrMobile ? <div className='logout'>
                <button onClick={()=>navigate('/login')}>Logout</button>
            </div> :''}
            <div className={isTabletOrMobile ? 'profiles-containerres':'profiles-container'}>
            <div className={isTabletOrMobile ? 'profilepicres' :'profilepic'}>
            <img src='Screenshot 2023-09-18 155355.png' alt="no" />
            {isTabletOrMobile? <h4>Actor.vijay</h4>: <h1>Actor.vijay</h1> } 
            </div>
            <div className={isTabletOrMobile?'detailsres':'details'}>
            {isTabletOrMobile? <h4>1 <br />Posts</h4> : <h2>1 <br />Posts</h2> }
            {isTabletOrMobile? <h4>200M <br />Following</h4> : <h2>200M <br />Following</h2> }
            {isTabletOrMobile? <h4>0 <br />Followers</h4>: <h2>0 <br />Followers</h2> }
            </div>
            </div>
            <div className={isTabletOrMobile ?'buttonres':'button'}>
                <button>Edit Profile</button>
            </div>
            <div className={isTabletOrMobile ? 'posts-headres' : 'posts-head'}>
                <h1>Posts</h1>
            </div>
            <div className={isTabletOrMobile ? 'postsres' : 'posts'}>
                <img  src='Screenshot 2023-09-18 155355.png' alt="no" onClick={handlepostclick} />
                { isTabletOrMobile ? '' :posts && <Comment handlepostclick={handlepostclick}/>}  
            </div>
        </div>

    </Navbar>
  )
}

export default Profile
