// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const cors = require('cors');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'doyle.senger@ethereal.email',
        pass: 'FPJwGyX9SrySxBxQcp'
    }
});


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
        const ma = await transporter.sendMail({
            from: '"BRODYPAETAU NFTS" <testavaliable0@gmail.com>',
            to: "alfazsozib@gmail.com",
            subject: "Verify Your Email",
            html: `
              <p> Hey there,</p>
              
                <p>Thanks for signing up! We're thrilled to have you on board.</p>
              
                <div>
                  <p>
                  But before we get started, we need to make sure your email address is legit. It's an important step to keep your
                  account secure and to ensure you don't miss out on any exciting updates or promotions.
                  </p>
                  
                  <p>
                  So click on the verification link below to confirm your email address and get started
                  with your offsetting journey
                  today!
                  </p>
              
        
                <p>Thanks for your cooperation!</p>
                <br>
                </div>
        
                Best,
                <br>
                ------
            `,
          })
          console.log(ma)
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
