module.exports = function(application){
	application.get('/principal', function(req,res){
		if(typeof user == 'undefined' ){
			res.send('erro!');
		}
		else{
			res.render('principal/index');
		}
	});
}