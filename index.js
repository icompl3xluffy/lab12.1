// Import express 
import express from 'express' 

// create Instance of express app 
const app =express();

// define port 
const port= 3000


app.use(express.static('./public'));
// set up  GET request 
app.get("/", (req, res)=>{
    res.send("Requested  to index")
});

app.get("/contact", (req, res)=>{
    res.send("Requested  to index")
})


