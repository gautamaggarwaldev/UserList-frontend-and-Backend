import express from "express"; //step 1: to load the necessary dependencies
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"; //step 5: to load the routes

const app = express(); // object app = application object

//mongodb connection
mongoose.connect("mongodb+srv://wal2004gautam:hfmXW7z24L11so9s@cluster0.dpbp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true // to use the new server discover andmonitoring engine, pass this option

    }
);
//end
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute); //step 6: to use the routes

app.listen(5000, () => console.log('Server Started...')); //step 2: to start the server