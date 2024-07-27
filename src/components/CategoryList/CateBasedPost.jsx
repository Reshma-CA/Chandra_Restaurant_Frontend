import React, { useState } from 'react'
import { Box,  Container,  Grid,Pagination,Stack,Typography} from '@mui/material'
import PostsCard from '../Posts/PostsCard'
import { useEffect } from 'react'
import axios from 'axios'
import {REACT_APP_API_URL} from '../apikeys/Constants';
import { useParams } from 'react-router-dom'


const CateBasedPost = () => {

    let {id} = useParams()
  

   const [blog,setBlog] = useState([])

   useEffect(()=>{
      const fetchData = async () => {
         try {
            const res = await axios.get(`${REACT_APP_API_URL}/api/category/${id}`);
            setBlog(res.data);
            
         } catch (error) {
            alert(error)
        
            
         }
      }
      fetchData()
   },[id])


  return (
    
  
    <Container>
        <Typography variant='h4' align='center'>
            {" "}
            Categories Page
            {" "}
            </Typography>

        <Grid Container columnSpacing={{xs:0, sm:1, md:1}}  direction={'row'}>

          

            {blog.map(post => (
            <Grid item xs key={post.id}>
               <PostsCard title={post.title} excerpt={post.excerpt} image={`${REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.id}`} myDirection={'flex'} />
            </Grid>
            ))}
       
        </Grid>
                                              
          
            
    

            
        <Stack spacing={2}
         mt={3}
          mb={3} 
          justifyContent='center' 
          alignItems={'center'}>

         <Pagination count={10} color="warning" /></Stack>
        

        
    </Container>
  )
}

export default CateBasedPost