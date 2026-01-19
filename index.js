const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // To use the product.model.js file
const productRoute = require('./routes/product.route.js')
const app = express();

//middleware
app.use(express.json()); //It enables us to pass JSON file (we have sent JSON request w/o building frontend by using insomnia)
app.use(express.urlencoded({extended: false})); // To use Form URL encoded in Insomnia



//routes
app.use("/api/products", productRoute);



app.get('/', (req, res) => { //req is request(from client) and res is response(from server)
    res.send("Hello from Node API, Changes, hi")                        // '/' is for default page
                
}); 

// app.get('/api/products', async (req, res) => {  // API to see all the products added 
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }   
// });   

// app.get('/api/products/:id', async (req, res) => { // To get a single product of some id
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.post('/api/products', async (req, res) => {  // Add a product
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message: error.message}); 
//     }
// });

//Update a Product
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){ 
//             return res.status(404).json({message: "Product not found!"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     } 
// });

// Delete a Product
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if(!product){ 
//             return res.status(404).json({message: "Product not found!"});
//         }    

//         res.status(200).json({message: "Product deleted Successfully"});

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// }); Reet%401234

mongoose.connect("mongodb+srv://reetsolanki:<Password_from_MongoDB>@cluster0.1wsbabz.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("Connected to the DataBase!");
    app.listen(3000, () => {
        console.log("Server is running on port '3000'");
    })
})
.catch((err) => {
  console.log("Connection Failed");
  console.error(err.message);
});
