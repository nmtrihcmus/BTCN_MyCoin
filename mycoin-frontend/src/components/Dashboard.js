import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Grid, Avatar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Lấy dữ liệu ví từ state
    const wallet = location.state?.wallet;

    // Dữ liệu mẫu cho đồ thị
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Balance Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
                tension: 0.1
            }
        ]
    };

    return (
        <Container>
            <Box mt={2} mb={4}>
                <Button variant="outlined" color="secondary" onClick={() => navigate('/access-wallet')} sx={{ mb: 2 }}>
                    Back to Access Wallet
                </Button>
            </Box>
            <Box my={4} textAlign="center">
                <Typography variant="h4" gutterBottom>
                    Wallet Dashboard
                </Typography>
                <Box mb={4}>
                    <Avatar sx={{ width: 120, height: 120, bgcolor: '#42A5F5' }}>
                        {wallet ? wallet.address[0] : 'W'}
                    </Avatar>
                </Box>
                {wallet ? (
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6">Wallet Overview</Typography>
                                    <Typography>Address: {wallet.address}</Typography>
                                    <Typography>Private Key: {wallet.privateKey}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6">Balance Over Time</Typography>
                                    <Line data={data} />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ) : (
                    <Typography>No wallet data available</Typography>
                )}
                <Box mt={4}>
                    <Button variant="contained" color="primary" onClick={() => navigate('/access-wallet')}>
                        Access Another Wallet
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Dashboard;
