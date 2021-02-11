module.exports = function(app){

  const cepSearch = require("../functions/CEP_Search");

  app.post("/envia-cep", async (req, res) =>{

  const {cep} = req.body;
  const result = await cepSearch(cep);
  console.log(result);
  res.render('paginas/resultadocep',{dado:result});
});

}