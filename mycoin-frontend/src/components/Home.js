import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Box textAlign="center" mt={8}>
                <Typography variant="h2" gutterBottom>
                    Welcome to MyCoin
                </Typography>
                <Box mt={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                        component={Link}
                        to="/create-wallet"
                    >
                        Create Wallet
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/access-wallet"
                    >
                        Access Wallet
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
