import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function AppFooter() {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log('llll',document.documentElement.scrollTop > 20)
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                setShowTopBtn(true);
            }
            else{
                setShowTopBtn(false);
            }
        })
    }, [])

    const goTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  return (
    <Container fluid>
        <div className='copyright'>
            &copy; 2022 Corporate. All Right Reserved.
        </div>
        <div className='socials'>
            <ul>
                <li><a href='https://www.facebook.com'><i className='fab fa-facebook-f'></i></a></li>
                <li><a href='https://www.twitter.com'><i className='fab fa-twitter'></i></a></li>
                <li><a href='https://www.linkedin.com'><i className='fab fa-linkedin-in'></i></a></li>
            </ul>
        </div>
        {
            showTopBtn && (<div className='go-top' onClick={goTop}></div>)
        }
    </Container>
  )
}

export default AppFooter