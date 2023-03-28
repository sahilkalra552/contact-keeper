const express = require('express'); //common js syntax used to bring in modules
const connectDB = require('./config/db');


const app = express();

//connect databse
connectDB();

//init middleware
app.use(express.json({extended: false}));

app.get('/',(req,res) =>
    res.json({msg: "welcome to the ck api"})
);

//define routes
app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));


const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
