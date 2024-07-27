import React, { useState }from 'react'
import { Box, Link, Stack,Typography,styled} from '@mui/material'
import DrinkImg from '../../static/drinks.jpg';

import { useEffect } from 'react'
import axios from 'axios'
import {REACT_APP_API_URL} from '../apikeys/Constants';



const Category = () => {

  const [category,setcategory] = useState([])

  useEffect(()=>{
     const fetchData = async () => {
        try {
           const res = await axios.get(`${REACT_APP_API_URL}/api/category/`);
           setcategory(res.data);
           
        } catch (error) {
           alert(error)
       
           
        }
     }
     fetchData()
  },[])


    const StyledCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        borderRadius:'100%',
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
    mt={4} 
    spacing={4} 
    ml={3} 
    sx= {{overflow:'auto'}}>

            {category.map(post => (

            <Link href={`category/${post.id}`} sx = {{textDecoration:'none'}}  >
               <CardBox>
               <StyledCard sx ={{backgroundImage:`url(${REACT_APP_API_URL}${post.image})`}}/>
         
               <StyledTypography>{post.name}</StyledTypography>
               </CardBox>
               </Link>
                  ))}
            
        
       {/* image={`${REACT_APP_API_URL}${post.image}`} */}
        

    </Stack>
    
  )
}

export default Category
