import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
function HeroBanner( {HeroBanner}) {
  return (
    <div className='hero-banner-container'>
      <div>
<p className='beats-solo'>{HeroBanner.smallText}</p>
<h3>{HeroBanner.midText}</h3>
<h1>{HeroBanner.largeText}</h1>

<img alt='headphones' className='hero-banner-image' src={urlFor(HeroBanner.image[0]).url()} />
<Link href={`/product/${HeroBanner.product}`}>
  <button type='button' >{HeroBanner.buttonText}</button>
</Link>
<div className='desc'> 
<h5>Description</h5>
<p>{HeroBanner.desc}</p>
</div>
      </div>
    </div>
  )
}

export default HeroBanner