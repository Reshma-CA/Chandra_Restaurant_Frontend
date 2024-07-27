import React from 'react';
import { Box, CardMedia,  Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import HealthyImg from '../../static/healthy.jpg';

const PostsCard = ({ myDirection,title,excerpt,blogHref,image }) => {
  return (
    <Box mt={3} sx={{ display: 'flex', flexDirection: myDirection }}>
      <Card sx={{ maxWidth: 400, width: '100%', '&:hover': { opacity: 0.8 } }}>
      {/* <Link to={blogHref} sx={{ textDecoration: 'none' }}>
      <CardMedia
            component="img"
            height="300"
            image={image}
            alt="burger_img"
            sx={{ objectFit: 'cover', cursor: 'pointer' }}
          />
        </Link> */}

        <Link to={blogHref} sx={{ textDecoration: 'none' }}>
          <CardMedia
            component="img"
            height="300"
            width="100%" // Ensure the image covers the entire area
            image={image}
            alt="burger_img"
            sx={{ objectFit: 'cover', cursor: 'pointer' }}
          />
        </Link>


        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            {title}
          </Typography>
          <Typography variant="h7 " color='text.secondary'>
            {excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ color: 'tomato' }} size="small">
            Share
          </Button>
          <Button sx={{ color: 'tomato' }} size="small">
            Learn More
          </Button>
          <Button sx={{ color: 'tomato' }} size="small">
            Like
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostsCard;
