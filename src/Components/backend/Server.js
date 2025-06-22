const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5050;

const DATA_DIR = __dirname;
const PRODUCTS_FILE = path.join(DATA_DIR, 'Products.json');
const USERS_FILE = path.join(DATA_DIR, 'Users.json');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'Enquiries.json');

app.use(cors());
app.use(express.json());

function readJson(file, cb) {
  fs.readFile(file, (err, data) => {
    if (err) return cb(err);
    try {
      cb(null, JSON.parse(data));
    } catch (e) {
      cb(e);
    }
  });
}

function writeJson(file, obj, cb) {
  fs.writeFile(file, JSON.stringify(obj, null, 2), cb);
}

// Endpoint to get products
app.get('/api/products', (req, res) => {
  fs.readFile(PRODUCTS_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to load products' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  fs.readFile(PRODUCTS_FILE, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to load products' });
    }
    const products = JSON.parse(data);
    products.push({ ...newProduct, id: products.length + 1 });
    fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to update products' });
      }
      res.json({ message: 'Product added successfully' });
    });
  });
});

// Register a new user
app.post('/api/register', (req, res) => {
  const user = req.body;
  readJson(USERS_FILE, (err, users) => {
    if (err) return res.status(500).json({ message: 'Failed to load users' });
    if (users.find(u => u.username === user.username)) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = { ...user, id: users.length + 1, role: 'user' };
    users.push(newUser);
    writeJson(USERS_FILE, users, err2 => {
      if (err2) return res.status(500).json({ message: 'Failed to save user' });
      res.json({ message: 'Registered successfully' });
    });
  });
});

// Login user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  readJson(USERS_FILE, (err, users) => {
    if (err) return res.status(500).json({ message: 'Failed to load users' });
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', role: user.role });
  });
});

// Save enquiry
app.post('/api/enquiries', (req, res) => {
  const enquiry = req.body;
  readJson(ENQUIRIES_FILE, (err, enquiries) => {
    if (err) return res.status(500).json({ message: 'Failed to load enquiries' });
    enquiries.push({ ...enquiry, id: enquiries.length + 1 });
    writeJson(ENQUIRIES_FILE, enquiries, err2 => {
      if (err2) return res.status(500).json({ message: 'Failed to save enquiry' });
      res.json({ message: 'Enquiry saved' });
    });
  });
});

// Get enquiries
app.get('/api/enquiries', (req, res) => {
  readJson(ENQUIRIES_FILE, (err, enquiries) => {
    if (err) return res.status(500).json({ message: 'Failed to load enquiries' });
    res.json(enquiries);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
