import { Box, Container, Grid,Typography} from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'
import BurgerImg from '../../static/burger1.jpg';  
import DrinkImg from '../../static/drinks.jpg';  
import MeatImg from '../../static/meat.jpg';  
import AppetizerImg from '../../static/appetizer.jpg'; 
import Category from '../CategoryList/Category';



const Hero = () => {

    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
       
       cursor:'pointer',
       [theme.breakpoints.up('md')]:{
        height:400,

       },
       [theme.breakpoints.down('md')]:{
        height:200,

       },
       '&:hover':{
        opacity:0.8,
        boxSizing:'borderBox',
        zIndex:1,
        transition:`all 0.45s ease `,
       }
    }))

    const StyledTypography= styled(Typography)({
        textAlign:'center',
        color:'Blue',
        backgroundColor:'tomato',
        fontSize:20,
        cursor:'pointer',
        '&:hover':{
            opacity:0.5,
            boxSizing:'borderBox',
            zIndex:1,
            transition:`all 0.45s ease `,
           }})

    const StyledWrapper = styled(Box)(({theme})=>({

      [theme.breakpoints.up('md')]:{
        paddingTop:'5%',

       },

       [theme.breakpoints.down('md')]:{
        paddingTop:'0.5%',

       },
       width:'100%',

       }))
  return (

    <Container>
        <Grid container direction={'row'} columnSpacing={2} rowSpacing={2}>
            <Grid item md={3} xs={6}>
            <StyledWrapper>
                <StyledCard sx={{backgroundImage:`url(${BurgerImg})`}}></StyledCard> 

                <StyledTypography>Burger</StyledTypography>
                </StyledWrapper>
                
                 </Grid>
                    
                <Grid item md={3} xs={6}>
                <StyledWrapper>
                <StyledCard sx={{backgroundImage:`url(${MeatImg})`}}></StyledCard>
                <StyledTypography>Meat</StyledTypography>
                </StyledWrapper>
                </Grid>

                <Grid item md={3} xs={6}>
                  <StyledWrapper>
                <StyledCard sx={{backgroundImage:`url(${DrinkImg})`}}></StyledCard>
                <StyledTypography>Drink</StyledTypography>

                </StyledWrapper>
                </Grid>

                
                <Grid item md={3} xs={6}>
                  <StyledWrapper>
                <StyledCard sx={{backgroundImage:`url(${AppetizerImg})`}}></StyledCard>
                <StyledTypography>Appetizer</StyledTypography>
                </StyledWrapper>
                </Grid>
           

                   
        </Grid>
        <Category/>
    </Container>
    
    
  )
}

export default Hero