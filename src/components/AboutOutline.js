import React from 'react';


function AboutOutline() {
    return (
        <div className='about-container'>
            <h5>About Me</h5>
            <img src='' alt='profile-photo' className='profile float-left'></img>

            <div>

                <div className='mt-3'>
                    <p>Hello, I am a Fullstack Developer and have had 6 months of experience with html, javascrip, and css.</p>
                    <p>I am recognize for demonstrating flexibility, team player, and customer-oriented attitude.</p>
                    <p>I am looking for great oppotunites and I can be reached through email: <a href='mailto:rangelf09@yahoo.com' target='_blank'>rangelf09@yahoo.com,</a> through
                    <a href='https://www.linkedin.com/in/francisco-rangel-602747241/'>LinkedIn,</a> or through <a href='https://github.com/rangelf09'>Github</a>  
                    Thank you!</p>
                </div>

                <div className='card-body contactlinks'>
                <a href='https://github.com/rangelf09' className='card-link'>Github</a>
                <a href='https://www.linkedin.com/in/francisco-rangel-602747241/' className='card-link'>LinkedIn</a>

                </div>

            </div>

        </div>
    )
}
export default AboutOutline;