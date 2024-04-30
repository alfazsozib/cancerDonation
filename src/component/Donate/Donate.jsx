import React from "react";
import rectangle_24 from "../assets/images/rectangle_24.png";

function Donate() {
  return (
    <main>
      <div className="Donate-section">
        <h1 className="Donate-section-title">donate</h1>
        <div /*class="a"*/ className="Donate-banner">
          <div /*class="container"*/ className="Donate-Information">
            <div className="BannerBox" id="ValueBox-1">
              $1
            </div>
            <div className="BannerBox" id="ValueBox-2">
              $5
            </div>
            <div className="BannerBox" id="ValueBox-3">
              $10
            </div>
            <div className="BannerBox" id="ValueBox-4">
              $50
            </div>
            <div className="BannerBox" id="ValueBox-5">
              $100
            </div>
            <div className="BannerBox" id="ValueBox-6">
              $500
            </div>
            <div className="BannerBox" id="ValueBox-7">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-1"
                placeholder="Enter your amount (USD)"
              />
            </div>
            <div className="BannerBox" id="ValueBox-8">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-2"
                placeholder="Donate using cryptocurrency"
              />
            </div>
            <div className="BannerBox" id="ValueBox-9">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-3"
                placeholder="Your Name"
              />
            </div>
            <div className="BannerBox" id="ValueBox-10">
              <input
                type="email"
                className="InformationBox"
                id="UserBox-4"
                placeholder="Write Your E-mail"
              />
            </div>
            <div className="BannerBox" id="ValueBox-11">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-5"
                placeholder="Country / Region"
              />
            </div>
            <div className="BannerBox" id="ValueBox-12">
              <input
                className="InformationBox"
                id="UserBox-6"
                type="button"
                value="DONATE"
              />
            </div>
          </div>
          <img className="Donate-bannerImage" src={rectangle_24} alt="" />
        </div>
        <h1 className="Donate-FooterSection">100% of your donation goes towards saving lives</h1>
        <hr />
      </div>
    </main>
  );
}

export default Donate;
