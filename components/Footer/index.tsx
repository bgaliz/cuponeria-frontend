import { NextComponentType } from 'next';

import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterWrapper, Content, BackgroundCircle } from './styles';

export const Footer: NextComponentType = () => {
    return (
        <FooterWrapper>
            <Content>
                <BackgroundCircle href='https://www.facebook.com/Cuponeria/'>
                    <FontAwesomeIcon icon={faFacebookF} width={25} height={25}/>
                </BackgroundCircle>
                <BackgroundCircle href='https://www.instagram.com/Cuponeria/'>
                    <FontAwesomeIcon icon={faInstagram} width={25} height={25}/>
                </BackgroundCircle>
                <BackgroundCircle href='https://www.twitter.com/Cuponeria/'>
                    <FontAwesomeIcon icon={faTwitter} width={25} height={25}/>
                </BackgroundCircle>
                <BackgroundCircle href='https://www.youtube.com/CuponeriaCanal/'>
                    <FontAwesomeIcon icon={faYoutube} width={25} height={25}/>
                </BackgroundCircle>
            </Content>
        </FooterWrapper>
    )
}