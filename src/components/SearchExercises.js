import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react'

const SearchExercises = () => {
 return (
  <Stack
   alignItems='center'
   mt='37px'
   justifyContent='center'
   p='20px'
  >
   <Typography
    fontWeight={700}
    sx={{ fontSize: { lg: '44px', xs: '30px' } }}
    mb='50px'
    textAlign='center'
   >
    Awesome Exercises You <br /> Should Know
   </Typography>
   <Box position='relative' mb='72px' alignItems='center'>
    <TextField
     sx={{
      input: { fontWeight: '700', borderRadius: '4px', border: 'none' },
      width: { lg: '800px', xs: '340px' },
      backgroundColor: '#fff',
      borderRadius: '40px'
     }}
     height='75px'
     value=''
     onChange={(e) => { }}
     placeholder='Search Exercises'
     type='text'
    />
    <Button
     className='search-btn'
     sx={{
      bgcolor: '#ff2625',
      color: '#fff',
      textTransform: 'none',
      width: { lg: '170px', xs: '80px' },
      fontSize: { lg: '20px', xs: '14px' },
      height: '56px',
      position: 'absolute',
      // marginLeft:'3px',
      right: '0'
     }}
    
    >
     Search
    </Button>
   </Box>

  </Stack>
 )
}

export default SearchExercises