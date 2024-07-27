import React from 'react'
import { Box, Typography,CardMedia,Card, TextField,  IconButton} from '@mui/material'
import {Send as SendIcon} from '@mui/icons-material'
import ChefImg from '../../static/chef.jpg';  

const RightBar = () => {
  return (
    <Box sx={{padding:2}}>
     
     <Typography variant='h5' align='center' mt={5}>
       HEY I'M CHANDRA
     </Typography>
     <CardMedia component={'img'} height= '300' image={ChefImg} alt = 'burger_img'
          sx={{width:'400px', cursor:'pointer', '&:hover':{
            opacity:0.8,
            boxSizing:'border-box',
            zIndex:1,
            transition:`all 0.50s ease`

          }}}
          
          />

          <Typography align='left' variant='body1'>
          "To me, cooking is an expression of the land where you are and the culture of that place."

          </Typography>
          <br/>

          <Typography align='left' variant='body1'>

          Come Again!!!. <br/> <a href='google.com'> Read More</a> 
          

          </Typography>

          <Card sx={{height:'220px', marginTop:2}}>
          <Typography align='center' variant='body1'>
            Ads here!!!!
          </Typography>

          </Card>

          <Typography align='center' color= 'white' bgcolor="blue" mt={2}>
            Subscribe Via Email
          </Typography>
          <Box sx={{pl:10}}>
            <TextField label='Your E-mail here'
             variant='standard' 
             color='warning'/>

             <IconButton>
              
              <SendIcon sx={{color:'tomato'}}/>

             </IconButton>
            
          </Box>
          
          <Card sx={{height:'220px', marginTop:2}}>
          <Typography align='center' variant='body1'>
            Ads here!!!!
          </Typography>

          </Card>

    </Box>
  )
}

export default RightBar
