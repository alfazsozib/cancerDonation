import React from "react";
import rectangle_1 from '../assets/images/rectangle_1.png';
// import ellipse_1 from '../assets/images/ellipse_1.svg';
// import ellipse_2 from '../assets/images/ellipse_2.svg';
// import ellipse_3 from '../assets/images/ellipse_3.svg';
// import ellipse_4 from '../assets/images/ellipse_4.svg';
// import ellipse_5 from '../assets/images/ellipse_5.svg';
function Home() {
  return (
    <header>
      <nav>
      <h3 className="website-title" >Unknown <br/>Charity
      </h3>
      <ul>
        <li><a href="">Who are we</a></li>
        <li><a href="">what we do</a></li>
        <li><a href="">Volunteers</a></li>
      </ul>
      <button className="button-01" >donate</button>
    </nav>
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Join the Fight :<br />Donate to Support<br />Cancer Patients Today</h1>
        <p className="banner-description">Your generous donation provides hope for cancer patients. Your support today makes a significant difference</p>
        <button className="button-02">Participate now</button>
        <div className="bottom-section">
          <div className="bottom-section-image">
            {/* <img src={ellipse_1} alt="" />
            <img src={ellipse_2} alt="" />
            <img src={ellipse_3} alt="" />
            <img src={ellipse_4} alt="" />
            <img src={ellipse_5} alt="" /> */}
          </div>
          <h3 className="bottom-section-title">1471 more<br />donated</h3>
        </div>
      </div>
      <img className="banner-image" src={rectangle_1} alt="" />
    </div>
    </header>
  );
}

export default Home;
