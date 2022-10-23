import { Box, Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const HomePage = () => {
    return (
        <Container maxWidth='xl' sx={{ my:2 }}>
            <Stack direction='column' spacing={2}>
                <Box>
                    <Typography variant='body1' color='primary'>Hero Section</Typography>
                </Box>
                <Box>
                    <Typography variant='body2' color='primary.light'>Latest News</Typography>
                </Box>
            </Stack>

        </Container>
    );
}

export default HomePage;
