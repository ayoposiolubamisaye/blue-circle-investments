import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#1a1a1a' : '#e0e0e0'};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
  
  &:hover {
    color: #1a1a1a;
  }
`;

const SubmitButton = styled.button`
  background: #1a1a1a;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #333333;
  }
  
  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  margin-right: 1rem;
`;

const TestimonialInfo = styled.div`
  flex: 1;
`;

const TestimonialName = styled.h3`
  margin: 0;
  color: #1a1a1a;
`;

const TestimonialDate = styled.p`
  margin: 0;
  color: #4a4a4a;
  font-size: 0.9rem;
`;

const TestimonialRating = styled.div`
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const TestimonialText = styled.p`
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;
`;

const ServiceType = styled.span`
  display: inline-block;
  background: #f5f5f5;
  color: #1a1a1a;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  background: #4CAF50;
  color: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  background: #f44336;
  color: #ffffff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  &:after {
    content: '';
    width: 32px;
    height: 32px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #1a1a1a;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const EmptyStateText = styled.p`
  color: #4a4a4a;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const testimonialData = [
    {
        id: 1,
        name: "Tiffany Brown",
        rating: 5,
        date: "2021-03-15",
        service: "Fingerprinting Services",
        text: "At a time when fingerprinting services are booked to capacity, I was able to get a same day appointment. I'll admit this made me a little skeptical... but the guy was able to get me in and fingerprinted in record time. I'm so thankful. This is a hidden gem."
    },
    {
        id: 2,
        name: "Mike Alksnis",
        rating: 5,
        date: "2023-03-10",
        service: "Fingerprinting Services",
        text: "Legit fingerprinting provider. Accessible by phone for appointments. Quick service."
    },
    {
        id: 3,
        name: "Ehsan Owrangi",
        rating: 5,
        date: "2022-03-08",
        service: "Fingerprinting Services",
        text: "I had a great experience with them. I went there for fingerprinting. It was done as walk-in, and was actually cheaper than every other place. I highly recommend their services."
    }
];

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <Container>
      <Header>
        <Title>Client Testimonials</Title>
        <Subtitle>See what our valued clients have to say about our services</Subtitle>
      </Header>

      <TestimonialsGrid>
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialHeader>
              <Avatar>
                {testimonial.name.charAt(0)}
              </Avatar>
              <TestimonialInfo>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialDate>
                  {new Date(testimonial.date).toLocaleDateString()}
                </TestimonialDate>
              </TestimonialInfo>
            </TestimonialHeader>
            <TestimonialRating>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < testimonial.rating ? "#1a1a1a" : "#e0e0e0"}
                />
              ))}
            </TestimonialRating>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <ServiceType>{testimonial.service}</ServiceType>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Container>
  );
};

export default Testimonials;