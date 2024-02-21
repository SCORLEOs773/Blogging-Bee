import React from 'react';
import Bee from '../images/bee gif.gif';

export default function Error404() {
    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            <center>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <div className="flying-bee">
                    <img src={Bee} alt="The Blogging Bee" height={'300px'} style={{ margin: '30px 0px 0px 300px' }} />
                </div>
            </center>
        </div>
    );
}
