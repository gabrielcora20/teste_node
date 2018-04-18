mysql = require('mysql');
module.exports = function(){

    this.executaLogin = function(connection, login, callback){  
    	var params = new Array();
    	params[0] = login.login;
    	params[1] = login.senha;
    	var ps = new mysql.preparedStatement(connection);
    	ps.prepare(mysqlStatement, function(err){
    		ps.execute(params, function(err, data){
    			ps.unprepare(function(err){

    			});
    		});
    	});
    	
    	//var prepState = 'SELECT * AS irineu FROM login WHERE login=? AND senha=?;';
    	//var result = connection.query(prepState,params);     
        //connection.query('SELECT * AS irineu FROM login WHERE login=? AND senha=?;', [login.login,login.senha], callback);    
        //console.log();    
    }

    return this;

}