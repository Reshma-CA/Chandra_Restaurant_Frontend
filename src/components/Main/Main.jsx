import React from 'react'
import { Box, Container, Stack} from '@mui/material'
import Posts from '../Posts/Posts'
import RightBar from '../RightBar/RightBar'
import Hero from '../Hero/Hero'


const Main = () => {
  return (
    <>
    <Hero/>
    <Container>
    <Stack direction={'row'} spacing={1} mt={3}>

        <Box flex={3}>
        <Posts/>
        </Box>
        <Box flex={1} display={{xs:'none',md:'block'}}>
        <RightBar/>
        </Box>
    </Stack>
    </Container>
    </>
    
  )
}

export default Main