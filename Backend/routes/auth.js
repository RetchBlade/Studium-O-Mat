// routes/auth.js
const express = require('express');
const User = require('@/models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
