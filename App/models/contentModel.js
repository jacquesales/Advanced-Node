module.exports = function(){
  this.getConteudo = (connection, callback) => {
      connection.query("SELECT * FROM conteudo",callback);
  }
 
  this.getConteudoFront = function(connection, callback){
      connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",callback);
  }
 
  this.getConteudoBack = function(connection, callback){
      connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'",callback);
  }
  
 this.salvarConteudo = function(conteudo, connection, callback){ 
     connection.query('INSERT INTO conteudo set ?', conteudo);
 }
 
  return this; 
}