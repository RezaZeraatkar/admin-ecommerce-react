import express from 'express';
import Product from './models/products.js';
import Variant from './models/variants.js';
import Attribute from './models/attributes.js';
import sequelize from './db/index.js';

const app = express();
const port = 8080;

/** */
app.use(express.json()); // parses requests of application/json
app.use(express.urlencoded({ extended: true })); // parses requests of application/x-www-form-urlencode

// CRUD routes for Product model
app.get('/api/products', async (req, res) => {
  const products = await Product.findAll({ include: Variant });
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id, { include: Variant });
  res.json(product);
});

app.post('/api/products', async (req, res) => {
  const product = await Product.create(req.body, { include: Variant });
  res.json(product);
});

app.put('/api/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update(req.body);
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// CRUD routes for Attribute model
app.get('/api/attributes', async (req, res) => {
  const attributes = await Attribute.findAll();
  res.json(attributes);
});

app.get('/api/attributes/:id', async (req, res) => {
  const attribute = await Attribute.findByPk(req.params.id);
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(404).json({ message: 'Attribute not found' });
  }
});

app.post('/api/attributes', async (req, res) => {
  const attribute = await Attribute.create(req.body);
  res.json(attribute);
});

app.put('/api/attributes/:id', async (req, res) => {
  const attribute = await Attribute.findByPk(req.params.id);
  if (attribute) {
    await attribute.update(req.body);
    res.json(attribute);
  } else {
    res.status(404).json({ message: 'Attribute not found' });
  }
});

app.delete('/api/attributes/:id', async (req, res) => {
  const attribute = await Attribute.findByPk(req.params.id);
  if (attribute) {
    await attribute.destroy();
    res.json({ message: 'Attribute deleted' });
  } else {
    res.status(404).json({ message: 'Attribute not found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred on the server [500]' });
});

// Sync models with database
sequelize.sync();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
