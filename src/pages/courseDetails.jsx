import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const courseDetails = () => {
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
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{course.title}</h1>
      <img
        src={course.image || '/assets/default-image.jpg'}
        alt={`${course.title} image`}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <p><strong>Course:</strong> {course.course}</p>
      <p><strong>Study Period:</strong> {course['studying period']}</p>
      <p><strong>Batch:</strong> {course.batch}</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => alert('Enrollment feature coming soon!')}
      >
        Enroll Now
      </button>
    </div>
  );
};

export default courseDetails;
