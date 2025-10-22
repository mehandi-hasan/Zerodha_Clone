import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'> 
                    <img src='media/largestBroker.svg'/>

                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in india </h1>
                    <p className='mb-5'>Over 6 million Zerodha clients trade on our platform. We are the largest stock broker in India by active retail clients as per the NSE data.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>6M+ Clients</li>
                                <li>70% Clients from 100+ cities</li>
                                <li>50L+ Daily orders</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>100+ Cities</li>
                                <li>2L+ Daily trades in F&O</li>
                                <li>5000+ Stocks listed</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style= {{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;