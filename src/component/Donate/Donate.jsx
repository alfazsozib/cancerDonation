import React,{useState,useEffect} from "react";
import rectangle_24 from "../assets/images/rectangle_24.png";

function Donate() {
  const initialDonationValue = "Enter your amount (BDT)";
  const initialDonorName = "Enter Your Good Name ";
  const initialDonorEmail = "Enter Your Email Address ";
  const initialDonorCountry = "Please Choose Your Country ";

  const [donationValue, setDonationValue] = useState(initialDonationValue);
  const [donorName, setDonorName] = useState(initialDonorName);
  const [donorEmail, setDonorEmail] = useState(initialDonorEmail);
  const [donorCountry, setDonorCountry] = useState(initialDonorCountry);

  const formData = new FormData();

  const setDonation=(value)=>{
    setDonationValue(value)
  }

  const setCustomDonation=(event)=>{
      let customDonation = event.target.value
      setDonationValue(customDonation)
  }

  const donarNameSet=(event)=>{
      setDonorName(event.target.value)
  }

  const donarEmailSet=(event)=>{
    setDonorEmail(event.target.value)
  }

  const donarCountrySet=(event)=>{
  setDonorCountry(event.target.value)
  } 

  formData.append("name",donorName)
  formData.append("email",donorEmail)
  formData.append("country",donorCountry)

  

  const submitDonation = () => {
    console.log("Submitting Donation...");
    setDonationValue(initialDonationValue);
    setDonorName(initialDonorName);
    setDonorEmail(initialDonorEmail);
    setDonorCountry(initialDonorCountry);
  };



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
                placeholder={donationValue}
                onChange={setCustomDonation}
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
                placeholder={donorName}
                onChange={donarNameSet}
              />
            </div>
            <div className="BannerBox" id="ValueBox-10">
              <input
                type="email"
                className="InformationBox"
                id="UserBox-4"
                placeholder={donorEmail}
                onChange={donarEmailSet}
              />
            </div>
            <div className="BannerBox" id="ValueBox-11">
              <input
                type="text"
                className="InformationBox"
                id="UserBox-5"
                placeholder={donorCountry}
                onChange={donarCountrySet}
              />
            </div>
            <div className="BannerBox" id="ValueBox-12">
              <input
                className="InformationBox"
                id="UserBox-6"
                type="button"
                value="DONATE"
                onClick={submitDonation}
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
