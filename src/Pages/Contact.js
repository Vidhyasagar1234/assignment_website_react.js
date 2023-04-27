import React from 'react'


function Contact() { 
  return (
    <div className='form_link'>
      <form action="/" className='form_list'>
        <h1>Contact <span>Here</span></h1>
        <input type="text" name='cname' placeholder='Enter your name...' required /><br />
        <input type="email" name='email' placeholder='example@gmail.com' required /><br />
        <input type="tel" name='phone' placeholder='+91' maxLength={10} pattern='[0-9]{10}' required /><br />
        <textarea name='text' id="" cols="30" rows="10" placeholder='Write your description...' required></textarea><br />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
