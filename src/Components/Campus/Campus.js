import React from 'react'
import './Campus.css'
import campus_p1 from '../../assets/gallery-1.png'
import campus_p2 from '../../assets/gallery-2.png'
import campus_p3 from '../../assets/gallery-3.png'
import campus_p4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
export default function Campus() {
  return (
    <div className='gallery' id='Campus'>
        <div className="photo-container">
        <div className='gallery-photo'><img src={campus_p1} alt="" /></div>
        <div className='gallery-photo'><img src={campus_p2} alt="" /></div>
        <div className='gallery-photo'><img src={campus_p3} alt="" /></div>
        <div className='gallery-photo'><img src={campus_p4} alt="" /></div>
        </div>
        <button className="btn">See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}
