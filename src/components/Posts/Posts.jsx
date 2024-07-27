import React, { useState } from 'react'
import { Box,  Grid,Pagination,Stack,Typography} from '@mui/material'
import PostsCard from './PostsCard'
import { useEffect } from 'react'
import axios from 'axios'
import {REACT_APP_API_URL} from '../apikeys/Constants';

const Posts = () => {

   const [blog,setBlog] = useState([])

   useEffect(()=>{
      const fetchData = async () => {
         try {
            const res = await axios.get(`${REACT_APP_API_URL}/api/blogs/`);
            setBlog(res.data);
            
         } catch (error) {
            alert(error)
        
            
         }
      }
      fetchData()
   },[])

   const [popular,setPopular] = useState([])

   useEffect(()=>{
      const fetchData = async () => {
         try {
            const res = await axios.get(`${REACT_APP_API_URL}/api/popular/`);
            setPopular(res.data);
            
         } catch (error) {
             alert(error)
        
            
         }
      }
      fetchData()
   },[])
  return (
    
    <Box>
        <Typography variant='h4' align='center'>Latest Recipies</Typography>

        <Grid Container columnSpacing={{xs:0, sm:1, md:1}}  direction={'row'}>

          

            {blog.map(post => (
            <Grid item xs key={post.id}>
               <PostsCard title={post.title} excerpt={post.excerpt} image={`${REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.id}`} myDirection={'flex'} />
            </Grid>
            ))}
       
        </Grid>
        <Typography variant='h4' align='center' bgcolor={'black'} color='white' mt={4} mb={4}>Most Popular</Typography>

        <Grid container columnSpacing={{xs:0, sm:1, md:1}} direction={'row'}>

        {popular.map(post => (
            <Grid item md={6} xs={12} key={post.id}>
                 <PostsCard title={post.title} excerpt={post.excerpt} image={`${REACT_APP_API_URL}${post.image}`}  myDirection={'block'} />

            </Grid>
            ))}                                       
          
            
        </Grid> 

            
        <Stack spacing={2}
         mt={3}
          mb={3} 
          justifyContent='center' 
          alignItems={'center'}>

         <Pagination count={10} color="warning" /></Stack>
        

        
    </Box>
  )
}

export default Posts