module.exports = function(application){
	application.get('/',function(req,res){
		res.render('./home/index');
	});

	application.post('/efetuaLogin',function(req,res){
		var credenciais = req.body;

		var connection = application.config.dbConnection();
		var loginModel = application.app.models.loginModel;

		loginModel.executaLogin(connection, credenciais, function(erro,result){
			res.send(result);			
		});
	});
}
