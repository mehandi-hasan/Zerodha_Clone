import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{textDecoration:"none"}}>
            <h3 className='fs-5'> Brokerage calculator</h3>
          </a>
          <ul className='text-start mt-3 text-muted' >
            <li className='mb-3'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
            <li className='mb-3'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
            <li className='mb-3'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
            <li className='mb-3'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
            <li className='mb-3'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
         <a href="" style={{textDecoration:"none"}}>
            <h3 className='fs-5'> List of charge</h3>
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default Brokerage;
