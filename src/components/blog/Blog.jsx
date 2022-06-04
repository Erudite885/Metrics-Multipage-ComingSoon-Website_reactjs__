
import React from 'react'
import { Outlet } from 'react-router-dom'

import blog from './Blog.module.css'

const Blog = () => {
  return (
    
      <div class={blog.container}>
      <div className={blog.hero}>
          <div className={blog.heroBox}></div>
          <div className={blog.heroBox2}></div>
          <div className={blog.intro}>
            <div>
              <hr />
            </div>
            <p> Blog</p>
          </div>
          <p className={blog.saas}> Articles and News</p>
        </div>
        <Outlet />
      </div>
   
  )
}

export default Blog