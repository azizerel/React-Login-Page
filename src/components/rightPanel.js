import React from 'react';
import '.././App.css';

function RightPanel() {
  return (

<div className = "rightPanel">
  <div className="rightContent">
      <div className="rightHeader">
        <h4> Let's Prepare For Lunch!</h4>
        <p> Getting Started is quick, just fill out the into below </p>
      </div>
      <div className="rightBody">
        <input type="text" placeholder ="Name"/>
        <input type="text" placeholder="Email Adress"/>
        <input type="text" placeholder="Password"/>
        <input type="checkbox" id="terms" name="terms"/>
        <label for="terms"> I agree to </label><label for="terms" id="termConditions">Terms & Conditions</label>
      </div>
  </div>
</div>
);
}
export default RightPanel;
