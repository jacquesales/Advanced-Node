const app = require('./App/config/server');

const rotaHome = require('./App/routes/home')(app);
const rotaFront = require('./App/routes/frontend')(app);
const rotaBack = require('./App/routes/backend')(app);

app.listen(3500, function(){
    console.log("Servidor ativo!");
})