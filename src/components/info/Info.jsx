import React, { useState } from 'react'


import info from './Info.module.css'

const Info = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  
  const handleFirstname = (e) => { 
    setFirstname(e.target.value);
    
  };

  const handleLastname = (e) => { 
    setLastname(e.target.value);
    
  };

  const handleEmail = (e) => { 
    setEmail(e.target.value);
    
  };

  const handleSubmit = (e) => { 
    e.preventDefault();

    const enteredData = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    console.log(enteredData);
    setFirstname('');
    setLastname('');
    setEmail('');
  };

  const date = new Date();
  const day = 6 - date.getDay();
  const hours = 24 - date.getHours();
  const minutes = 60 - date.getMinutes();
  const seconds = 60 - date.getSeconds();
 

  return (

    <>
    <section className={info.info}>
      <div>
        <p className={info.note}>
          something awesome is coming soon
        </p>
      </div>
      <div>
        <p className={info.noteText}>
          Your all-in-one affiliate marketing tracking software{''} <strong>track</strong>,  
          <strong> automate</strong> and{''} <strong> optimize </strong>
          your campaigns.
        </p>
      </div>
      <div classname={info.dateCard}>
        <div className={info.card}>
          <div>
            <span className={info.dateTime}>{day}</span>
          </div>
          <div>
            <span className={info.dateTimeLabel}>Days</span>
          </div>
        </div>
        <div className={info.card}>
          <div>
            <span className={info.dateTime}>{hours}</span>
          </div>
          <div>
            <span className={info.dateTimeLabel}>Hours</span>
          </div>
        </div>{''}
        <div className={info.card}>
          <div>
            <span className={info.dateTime}>{minutes}</span>
          </div>
          <div>
            <span className={info.dateTimeLabel}>Minutes</span>
          </div>
        </div>{''}
        <div className={info.card}>
          <div>
            <span className={info.dateTime}>{seconds}</span>
          </div>
          <div>
            <span className={info.dateTimeLabel}>Second</span>
          </div>
        </div>
      </div>
      <div>
  
        <form onSubmit={handleSubmit} className={info.form}>
          <div className={info.formInput}>
            <input type='text' value={firstname} onChange={handleFirstname} placeholder='First Name..' />
            <input type='text' value={lastname} onChange={handleLastname} placeholder='Last Name..' />
          </div>
          <div className={info.submit}>
          <input type='email' value={email} onChange={handleEmail} placeholder='Enter your email address...' />
          <button type='submit' placeholder=''> Join our Waiting List </button>
          </div>
        </form>
      </div>

    </section>
    </>

  )
}

export default Info;