import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AllCourses() {
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
        // Set all courses without filtering
        setCourses(data.courses);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" mt={5}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={`${course.course} image`}
              height="200"
              image={course.image} // Fallback image
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.course}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Batch {course.batch} | {course["studying period"]}
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
