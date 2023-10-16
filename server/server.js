const express = require('express');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const { connectToDatabase } = require('./database/connect');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/admin', adminRouter);
app.use('/users', userRouter);

connectToDatabase();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));