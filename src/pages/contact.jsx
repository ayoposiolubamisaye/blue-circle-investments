import React from "react";
import styled from "styled-components";
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import colors from '../styles/colors';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.text};
    font-size: 1.1rem;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${colors.secondary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    font-size: 1.2rem;
    color: ${colors.primary};
    margin-right: 1rem;
    min-width: 24px;
  }

  .text {
    color: ${colors.text};
    line-height: 1.5;
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Header>
        <h1>Contact Us</h1>
        <p>Get in touch with us for all your identity, staffing, and automotive needs</p>
      </Header>

      <ContactInfo>
        <ContactSection>
          <h2>Contact Information</h2>
          <ContactItem>
            <FaMapMarkerAlt className="icon" />
            <div className="text">
              <div>5229 Harford Road</div>
              <div>Baltimore MD 21214</div>
            </div>
          </ContactItem>
          <ContactItem>
            <FaPhone className="icon" />
            <div className="text">
              <div>Main Office: 443-527-0884</div>
              <div>Secondary Line: 443-563-4061</div>
              <div>Direct Line: 443-449-7251</div>
            </div>
          </ContactItem>
          <ContactItem>
            <FaFax className="icon" />
            <div className="text">
              <div>Fax: 443-449-7259</div>
            </div>
          </ContactItem>
          <ContactItem>
            <FaEnvelope className="icon" />
            <div className="text">
              <div>Email: bluecirclehealth@gmail.com</div>
            </div>
          </ContactItem>
        </ContactSection>

        <ContactSection>
          <h2>Business Hours</h2>
          <ContactItem>
            <FaClock className="icon" />
            <div className="text">
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 10:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </ContactItem>
        </ContactSection>
      </ContactInfo>
    </PageContainer>
  );
};

export default Contact;