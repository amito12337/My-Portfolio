import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <scetion className="cta">
        <p className='cta-text'>Have a project in your mind ? <br className='sm:block hidden'/>
        Let's build something together</p>
        <Link to={"/contact"} className='btn'>
            Contact
        </Link>
    </scetion>
  )
}

export default CTA