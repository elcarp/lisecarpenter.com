import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import {
  faGooglePlusSquare,
  faShopify,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import {
  faCode,
  faPaintBrush,
  faServer,
} from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
  return (
    <div className='skills w-full px-5 md:pr-20 py-20 md:w-1/2 block md:grid md:grid-cols-2 z-50'>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faCode}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-25 transition}`}
        />
        <h2>Custom Development</h2>
        <p className='pt-2'>
          Get a website built with the right technology for your goals. Whether
          it's React for a fast, modern experience or WordPress for easy updates—
          you'll have a site that scales with your business.
        </p>
      </div>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faPaintBrush}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-25 transition}`}
        />
        <h2>Beautiful Design</h2>
        <p className='pt-2'>
          First impressions matter. Your site will look professional, feel
          trustworthy, and reflect your brand—giving customers confidence to
          buy from you or get in touch.
        </p>
      </div>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faGooglePlusSquare}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-50 transition}`}
        />
        <h2>SEO That Works</h2>
        <p className='pt-2'>
          Be found by the right people. Every site includes SEO best practices
          so you rank higher on Google and attract organic traffic without
          paying for ads.
        </p>
      </div>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faServer}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-50 transition}`}
        />
        <h2>Hassle-Free Hosting</h2>
        <p className='pt-2'>
          Skip the technical headaches. I'll handle domain setup, hosting
          configuration, and migrations—so you can focus on running your
          business.
        </p>
      </div>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faWordpress}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-75 transition}`}
        />
        <h2>Content Strategy</h2>
        <p className='pt-2'>
          Words that sell. Get help with website copy and blog content that
          connects with your audience, builds trust, and drives action.
        </p>
      </div>
      <div className='skill-box px-4 text-center'>
        <FontAwesomeIcon
          color='#65cccc'
          icon={faShopify}
          size="lg"
          className={`mx-auto pt-6 pb-4 animate-bounce animation-delay-75 transition}`}
        />
        <h2>E-Commerce Ready</h2>
        <p className='pt-2'>
          Start selling online with a store that's easy to manage and optimized
          for conversions. Shopify or WooCommerce—set up to make sales from
          day one.
        </p>
      </div>
    </div>
  )
}
