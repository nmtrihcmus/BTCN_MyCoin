import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateWallet = () => {
    const [method, setMethod] = useState('privateKey');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const handleCreate = async () => {
        try {
            const result = await axios.post('http://localhost:5000/wallet/create', { password });
            setResponse(result.data);
        } catch (error) {
            console.error('Error creating wallet:', error);
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
                    Create Wallet
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row value={method} onChange={(e) => setMethod(e.target.value)}>
                        <FormControlLabel value="privateKey" control={<Radio />} label="Private Key" />
                        <FormControlLabel value="passphrase" control={<Radio />} label="Passphrase" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    label="Enter password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleCreate} sx={{ mt: 2 }}>
                    Create
                </Button>
                {response && (
                    <Box mt={4}>
                        <Typography variant="h6">Wallet Created</Typography>
                        <Typography>Address: {response.address}</Typography>
                        <Typography>Private Key: {response.privateKey}</Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default CreateWallet;
