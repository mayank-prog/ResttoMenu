const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const orderRoutes = require('./src/routes/orderRoutes');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb+srv://DigitalMenu:g673OeVca8Sbrl7c@cluster0.v6leson.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// ADD THIS
var cors = require('cors');
app.use(cors());
const restaurant = {
    restroId:1234,
    name: "Anupam Sweets",
    phone: "+919876543210",
    whatapp: "+919876543210",
    location: "Sector 11, Panchkula",
    location_url:"https://maps.app.goo.gl/GjwysuS4BephT38J7",
    service_type:'Pro',
    cuisine: ["🍀 Pure veg", "Mithai", "North Indian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          {
            id: 1,
            name: "Garlic Bread",
            description:"A classic cheesy Margherita. Cant go wrong. [Fat-14.3 per 100 g, Protein-12.6 per 100 g, Carbohydrate-39.2 per 100 g, Sugar-0 per 100 g, Calories-336 K.cal] Nutritional information per 100g",
              image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 30,
          },
          {
            id: 2,
            name: "Bruschetta",
            image:"https://b.zmtcdn.com/data/dish_photos/406/cde170d1a6e61fc076eb744f1961e406.jpeg?fit=around|130:130&crop=130:130;*,*.jpg",
            price: 89,
          },{
            id: 9,
            name: "Garlic Bread",
            image:"https://b.zmtcdn.com/data/reviews_photos/6bb/bcfdf6e4cbbe577228c90c88af0376bb_1566640127.jpg?",
            price: 99,
          },
          {
            id: 10,
            name: "Bruschetta",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 79,
          },
        ],
      },
      {
        category: "Main Course",
        items: [
          {
            id: 3,
            name: "Chicken Alfredo Pasta",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 19,
          },
          {
            id: 4,
            name: "Grilled Salmon",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 159,
          },
        ],
      },
      {
        category: "Desserts",
        items: [
          {
            id: 5,
            name: "Chocolate Lava Cake",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 699,
          },
          {
            id: 6,
            name: "Vanilla Ice Cream",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 499,
          },
          {
            id: 7,
            name: "Chocolate Lava Cake",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 699,
          },
          {
            id: 8,
            name: "Vanilla Ice Cream",
            image:"https://b.zmtcdn.com/data/reviews_photos/af9/55ad1e22ccdf705b76c0e834f4b6caf9_1567925831.jpg",
            price: 499,
          },
        ],
      },
      {
        category: "Appetizers4",
        items: [
          {
            id: 11,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 12,
            name: "Bruschetta",
            price: 799,
          },{
            id: 13,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 14,
            name: "Bruschetta",
            price: 789,
          },
        ],
      },        
      {
        category: "Appetizers3",
        items: [
          {
            id: 15,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 16,
            name: "Bruschetta",
            price: 799,
          },{
            id: 17,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 18,
            name: "Bruschetta",
            price: 799,
          },
        ],
      }, 
      {
        category: "Appetizers2",
        items: [
          {
            id: 19,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 20,
            name: "Bruschetta",
            price: 99,
          },{
            id: 21,
            name: "Garlic Bread",
            price: 599,
          },
          {
            id: 22,
            name: "Bruschetta",
            price: 99,
          },
        ],
       },               
    ],
};

// Routes
app.use('/restro', orderRoutes);

// Render Html File
app.get('/1234', function(req, res) {
  // res.sendFile(path.join(__dirname, 'templates/menu.js'));
  return res.send(restaurant);

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

