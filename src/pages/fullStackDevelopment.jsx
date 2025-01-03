import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FullStackDevelopment() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/courses.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        return response.json();
      })
      .then((data) => {
        const fullStackCourses = data.courses.filter((course) => course.course === 'Full Stack Development');
        setCourses(fullStackCourses);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <Grid container spacing={2} direction="row" wrap="wrap" mt={5} justifyContent="center">
      {courses.map((course) => (
        <Grid item key={course.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h4">
                {course.title}
              </Typography>
            </CardContent>

            <CardMedia
              component="img"
              alt={`${course.course} image`}
              height="340"
              width="300"
              image={course.image || 'default-image-url.jpg'} // Fallback image
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.course}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Batch {course.batch} | {course['studying period']}
              </Typography>
              <Button
                component={Link}
                to={`/course/${course.id}`}
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Apply
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
