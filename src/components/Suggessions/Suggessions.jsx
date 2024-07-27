import React from 'react'

import { Box, Stack,Typography,styled} from '@mui/material'
// import { styled } from '@mui/system';
import DrinkImg from '../../static/drinks.jpg';
import DesertImg from '../../static/dessert.jpg'; 
import DinnerImg from '../../static/dinner.jpg'; 
import BreakfastImg from '../../static/breakfast2.jpg';   


const Suggessions = () => {

    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        
        overflow:'hidden',
        width:'100px',
        cursor:'pointer',
       [theme.breakpoints.up('md')]:{
        height:100,

       },
       [theme.breakpoints.down('md')]:{
        height:100,

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
        color:'black',
        fontSize:20,
       })

    const CardBox = styled(Box)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    })
  return (
    <Stack 
    Container 
    direction={'row'} 
    justifyContent='center'
    alignItems='center'
    mt={4} 
    spacing={4} 
    ml={3} 
    sx= {{overflow:'auto'}}>
        <CardBox>
        <StyledCard sx ={{backgroundImage:`url(${DrinkImg})`}}/>

        <StyledTypography>Drinks</StyledTypography>
        </CardBox>

        <CardBox>
        <StyledCard sx ={{backgroundImage:`url(${DesertImg})`}}/>

        <StyledTypography>Dessert</StyledTypography>
        </CardBox>

        <CardBox>
        <StyledCard sx ={{backgroundImage:`url(${DinnerImg})`}}/>

        <StyledTypography>Dinner</StyledTypography>
        </CardBox>

        <CardBox>
        <StyledCard sx ={{backgroundImage:`url(${BreakfastImg})`}}/>

        <StyledTypography>Break Fast</StyledTypography>
        </CardBox>

       

    </Stack>
  )
}

export default Suggessions