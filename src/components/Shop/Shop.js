import React from 'react'
import './Shop.css'

import watch1 from '../../assets/images/watch-1-final.jpg'
import watch2 from '../../assets/images/watch-2-final.jpg'
import watch3 from '../../assets/images/watch-3-final.jpg'
import watch4 from '../../assets/images/watch-4-final.jpg'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='container'>
            <h1>Versatility in Styles</h1>
            <div className='grid'>
                <img className='watch-pic' src={watch1} alt='' />
                <img className='watch-pic' src={watch2} alt='' />
                <img className='watch-pic' src={watch3} alt='' />
                <img className='watch-pic' src={watch4} alt='' />
            </div>
            <div className='content'>
                <button className='discover-button' type='button' name='button'>Discover Our Collection</button>
            </div>
        </div>
    </div>
  )
}

export default Shop