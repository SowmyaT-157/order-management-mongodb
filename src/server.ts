import express from 'express';
import mongoose from 'mongoose';


mongoose.connect("mongodb://localhost:27017/order_managements")
    const app = express();
    app.use(express.json());
    const PORT = process.env.PORT
    app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});


mongoose.connection.on('connected',()=>{
    console.log("connection successful..")
})

mongoose.connection.on('disconnected',()=>{
    console.log("connection disconnected")
})


