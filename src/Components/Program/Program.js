import React from 'react'
import "./Program.css"
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_1_bg from '../../assets/program-icon-1.png'
import program_2_bg from '../../assets/program-icon-2.png'
import program_3_bg from '../../assets/program-icon-3.png'
export default function Program() {
  return (
    <div className='programs' id='Programs'>
        <div className="program">
        <img src={program_1} alt="" />
        <div className="caption"><img src={program_1_bg} alt="" /><p>Graduation Degree</p></div>
        </div>
        <div className="program">
        <img src={program_2} alt="" />
        <div className="caption"><img src={program_2_bg} alt="" /><p>Post Graduation</p></div>
        </div>
        <div className="program">
        <img src={program_3} alt="" />
        <div className="caption"><img src={program_3_bg} alt="" /><p>Master's Degree</p></div>
        </div>
    </div>
  )
}
