import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import {REACT_APP_API_URL} from '../apikeys/Constants';
import PostsCard from '../Posts/PostsCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxHeight:600,
    minHeight:600,
    overflow:'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Serch = () => {

   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [Search,setSearch] = useState([])
    const [LookUp,setLookUp] = useState()

   useEffect(()=>{
      const fetchData = async () => {
         try {
            const res = await axios.get(`${REACT_APP_API_URL}/api/blogs/`);
            setSearch(res.data);
            
         } catch (error) {
            alert(error)
        
            
         }
      }
      fetchData()
   },[])

  return (
    <div>
    

    <TextField 
            sx={{display:{xs:'none',md:'flex'}}} 
            color="warning" 
            label="Search Here!" 
            variant="standard" 
            onClick={()=>setOpen(true)}/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

      <TextField 
            sx={{display:{xs:'none',md:'flex'}}} 
            color="warning" 
            label="Search Here!" 
            variant="standard" 
            onChange = {(e)=>setLookUp(e.target.value)}
            />

            {/* {Search.filter((post)=>post.title.toLowerCase().includes(LookUp)).map((post)=>(
              <Grid item xs >
                <PostsCard title={post.title} excerpt={post.excerpt} image={`${REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.id}`} myDirection={'flex'} />
             </Grid>
                
            ))} */}
            {Search.filter((post) => post.title.toLowerCase().includes(LookUp)).map((post) => (
                <Grid item xs key={post.id}>
                  <PostsCard title={post.title} excerpt={post.excerpt} image={`${REACT_APP_API_URL}${post.image}`} blogHref={`/details/${post.id}`} myDirection={'flex'} />
                </Grid>
              ))}

      </Box>
    </Modal>
  </div>
  )
}

export default Serch