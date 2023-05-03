const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path')
const port = process.env.PORT || 3000;
const mainRouter = require('./routes/mainRouter');
const userRoutes = require('./routes/usersRoutes');
const cors = require('cors');


app.use(express.json())
app.use(express.static('public'));
app.use(session({ secret: 'Mi string secreto',
resave: false,
saveUninitialized: false, }))
app.use(mainRouter);
app.use(userRoutes);
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3007, () => console.log("Servidor corriendo en el puerto 3007"));







