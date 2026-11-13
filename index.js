// Import express 
import express from 'express' 

// create Instance of express app 
const app =express();

// define port 
const port= 3000

// Hint: To send a file, you'll need to provide an absolute path.
//  Use path.join(__dirname, 'public/index.html') to create a reliable
//  path to your HTML files.
app.use(express.static('./public'));

// Create a route handler for GET requests to the root URL (/). 
// When this route is requested, it should send the index.html file 
// from your public directory.(SET UP GET REQUEST) 
app.get("/", (req, res)=>{
    res.send("index") //
});

app.get("/contact", (req, res)=>{
    res.send("contact")
})

// Listen for incoming request 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});

