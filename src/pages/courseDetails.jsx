import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const CourseDetails = () => {
  const { courseId } = useParams(); // Correct capitalization
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/courses.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        return response.json();
      })
      .then((data) => {
        const selectedCourse = data.courses.find((course) => course.id === parseInt(courseId));
        setCourse(selectedCourse);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, [courseId]);

  if (!course) {
    return <div>Loading course details...</div>;
  }

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 2,
        textAlign: 'center',
        '@media (max-width: 600px)': {
          padding: 1,
        },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        {course.title}
      </Typography>
      <Box
        sx={{
          mb: 3,
          '@media (max-width: 600px)': {
            maxWidth: '100%',
          },
        }}
      >
        <img
          src={course.image || '/assets/default-image.jpg'}
          alt={`${course.title} image`}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        <strong>Course:</strong> {course.course}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        <strong>Study Period:</strong> {course['studying period']}
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        <strong>Batch:</strong> {course.batch}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          '@media (max-width: 600px)': {
            width: '100%', // Full-width on small screens
            padding: '12px 0',
          },
        }}
        onClick={() => alert('Enrollment feature coming soon!')}
      >
        Enroll Now
      </Button>
    </Box>
  );
};

export default CourseDetails;
