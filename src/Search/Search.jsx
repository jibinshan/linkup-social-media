import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useMediaQuery } from 'react-responsive'
import './search.css'
function Search() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    const [searchinput,setSearchinput] = useState('');
    const [searchlist,setSearchlist] = useState([]);
    const [filteredlist,setFilteredlist] =useState([])
    useEffect(()=>{
      const array = [
        {
          name:'Actor.vijay',
          profile:'Screenshot 2023-09-18 155355.png'
        },
        {
           name:'mammotty',
           profile:null
        },
        {
          name:'Asif ali',
          profile:null
        },
      ]       
      setSearchlist(array)
    },[])
    const handlechange = ((e)=>{
      setSearchinput(e.target.value)
      const filteredarray = searchlist.filter((data)=>{
        return data.name.toLowerCase().includes(e.target.value)
      })
      setFilteredlist(filteredarray)
    })
  return (
  <div>
  
  {isTabletOrMobile ?
  <Navbar>
     <div className='Searchres'>
        <div className='inputres'>
          <input type="text" placeholder='search and connect' onChange={handlechange}/>  
        </div>
      <div className='resultres'>
         {searchinput === '' ? '' : filteredlist.map((data)=>{
          return(
             <div className='search-mapres'>
                <img src={data.profile} alt="noimage" />
                <h4>{data.name}</h4>
            </div>   
              )
          }
         )        }
      </div>
    </div>          
            
  </Navbar> 
  :
  <Navbar>
  <div className='Search'>
     <div className='input'>
       <input type="text" placeholder='search and connect' onChange={handlechange}/>  
     </div>
   <div className='result'>
      {searchinput === '' ? '' : filteredlist.map((data)=>{
       return(
          <div className='search-map'>
             <img src={data.profile} alt="noimage" />
             <h4>{data.name}</h4>
         </div>   
           )
       }
      )        }
   </div>
 </div>          
         
</Navbar> 
}     
    </div>
  )
}

export default Search
