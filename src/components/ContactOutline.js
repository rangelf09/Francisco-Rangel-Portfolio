import React from 'react';


function ContactOutline () {
    return (
    <div className='contact-card'>

        <div className='card'>
            <h1 className='text-center'> Contact Me</h1>
            <div className='card-content'>

                <a href='tel:2145168104' className='ml-4 mt-4 font-weight-bold'>Phone</a>

                <a href='mailto:rangelf09@yahoo.com' className='ml-4 mt-4 font-weight-bold'>Email</a>

                <a href='https://www.linkedin.com/in/francisco-rangel-602747241/' className='ml-4 mt-4 font-weight-bold'>LinkedIn</a>
    
                <a href='https://github.com/rangelf09' className='ml-4 mt-4 font-weight-bold'>Github</a>
            </div>

        </div>

    </div>
    );
}
export default ContactOutline;