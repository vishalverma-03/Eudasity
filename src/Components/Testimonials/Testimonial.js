import {React} from "react";
import "./Testimonials.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import { useRef } from "react";
function Testimonial() {
  const slider=useRef();
  let tx=0;
  const backward=()=>{
       if(tx<0) tx+=25;
       slider.current.style.transform=`translateX(${tx}%)`;
  }

  const forward=()=>{
    if(tx>-50) tx-=25;
    slider.current.style.transform=`translateX(${tx}%)`;
}
  return (
    <div className="Testimonials container" id="testimoinal">
      <img src={back_btn} alt="" className="back-btn"  onClick={backward} />
      <img src={next_btn} alt="" className="next-btn" onClick={forward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user">
                <img src={user1} alt="" />
                <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
                </div>
 *             </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user">
                <img src={user2} alt="" />
                <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user">
                <img src={user3} alt="" />
                <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user">
                <img src={user4} alt="" />
                <div>
                <h3>Emily Williams</h3>
                <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonial;
