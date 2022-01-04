import React from 'react'
import "./post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Post=({username,caption,imageUrl})=> {
    return (
        <div className='Post'>
         <div className='Post_header'>
         {/*Avatar and user name inside header */}
         <AccountCircleIcon className='Post_Avatar' alt='Anonymous' src="/static/images/avatar/1.jpg"/>
            
       <h3> {username}</h3>  {/*Accessing usename prop */}
        </div>
            <img className='Post_Image' src={imageUrl} alt='Anonymous'/>
           
            {/*will have username and caption */}
            <h4 className='Post_text'><strong>{username}</strong> : {caption}</h4>
        </div>
    )
}

export default Post;