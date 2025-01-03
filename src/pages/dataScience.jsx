import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function DataScience() {
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
        const DatascienceCourses = data.courses.filter((course) => course.course === 'Data Science');
        setCourses(DatascienceCourses);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <Grid2 container spacing={2} mt={5} justifyContent="center">
      {courses.map((course) => (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={course.id}>
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
              image={course.image} // Fallback image
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
        </Grid2>
      ))}
    </Grid2>
  );
}
