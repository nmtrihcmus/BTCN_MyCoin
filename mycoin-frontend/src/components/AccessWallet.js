import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccessWallet = () => {
    const [method, setMethod] = useState('privateKey');
    const [privateKey, setPrivateKey] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const handleAccess = async () => {
        try {
            const result = await axios.post('http://localhost:5000/wallet/access', { privateKey, password });
            setResponse(result.data);

            // Chuyển hướng đến Dashboard và truyền dữ liệu ví qua state
            navigate('/dashboard', { state: { wallet: result.data } });
        } catch (error) {
            console.error('Error accessing wallet:', error);
        }
    };

    return (
        <Container>
            <Box mt={2} mb={4}>
                <Button variant="outlined" color="secondary" onClick={() => navigate('/')} sx={{ mb: 2 }}>
                    Back
                </Button>
            </Box>
            <Box mt={2}>
                <Typography variant="h4" gutterBottom>
                    Access Wallet
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row value={method} onChange={(e) => setMethod(e.target.value)}>
                        <FormControlLabel value="privateKey" control={<Radio />} label="Private Key" />
                        <FormControlLabel value="passphrase" control={<Radio />} label="Passphrase" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    label="Enter Private Key"
                    fullWidth
                    margin="normal"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                />
                <TextField
                    label="Enter password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAccess} sx={{ mt: 2 }}>
                    Access
                </Button>
                {response && (
                    <Box mt={4}>
                        <Typography variant="h6">Wallet Accessed</Typography>
                        <Typography>Address: {response.address}</Typography>
                        <Typography>Private Key: {response.privateKey}</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AccessWallet;
