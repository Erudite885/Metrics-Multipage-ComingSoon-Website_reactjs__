import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom'

import about from './About.module.css';



const About = () => {

  const dots = '.'.repeat(13);
  const elem = <span>{dots}</span>;

  return (
    <>
    <section>
      <div className={about.jumbotron}>
        <div className={about.hero}>
          <div className={about.heroBox}></div>
          <div className={about.heroBox2}></div>
          <div className={about.intro}>
            <div>
              <hr />
            </div>
            <p> About Us</p>
          </div>
          <p className={about.saas}> Built for SaaS and E-commerce</p>
        </div>
        <div className={about.tool}>
          <p> 
            Our tools are easy to set up with a user friendly dashboard that enables you to set up, launch, automate and manage 
            multi-affiliate campaigns in 5 minutes.
          </p>
        </div>
      </div>
      <div className={about.mainText}>
        <p> Metricks was developed because just like you, we needed a product that could give us <strong>good value</strong>.</p>
      </div>
    </section>
    
    <section>
        <div className={about.fact}>
            <div className={about.WhyContainer}>
                <div className={about.why}>
                    <hr />
                    <h4> Why us?</h4>
                </div>
                <div className={about.whyText}>
                    <div className={about.whyTextContenter}>
                        <p> 
                            We pride ourselves in our ability to innovate and create 
                            world-class tools that provide reliable and efficient
                            touchpoints between advertisers and affiliates.
                        </p>
                        <div className={about.dotted}>
                            <div className={about.dots}>{elem}</div>
                            <div className={about.dots}>{elem}</div>
                            <div className={about.dots}>{elem}</div>
                            <div className={about.dots}>{elem}</div>
                            <div className={about.dots}>{elem}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={about.growContainer}>
                <div className={about.grow}>
                    <hr />
                    <h4>Growing with you?</h4>
                </div>
                <div className={about.growText}>
                    <p className={about.growTexFirst}>
                        Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking 
                        software, a genius tool to help you track, automate and optimize your influencer campaigns, all 
                        from one dashboard.
                    </p>
                    <p className={about.growTexSecond}>
                        Our team of experts are constantly brainstorming, testing and developing new solutions with 
                        only one thing in mind - your business growth. Your success is our success and by giving you 
                        the tools you need to scale, we grow as well.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className={about.section}>
      <div className={about.questions}>
      <div className={about.questBox}></div>
      <div className={about.questBox2}></div>
        <h2>
          Got a Question?
        </h2>
        <p>
          See how Metricks can help you business grow with best affliate marketing tracking software.
        </p>
        <div className={about.contact}>
          <Link to='/contact'>
            Contact Us{''}
            <span>
              <BsArrowRight />
            </span>
          </Link>
        </div>
        <Outlet />
      </div>
    </section>
    
    </>
  );
};

export default About;