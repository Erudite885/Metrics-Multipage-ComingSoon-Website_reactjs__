import React from 'react';
// import { Link } from 'react-router-dom';
import posts from './Posts.module.css'


const Posts = () => {
  return (
    <div className={posts.posts}>
      {/* <div className='container'> */}
          {/* <Link to='/blog/this-is-a-post-title'>
          <div className='row align-items-center my-5'>
           */}
          {/* <div className='col-lg-7'>
            <img class='img-fluid rounded mb-4 mb-lg-0' 
            src='http://placehold.it/900x400' 
            alt='' />
          </div> */}
          
          <div className={posts.containter}>
            <div className={posts.headerContainer}>
              <h1 className={posts.header}> Latest from the Blog </h1>
            </div>

            <div className={posts.textContainer}>
              <p className={posts.headText}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam.
              </p>
              <input type='search' placeholder='search here'  />
            </div>

            <section className={posts.articleContainer}>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
              <div className={posts.article}>
                <div className={posts.articleImage}>
                  <img src='assets/images/Path1.svg' />
                </div>
                <h5 className={posts.articleTitle}>12 popup use cases to increase conversation</h5>
                <p className={posts.articleText}>
                  lorem Ipsum dolor sit amet, 
                  consectetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt 
                  ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam 
                  et justo duo
                </p>
                <div className={posts.articleMore}>
                  <div>
                  <hr className={posts.articleMoreRule} />
                  </div>
                  <p className={posts.articleMoreText}>Read More</p>
                </div>
                
              </div>
            </section>

          </div>

        {/* </div> */}
          {/* </Link> */}
        
      </div>
    // </div>
  )
}

export default Posts;