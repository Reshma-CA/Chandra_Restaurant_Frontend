// import React from 'react'
import { Container,Typography ,Box, CardMedia, List, ListItemIcon, ListItemText, ListItemButton  } from '@mui/material';  
import Category from '../CategoryList/Category';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BurgerImg from '../../static/burger1.jpg';   
import Footer from '../Footer/Footer';
import Suggessions from '../Suggessions/Suggessions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios'
import {REACT_APP_API_URL} from '../apikeys/Constants';


const Details = () => {

         

        const [Details,setDetails] = useState([])

        const[PostIngredients,setPostIngredients] = useState('')


        const completeImageUrl = `${REACT_APP_API_URL}${Details.image}`;
        let {id} = useParams()

        useEffect(()=>{
            const fetchData = async () => {
              try {
                const res = await axios.get(`${REACT_APP_API_URL}/api/details/${id}`);

                  setDetails(res.data);
                  // setPostIngredients()
                  const ingredientsString = Array.isArray(Details.ingredients) ? Details.ingredients.join(', ') : Details.ingredients;
                  setPostIngredients(ingredientsString);
                
                  
              } catch (error) {
                  alert(error)
              
                  
              }
            }
            fetchData()
        },[ Details.ingredients])


  return (
    <Container>

         <Category/>
         
         <Typography gutterBottom variant='h3' align='center' mt={4}>
             {Details.title}
          </Typography>

          <Typography variant='body2'  align='center' color={'Graytext'} p={4}>
           {Details.excerpt}                
          </Typography>

          <Typography variant='body1'  align='center'  m={2}>
            {Details.content}
          </Typography>

   


         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
                sx={{ height: '500px', width: '500px' }}
                component='img'
                image={completeImageUrl}
                alt='Burger Food'
            />
            </Box>

            
          <Typography variant='body1'  align='center' m={2}>
            {Details.contentTwo}
          </Typography>

          <Typography variant='h3'  align='center'  m={2}>
             Ingredients
          </Typography>

          {/* <List>
            {Details.ingredients}

            {PostIngredients.split(',').map((ingredients)=>

                <ListItemButton>
                <ListItemIcon>
                <KeyboardArrowRightIcon />                
                </ListItemIcon>
                <ListItemText primary={ingredients}/>
                </ListItemButton>)}
        
          </List>    */}

          <List>
              {PostIngredients && PostIngredients.split(',').map((ingredient, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <KeyboardArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={ingredient.trim()} />
                </ListItemButton>
              ))}
            </List>

            
          <Typography variant='body1'  align='center' m={2}>
          {/* {Details.contentTwo} */}
          </Typography>

          
          <Typography variant='h5'  align='center'  m={2} bgcolor={'black'} color={'white'}>
             You may also like.
          </Typography>
          
          <Suggessions/>
          <Footer/>
          
    </Container>
    
  )
}

export default Details