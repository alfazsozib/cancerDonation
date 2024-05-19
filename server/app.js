// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const cors = require('cors');




const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://aspro1141:EhUWzcK0uzIDs6i7@donate.nyuu3rd.mongodb.net/?retryWrites=true&w=majority&appName=donate')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User registration endpoint
app.post('/register', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'Email already exists' });
        }else {
            res.status(201).json({ message: 'User Created' });
        }
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// User login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password)
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/donator', async (req,res)=>{
    const user = await User.findOne({});
    res.json(user)
})


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
