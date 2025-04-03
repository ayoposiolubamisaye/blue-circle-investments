import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFingerprint, FaUserNurse, FaCarAlt, FaIdCard, FaPassport } from 'react-icons/fa';
import colors from "../styles/colors";
import bluecircleLogo from "../assets/blue-circle-logo.png";

const HeroSection = styled.div`
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
    padding: 4rem 2rem;
    text-align: center;
`;

const HeroContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    .logo {
        width: 180px;
        height: auto;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const ServicesSection = styled.div`
    padding: 4rem 2rem;
    background: ${colors.background};
`;

const SectionTitle = styled.h2`
    text-align: center;
    color: ${colors.primary};
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: ${colors.secondary};
    }
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const ServiceCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
    }

    .icon {
        font-size: 3rem;
        color: ${colors.primary};
        margin-bottom: 1rem;
    }

    h3 {
        color: ${colors.primary};
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        color: ${colors.text};
        line-height: 1.6;
    }
`;

const CTASection = styled.div`
    background: ${colors.primary};
    color: white;
    padding: 4rem 2rem;
    text-align: center;
    margin-top: 4rem;
`;

const CTAContent = styled.div`
    max-width: 800px;
    margin: 0 auto;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled(Link)`
    display: inline-block;
    padding: 1rem 2rem;
    background: ${props => props.$primary ? 'white' : 'transparent'};
    color: ${props => props.$primary ? colors.primary : 'white'};
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.1rem;
    transition: transform 0.3s ease;
    border: ${props => props.$primary ? 'none' : '2px solid white'};

    &:hover {
        transform: scale(1.05);
    }
`;

const Home = () => {
    const featuredServices = [
        {
            icon: <FaFingerprint />,
            title: "Identity Services",
            description: "Professional fingerprinting, biometric services, and NIN/BVN enrollment for Nigerian citizens."
        },
        {
            icon: <FaUserNurse />,
            title: "Healthcare Staffing",
            description: "Connecting qualified nursing professionals with healthcare facilities across the region."
        },
        {
            icon: <FaCarAlt />,
            title: "Automotive Services",
            description: "Complete auto sales, registration, and shipping services with expert assistance."
        },
        {
            icon: <FaIdCard />,
            title: "Background Checks",
            description: "Comprehensive background screening services for employment and verification needs."
        },
        {
            icon: <FaPassport />,
            title: "Documentation",
            description: "Professional notary services and assistance with various identity documentation needs."
        }
    ];

    return (
        <>
            <HeroSection>
                <HeroContent>
                    <img src={bluecircleLogo} alt="Blue Circle Investments Inc." className="logo" />
                    <h1>Blue Circle Investments</h1>
                    <p>Your trusted partner for comprehensive identity services, healthcare staffing, 
                       and automotive solutions. We provide professional services with integrity and excellence.</p>
                    <ButtonGroup>
                        <StyledButton to="/services" $primary>Explore Our Services</StyledButton>
                        <StyledButton to="/booking">Book Now</StyledButton>
                    </ButtonGroup>
                </HeroContent>
            </HeroSection>

            <ServicesSection>
                <SectionTitle>Our Featured Services</SectionTitle>
                <ServicesGrid>
                    {featuredServices.map((service, index) => (
                        <ServiceCard key={index}>
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
            </ServicesSection>

            <CTASection>
                <CTAContent>
                    <h2>Ready to Get Started?</h2>
                    <p>Schedule a consultation or book our services today. We're here to help with all your identity, 
                       staffing, and automotive needs.</p>
                    <StyledButton to="/booking">Book Now</StyledButton>
                </CTAContent>
            </CTASection>
        </>
    );
};

export default Home;