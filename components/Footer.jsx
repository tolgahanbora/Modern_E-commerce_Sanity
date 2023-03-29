import React from 'react'
import Link from 'next/link'
import {AiFillInstagram, AiOutlineTwitter,AiFillLinkedin,AiOutlineMail} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-container'>
      <p> 2023 Tolgahan Bora All rights reserverd</p>
  
      <p className='icons'>
        <Link href='https://www.instagram.com/tolgahanbr/'>
        <AiFillInstagram  />
        </Link>
        <Link href='https://twitter.com/Trahaearn_'>
        <AiOutlineTwitter  />
        </Link>
        <Link href="https://www.linkedin.com/in/tolgahan-bora/">
        <AiFillLinkedin  />
        </Link>
        <a href="mailto:tolgahanbora@outlook.com">
          <AiOutlineMail />
        </a>
      </p>
     
    </div>
  )
}

export default Footer