module.exports = function(app){
    
  app.get('/backend', function(req, res){ 

      let connection = app.app.config.database();

      let query = app.app.models.conteudoModel;
      query.getConteudoBack(connection, 
        function(error, results, fields){
        console.log(error, results)
        res.render('paginas/backend',{dados:results});
      });

  });
}