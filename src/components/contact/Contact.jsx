import React, { useState } from 'react'

// import validation from './validation';
import contact from './Contact.module.css'



const Contact = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstName = (e) => { 
    setFirstName(e.target.value);
    
  };

  const handleLastName = (e) => { 
    setLastName(e.target.value);
    
  };

  const handleEmail = (e) => { 
    setEmail(e.target.value);
    
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    const enteredData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      message: message
    };

    console.log(enteredData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div className={contact.contact}>
      <div className={contact.container}>
        <header className={contact.header}>
        <h3> Hey, we are still in the works,</h3>
        <h3>but you can send us a message.</h3>
        </header>
    
      <form onSubmit={handleFormSubmit} className={contact.form} >
        <div className={contact.formControl}>
          
          <label for='firstname'>First Name</label>
          <input name='firstName' 
          onChange={handleFirstName} 
          value={firstName} 
          className={contact.firstname} 
          type='text' tabIndex='1' 
          placeholder='Enter your First Name' />
          
          
          
          <label for='lastname'>Last Name</label>
          <input name='lastName' 
          onChange={handleLastName} 
          value={lastName} 
          className={contact.lastname} 
          type='text' tabIndex='2' 
          placeholder='Enter your Last Name' />
          
                 
          <label for='email'>Email</label>
          <input name='email' 
          onChange={handleEmail} 
          value={email} 
          className={contact.email} 
          type='email' tabIndex='3' 
          placeholder='Enter your Address' />
          
         
          <label for='message'>Tell Us What you Need Help With</label>
          <textarea name='message' 
          onChange={handleMessage} 
          value={message} 
          className={contact.message} 
          type='text' 
          placeholder='Enter A Topic, Like "Channel Problem..." ' />
          
          
          <button 
          className={contact.send} 
          type='submit' > Send Now </button>        
        
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Contact