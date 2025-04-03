import React from 'react';
import { FaFingerprint, FaUserNurse, FaCarAlt, FaIdCard, FaFileContract, FaShip, FaPassport } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import styled from 'styled-components';
import colors from '../styles/colors';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${colors.text};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCategory = styled.div`
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2rem;
    color: ${colors.primary};
    margin-bottom: 2rem;
    text-align: center;
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
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .icon {
    font-size: 2.5rem;
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

const Services = () => {
  const identityServices = [
    {
      icon: <FaFingerprint />,
      title: "Fingerprinting & Biometric Services",
      description: "Professional fingerprinting and biometric data collection services for various purposes including background checks and identification."
    },
    {
      icon: <FaUserNurse />,
      title: "Nurse Staffing Agency",
      description: "Connecting qualified nursing professionals with healthcare facilities. Comprehensive staffing solutions for the healthcare industry."
    },
    {
      icon: <MdSecurity />,
      title: "Background Checks",
      description: "Thorough background screening services for employment, housing, and other verification needs."
    },
    {
      icon: <FaIdCard />,
      title: "NIN & BVN Enrollment",
      description: "Assistance with National Identification Number (NIN) and Bank Verification Number (BVN) registration for Nigerian citizens."
    },
    {
      icon: <FaFileContract />,
      title: "Notary Service",
      description: "Professional notary services for document verification, witnessing signatures, and certifying documents."
    },
    {
      icon: <FaPassport />,
      title: "Identity Documentation",
      description: "Assistance with various identity documentation needs including registration and verification services."
    }
  ];

  const automotiveServices = [
    {
      icon: <FaCarAlt />,
      title: "Auto Sales & Notary Service",
      description: "Professional auto sales service with integrated notary services for seamless vehicle purchases and documentation."
    },
    {
      icon: <FaCarAlt />,
      title: "Auction Buying Assistance",
      description: "Expert guidance and assistance with vehicle auction purchases, helping you find the best deals."
    },
    {
      icon: <FaShip />,
      title: "Shipping & Forwarding Agent",
      description: "Comprehensive shipping and forwarding services for vehicles, including international transport arrangements."
    },
    {
      icon: <FaIdCard />,
      title: "Vehicle Registration",
      description: "Complete vehicle registration services for all types of vehicles, handling all necessary documentation and processes."
    }
  ];

  return (
    <ServicesContainer>
      <ServiceHeader>
        <h1>Our Services</h1>
        <p>Comprehensive solutions for identity services, healthcare staffing, and automotive needs</p>
      </ServiceHeader>

      <ServiceCategory>
        <h2>Identity & Staffing Services</h2>
        <ServicesGrid>
          {identityServices.map((service, index) => (
            <ServiceCard key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServiceCategory>

      <ServiceCategory>
        <h2>Automotive Services</h2>
        <ServicesGrid>
          {automotiveServices.map((service, index) => (
            <ServiceCard key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServiceCategory>
    </ServicesContainer>
  );
};

export default Services;