const express = require('express');
const sequelize = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userBasicInfoRoutes = require('./routes/userBasicInfoRoutes');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/user-basic-info', userBasicInfoRoutes);

app.use(errorHandler);//they can occured any error that this errorHandler call..!

app.get('/',(req,res)=>{
    res.send("Hello,World..!")
})

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  console.log('All models were synchronized successfully.');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
