import React from 'react'

function Footer() {
    return (
        <>
            <footer className='footer_section'>
                <div className="container">
                    <div className="main_content">
                        <div className="f_head">
                            <img src="./logo/logo.png" alt="" />
                        </div>
                        <div className="f_body text-white">
                            <p>5th Floor, Plot 23, Silicon Park, Silicon Valley, Madhapur , Hyderabad, Telangana 500032</p>
                        </div>
                        <div className="f_foot">
                            <div className="social_link text-white">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-solid fa-envelope"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
