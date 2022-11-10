import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer bg-dark">
                <div className="socials">
                    <a href="https://web.facebook.com" rel="noreferrer noopener" target='_blank'><i className="fab fa-facebook"></i></a>
                    <a href="https://www.youtube.com"  rel="noreferrer noopener" target='_blank'><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com" rel="noreferrer noopener" target='_blank'><i className="fab fa-instagram"></i></a>
                </div>
                <p>
                    Copyright &copy; 2022 &nbsp; | &nbsp; <a href="thankyou.html"><i className="fas fa-car text-primary"></i></a> Tolima-Motor's
                </p>
            </footer>
        </>
    )
}
