import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import bluecircleLogo from '../assets/blue-circle-logo.png';
import { FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const BookingContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
`;

const LogoSection = styled.div`
    text-align: center;
    margin-bottom: 3rem;

    img {
        width: 160px;
        height: auto;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 2.5rem;
        color: ${colors.primary};
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        color: ${colors.text};
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }
`;

const Benefits = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Benefit = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .icon {
        font-size: 1.5rem;
        color: ${colors.primary};
        margin-top: 0.2rem;
    }

    div {
        h3 {
            color: ${colors.primary};
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        p {
            color: ${colors.text};
            line-height: 1.5;
        }
    }
`;

const CalendarSection = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h2 {
        text-align: center;
        color: ${colors.primary};
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }

    iframe {
        width: 100%;
        height: 600px;
        border: none;
    }
`;

const Booking = () => {
    return (
        <BookingContainer>
            <LogoSection>
                <img src={bluecircleLogo} alt="Blue Circle Investments Inc." />
                <h1>Schedule Your Appointment</h1>
                <p>
                    Take the first step towards professional identity services, healthcare staffing solutions, 
                    or automotive assistance. Book your consultation today.
                </p>
            </LogoSection>

            <Benefits>
                <Benefit>
                    <FaCalendarAlt className="icon" />
                    <div>
                        <h3>Flexible Scheduling</h3>
                        <p>Choose from a wide range of available time slots that work best for you</p>
                    </div>
                </Benefit>
                <Benefit>
                    <FaClock className="icon" />
                    <div>
                        <h3>Quick Process</h3>
                        <p>Most services can be completed within 15-30 minutes of your scheduled time</p>
                    </div>
                </Benefit>
                <Benefit>
                    <FaCheckCircle className="icon" />
                    <div>
                        <h3>Professional Service</h3>
                        <p>Expert assistance from our trained and certified professionals</p>
                    </div>
                </Benefit>
            </Benefits>

            <CalendarSection>
                <h2>Select Your Preferred Time</h2>
                <iframe 
                    src="https://bluecircle.neetocal.com/meeting-with-olubayo-bamisaye"
                    title="Booking Calendar"
                />
            </CalendarSection>
        </BookingContainer>
    );
};

export default Booking;