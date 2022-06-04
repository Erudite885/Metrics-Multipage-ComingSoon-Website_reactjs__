import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import post from './Post.module.css'

const Post = () => {
    let { postSlug } = useParams();

    useEffect(() => {
        // fetch post using postSlug
    }, [postSlug]);

  return (
    // <div className='home'>
        <div className='container'>
            <h1 className={post.post}> Latest from the Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
           
        </div>
    // </div>
  )
}

export default Post