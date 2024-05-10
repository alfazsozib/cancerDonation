import React,{useState} from "react";
import rectangle_24 from "../assets/images/rectangle_24.png";

function Donate() {
  const [donationValue,setDonationValue] = useState("Enter your amount (BDT)"); 
  const setDonation=(value)=>{
    setDonationValue(value)
  }

  const setCustomDonation=(event)=>{
      let customDonation = event.target.value
      setDonationValue(customDonation)
  }

  console.log(donationValue)
  return (
    <main>
      <div className="Donate-section">
        <h1 className="Donate-section-title">donate</h1>
        <div className="Donate-banner">
          <div className="Donate-Information">
            <div onClick={()=>setDonation('50')} className="BannerBox" id="ValueBox-1">
            BDT 50
            </div>
            <div onClick={()=>setDonation('100')} className="BannerBox" id="ValueBox-2">
            BDT 100
            </div>
            <div onClick={()=>setDonation('200')}  className="BannerBox" id="ValueBox-3">
            BDT 200
            </div>
            <div onClick={()=>setDonation('300')} className="BannerBox" id="ValueBox-4">
            BDT 300
            </div>
            <div onClick={()=>setDonation('500')} className="BannerBox" id="ValueBox-5">
            BDT 500
            </div>
            <div onClick={()=>setDonation('1000')} className="BannerBox" id="ValueBox-6">
            BDT 1000
            </div>
            <div className="BannerBox" id="ValueBox-7">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-1"
                placeholder={"BDT  "+donationValue}
                onChange={setCustomDonation}
                // value={donationValue}
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
