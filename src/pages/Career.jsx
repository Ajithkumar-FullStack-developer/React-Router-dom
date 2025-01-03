import React from 'react';
import { Button } from '@mui/material';

const Career = () => {
  return (
    <div 
      style={{ 
        padding: '20px', 
        fontFamily: 'Arial, sans-serif', 
        textAlign: 'left'
      }}
    >
      <h1>Build Your Future with Us</h1>
      <p>
        At <strong>Our Company</strong>, we believe in empowering individuals to achieve their full potential. 
        We’re committed to fostering an environment where innovation, growth, and excellence are celebrated.
      </p>

      <h2>Why Join Us?</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Work with a team of passionate professionals who inspire and support each other.</li>
        <li>Enjoy continuous learning opportunities to grow both personally and professionally.</li>
        <li>Be part of impactful projects that make a difference in the world.</li>
        <li>Experience a culture of inclusivity, diversity, and collaboration.</li>
      </ul>

      <h2>Set Your Goals</h2>
      <p>
        Dream big, and we’ll help you turn those dreams into reality. At <strong>Our Company</strong>, we’re here 
        to support your career aspirations and guide you along the way. Whether you’re just starting out or 
        looking to take your career to the next level, this is the place to be.
      </p>

      <h2>Motivational Thought</h2>
      <blockquote 
        style={{ 
          fontStyle: 'italic', 
          color: '#555', 
          borderLeft: '4px solid #007BFF', 
          paddingLeft: '10px', 
          textAlign: 'left' // Ensure blockquote content is also aligned left
        }}
      >
        "The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt
      </blockquote>

      <p style={{ marginTop: '20px' }} 
        onClick={() => alert('Feature coming soon!')}
      >
        <a style={{ 
            textDecoration: 'none', 
            color: '#007BFF', 
            fontWeight: 'bold',
            textAlign: 'left' // Ensure link text aligns left
          }}
        >
          <Button>Start Your Journey with Us</Button>
        </a>
      </p>
    </div>
  );
};

export default Career;
