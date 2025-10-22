import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5 ' id="supportWrapper">
                <h5 > Support Portal</h5>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-4'>
                <div className='col-6 p-5 mb-4'>
                    <h1 classNAme='fs-3 '>Serach for an answer or browse help topic to create a ticket</h1>
                    <input placeholder='Search for help topics' className='p-3 mt-4 mb-3' style={{width: '80%'}} />
                    <br/>
                    <a href="" className='mx-2'> Track account opening</a>
                   
                    <a href="" className='mx-2'>Track segment activation</a>
                    
                    <a href="" className='mx-2'> Intraday margins</a>
                   
                    <a href="" className='mx-2'>Kite user manual</a>
                    
                    </div>
                    <div className='col-6 p-5 '>
                        <h1> Featured</h1>
                        <ol>
                            <li><a href="">Current Takeover and Delisting - January 2024</a></li>
                            <li><a href="">Latest Intraday leverages - MTS & CO</a></li>
                        </ol>
                        

                </div>
            </div>
        </section>
     );
}

export default Hero;