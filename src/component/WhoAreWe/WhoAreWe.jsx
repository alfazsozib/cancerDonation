import React from "react";
import rectangle_4 from "../assets/images/rectangle_4.png";
function WhoAreWe() {
  return (
    <main>
      <div className="WhatAreWE" id="whoWeAre">
      <div className="WhatAreWE-image"><img src={rectangle_4} alt="" /></div>
      <div className="WhatAreWe-banner">
        <h1 className="WhatAreWe-banner-title">WHo are we?</h1>
        <p className="WhatAreWe-banner-description">
          [Charity Name] is a reputable charitable organization dedicated to
          providing support and assistance to individuals and families affected
          by cancer. Established with a commitment to making a positive impact,
          we are a collective of compassionate individuals driven by a shared
          desire to alleviate the challenges faced by those dealing with cancer.
        </p>
        <h3 className="Our-Mission" >Our Mission</h3>
        <p className="Our-Mission-description" >The mission of [Charity Name] is to offer comprehensive support and resources to cancer patients and their loved ones, aiming to enhance their quality of life and ease the burden associated with the disease. Through our steadfast dedication and collaborative efforts, we endeavor to empower individuals affected by cancer, providing them with the necessary tools and assistance to navigate their journey with dignity and hope.</p>
      </div>
    </div>
    </main>
  );
}

export default WhoAreWe;
