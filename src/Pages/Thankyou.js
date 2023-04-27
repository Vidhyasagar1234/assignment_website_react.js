import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <div className='thankyou'>
      <h3>Thanks for Registering</h3><br/>
      <h3>Click Here back to <Link to='/'>HOME</Link></h3>
    </div>
  )
}

export default Thankyou
