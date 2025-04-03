import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';
import bluecircleLogo from '../assets/blue-circle-logo.png';

const FooterContainer = styled.footer`
    background: ${colors.primary};
    color: white;
    padding: 4rem 2rem;
    margin-top: 4rem;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
`;

const FooterSection = styled.div`
    .logo {
        width: 150px;
        height: auto;
        margin-bottom: 1rem;
    }

    h3 {
        color: white;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }

    p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        margin-bottom: 1rem;
    }
`;

const FooterLink = styled(Link)`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: white;
    }
`;

const Copyright = styled.div`
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <img src={bluecircleLogo} alt="Blue Circle Investments Inc." className="logo" />
                    <p>Your trusted partner for comprehensive identity services, healthcare staffing, and automotive solutions.</p>
                </FooterSection>
                
                <FooterSection>
                    <h3>Quick Links</h3>
                    <FooterLink to="/services">Services</FooterLink>
                    <FooterLink to="/testimonials">Testimonials</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/booking">Book Now</FooterLink>
                </FooterSection>

                <FooterSection>
                    <h3>Contact Info</h3>
                    <p>5229 Harford Road</p>
                    <p>Baltimore MD 21214</p>
                    <p>Main Office: 443-527-0884</p>
                    <p>Email: bluecirclehealth@gmail.com</p>
                </FooterSection>
            </FooterContent>
            
            <Copyright>
                © {new Date().getFullYear()} Blue Circle Investments Inc. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer; 