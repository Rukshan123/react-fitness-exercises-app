import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
 return (
  <Box sx={{
   mt: { lg: '212px', xs: '70px' },
   ml: { sm: '50px' }
  }} position='relative' p='20px'>

   <Typography color='#FF2625' fontSize='26px' fontweight='600'>
    Fitness Club
   </Typography>

   <Typography fontWeight={700}
    sx={{ fontSize: { lg: '44px', xs: '40px' } }}
    mb='23px'
    mt='35px'
   >
    Sweat, smile <br /> and repeat
   </Typography>

   <Typography fontSize='22px' lineHeight='35px' sx={{ marginBottom:{lg:8 , xs:5} }}>
    Check out the most effective exercises
   </Typography>

   <Button sx={{ backgroundColor: '#ff2625', padding: '10px', marginBottom: { lg: 18, xs: 5 }}} variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
   <Typography
    fontWeight={600}
    color='#ff2625'
    sx={{
     opacity: 0.1,
     display: { lg: 'block', xs: 'none' }
    }}
    fontSize='200px'
   >
    Exercises
   </Typography>
   <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />

  </Box>
 )
}

export default HeroBanner