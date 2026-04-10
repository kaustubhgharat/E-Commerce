require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('./models/Item');

const products = [
    { title: 'Wireless Headphones', description: 'Premium noise-cancelling over-ear headphones', category: 'Electronics', price: 2999 },
    { title: 'Running Shoes', description: 'Lightweight and breathable sports shoes', category: 'Footwear', price: 1499 },
    { title: 'Backpack', description: 'Durable 30L travel backpack with laptop compartment', category: 'Bags', price: 999 },
    { title: 'Sunglasses', description: 'UV400 polarized sunglasses', category: 'Accessories', price: 599 },
    { title: 'Smartwatch', description: 'Fitness tracker with heart rate monitor', category: 'Electronics', price: 3499 },
    { title: 'Cotton T-Shirt', description: 'Comfortable everyday cotton t-shirt', category: 'Clothing', price: 299 },
    { title: 'Yoga Mat', description: 'Non-slip 6mm thick exercise mat', category: 'Fitness', price: 799 },
    { title: 'Water Bottle', description: 'Insulated stainless steel 1L bottle', category: 'Fitness', price: 449 },
    { title: 'Desk Lamp', description: 'LED adjustable desk lamp with USB charging port', category: 'Home', price: 849 },
    { title: 'Notebook Set', description: 'Pack of 3 ruled notebooks A5 size', category: 'Stationery', price: 199 },
];

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(async () => {
        console.log('Connected to MongoDB');
        await Item.deleteMany({});
        await Item.insertMany(products);
        console.log(`Seeded ${products.length} products successfully`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
