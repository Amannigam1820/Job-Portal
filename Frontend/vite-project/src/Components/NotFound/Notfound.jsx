import React from 'react'
import {Link} from "react-router-dom"

const Notfound = () => {
  return (
   <section className='page notfound'>
    <div className="content">
    <img src='/notfound.png' alt='NotFound'/>
      <Link to={'/'}>Go to the home page</Link>
    </div>
   </section>
  )
}

export default Notfound

