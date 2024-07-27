import React ,{useState} from 'react'
import {AppBar, Toolbar,Box,Typography, TextField, Drawer, List, ListItem, ListItemButton} from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import Serch from '../search/Serch';



const Navbar = () => {

    const StyledToolBar = styled(Toolbar)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    })

    const MenuBox = styled(Box)({
        display:'flex',
        gap:30,
        cursor:'pointer',


    })

    const MenuItem = [
        {Name:'Home',Link:'#'},
        {Name:'Recipies',Link:'#'},
        {Name:'About Us',Link:'#'},
        {Name:'Subscribe',Link:'#'},
        
      ];

      const [openMenu , setOpenMenu] = useState(false)

  return (

    <>
    <AppBar color='default' position='sticky' elevation={4}>
        <StyledToolBar>

            <Box flex={{xs:25,md:1}}>
                <Typography variant='h4' color={'tomato'} sx={{fontFamily:"Anta, sans-serif",
                textAlign:{xs:'center',md:'left'}}}> Chandra

                </Typography>
            </Box>

            <MenuBox flex={1} 
            sx={{display:{xs:'none',md:'flex'}}}>
                {MenuItem.map((item)=>(
                    <Typography variant='body2' color={'blue'}>
                        {item.Name}

                    </Typography>
                ))}
            </MenuBox>
            <Box flex={1}>
            

            <Serch/>
            
            <MenuIcon sx={{display:{xs:'flex', md:'none'}, cursor:'pointer'}}
            onClick = {()=>setOpenMenu(!openMenu)}/>     
            </Box>
        </StyledToolBar>
       
 <Drawer     
  anchor={'top'} open={openMenu}
  onClose={() => setOpenMenu(!openMenu)}
>
  <List>
    {MenuItem.map((item) => (
      <ListItem key={item.Name}>
        <ListItemButton>{item.Name}</ListItemButton>
      </ListItem>
    ))}
  </List>
  <TextField 
        sx={{display:{xs:'flex',md:'none'}}} 
        color="warning" 
        label="Search Here!" 
        variant="outlined" />
   </Drawer>
       
    </AppBar>

<Box 
sx={{display:'flex',
justifyContent:'center',
flexDirection:{xs:'column',md:'row'},
padding:1,
}}>

<Typography align= 'center' variant='h5' mr={{xs:0,md:1}} 
color={'violet'} sx={{fontFamily:'Protest Revolution", sans-serif'}}>
    Simple recipies made for Coders!
</Typography>

<Typography 
align= 'center'
variant='h5'
color={'tomato'} 
sx={{fontFamily:"Splash , cursive"}}>
    Simple recipies made for Coders!
</Typography>

</Box>
</>
  )
}

export default Navbar