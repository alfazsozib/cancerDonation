import React from "react";
import rectangle_6 from "../assets/images/rectangle_6.png";

function WhatWeDo() {
  return (
    <main>
      <div className="WhatWeDO" id="whatWeDo">
        <div className="WhatWeDO-image">
          <img src={rectangle_6} alt="" />
        </div>
        <div className="WhatWeDO-banner-container">
          <div className="box" id="box-1">what we do?</div>
          <div className="box" id="box-2">
            <h3 className="box-title">Financial Assistance</h3>
            <p className="box-description">
              We provide financial support to alleviate the burden of medical
              expenses, treatment costs, and other financial challenges
              associated with cancer care. Our assistance programs aim to ensure
              that individuals can access the necessary treatment and support
              services without added financial strain.
            </p>
          </div>
          <div className="box" id="box-3">
            <h3 className="box-title">Emotional Support Services</h3>
            <p className="box-description">
              Navigating through cancer can take a toll emotionally. Our team,
              comprised of trained professionals and volunteers, provides
              counseling, support groups, and various emotional support services
              to assist individuals and families in coping with the emotional
              challenges that come with a cancer diagnosis and treatment.
            </p>
          </div>
          <div className="box" id="box-4">
            <h3 className="box-title">Educational Resources</h3>
            <p className="box-description">
              Knowledge is power. We offer educational resources and information
              on cancer prevention, early detection, treatment options, and
              coping strategies. Our goal is to empower individuals with the
              knowledge they need to make informed decisions about their health
              and well-being.
            </p>
          </div>
          <div className="box" id="box-5">
            <h3 className="box-title">Community Outreach and Advocacy</h3>
            <p className="box-description">
              We engage in community outreach efforts to raise awareness about
              cancer prevention, early detection, and support services
              available. Additionally, we advocate for policies and initiatives
              that improve access to quality cancer care and support services
              for all individuals affected by cancer.
            </p>
          </div>
          <div className="box" id="box-6">
            <h3 className="box-title">Patient Navigation</h3>
            <p className="box-description">
              Our patient navigation services are designed to assist individuals
              in navigating the intricate landscape of cancer care. We offer
              guidance and support to help them maneuver through the healthcare
              system, access necessary resources, and overcome any logistical
              obstacles to receiving care.
            </p>
          </div>
          <div className="box" id="box-7">
            <h3 className="box-title">Fundraising Initiatives</h3>
            <p className="box-description">
              We organize and facilitate various fundraising initiatives to
              support our mission of providing financial assistance, emotional
              support, educational resources, community outreach, and patient
              navigation services to individuals and families affected by
              cancer. Through donations, sponsorships, events, and campaigns, we
              raise vital funds to continue our efforts in helping those in need
              throughout their cancer journey. Join us in making a difference
              today.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhatWeDo;
