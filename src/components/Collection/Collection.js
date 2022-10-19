import React from 'react'
import './Collection.css';

import discoverWatches from '../../assets/images/discover-watches.jpg'
import discoverRings from '../../assets/images/discover-rings.jpg'
import discoverNecklaces from '../../assets/images/discover-necklaces.jpg'

const Collection = () => {
  return (
    <div className='collection'>
        <div className='collection-content'>
            <h1>Artisan Hand-Crafted Watch</h1>
            <h3>Impressive and stylish watches are passionately created with every detail elaborately designed and executed by our special craftsmanship.</h3>
        </div>
        <div className='grid'>
            <div className='shop-watches'>
                <img src={discoverWatches} alt='' />
                <button type='submit' className='shop-watches-btn'>Shop Watches</button>
            </div>
            <div className='shop-bracelets'>
                <img src={discoverRings} alt='' />
                <button type='submit' className='shop-rings-btn'>Shop Rings</button>
            </div>
            <div className='shop-necklaces'>
                <img src={discoverNecklaces} alt='' />
                <button type='submit' className='shop-necklaces-btn'>Shop Necklaces</button>
            </div>
        </div>
    </div>
  )
}

export default Collection