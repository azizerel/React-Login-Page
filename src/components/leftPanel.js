import React from 'react';
import '.././App.css';

function LeftPanel() {
  return (
      <div className = "leftPanel">
         <div className="leftPanelContent">
            <p>
            Your Space To <br/>
            Be Social
            </p>
            <article>
            Blast off today and join the fun! Getting started is
            onlya few clicks away.
           </article>
           <div className="buttonGroup">
              <input type="button" value="Learn More" />
              <input type="button" value="Our Features" />
          </div>
         </div>
      </div>
  );
}
export default LeftPanel;
