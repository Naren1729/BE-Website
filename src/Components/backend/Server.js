const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Endpoint to get products
app.get('/api/products', (req, res) => {
  fs.readFile('products.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to load products' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  fs.readFile('products.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to load products' });
    }
    const products = JSON.parse(data);
    products.push({ ...newProduct, id: products.length + 1 });
    fs.writeFile('products.json', JSON.stringify(products, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to update products' });
      }
      res.json({ message: 'Product added successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
